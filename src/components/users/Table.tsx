import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMemo, useState, type FC } from 'react';
import type { User } from '@/types/user';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import UserForm from './UserForm';

interface Props {
    rows: User[];
    onAdd: (newUser: Omit<User, 'id'>) => void;
    onEdit: (user: User) => void;
    onDelete: (user: User) => void;
}

const UserTable: FC<Props> = ({ rows, onAdd, onEdit, onDelete }) => {
    const [selectedUser, setSelectedUser] = useState<User | undefined>(
        undefined
    );
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedUser(undefined);
    };

    const open: boolean = useMemo((): boolean => Boolean(anchorEl), [anchorEl]);

    const handleAdd = (newUser: Omit<User, 'id'>, isEdited: boolean) => {
        if (isEdited) {
            onEdit({ id: selectedUser!.id, ...newUser });
        } else {
            onAdd(newUser);
        }

        handleClose();
    };

    const handleEdit =
        (user: User) => (event: React.MouseEvent<HTMLButtonElement>) => {
            handleClick(event);
            setSelectedUser(user);
        };

    if (rows.length === 0) {
        return (
            <section className="w-full h-full bg-gray-50 flex flex-col justify-center items-center">
                <h1>No users</h1>
                <Button onClick={handleClick}>ADD</Button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <UserForm onSubmit={handleAdd} />
                </Popover>
            </section>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {Object.keys(rows[0]).map((col: string) => (
                            <TableCell key={col}>{col}</TableCell>
                        ))}
                        <TableCell align="center">
                            <Button onClick={handleClick}>ADD</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: User) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            {Object.keys(row).map((item: string) => (
                                <TableCell
                                    key={item}
                                    component="th"
                                    scope="row"
                                >
                                    {row[item as keyof User]}
                                </TableCell>
                            ))}
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                <Button onClick={handleEdit(row)}>EDIT</Button>
                                <Button onClick={() => onDelete(row)}>
                                    DELETE
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <UserForm onSubmit={handleAdd} user={selectedUser} />
            </Popover>
        </TableContainer>
    );
};

export default UserTable;
