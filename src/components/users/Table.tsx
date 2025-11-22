import type { User } from '@/types/user';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { type FC, useState } from 'react';
import UserForm from './UserForm';

interface Props {
    rows: User[];
    onAdd: (newUser: Omit<User, 'id'>) => void;
    onEdit: (user: User) => void;
    onDelete: (user: User) => void;
}

const UserTable: FC<Props> = ({ rows, onAdd, onEdit, onDelete }) => {
    const [selectedUser, setSelectedUser] = useState<User | undefined>();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedUser(undefined);
    };

    const open = Boolean(anchorEl);

    const handleSubmit = (newUser: Omit<User, 'id'>, isEdited: boolean) => {
        if (isEdited) {
            onEdit({ id: selectedUser!.id, ...newUser });
        } else {
            onAdd(newUser);
        }
        handleClose();
    };

    const handleEdit =
        (user: User) =>
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            setSelectedUser(user);
            setAnchorEl(event.currentTarget);
        };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'surname', headerName: 'Surname', width: 200 },
        { field: 'age', headerName: 'Age', width: 90 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
                <>
                    <Button onClick={handleEdit(params.row)}>EDIT</Button>
                    <Button onClick={() => onDelete(params.row)}>DELETE</Button>
                </>
            ),
        },
    ];

    return (
        <div className="w-full h-full">
            <Button onClick={handleClick}>ADD USER</Button>

            <DataGrid
                rows={rows}
                columns={columns}
                showToolbar
                disableRowSelectionOnClick
            />

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <UserForm onSubmit={handleSubmit} user={selectedUser} />
            </Popover>
        </div>
    );
};

export default UserTable;
