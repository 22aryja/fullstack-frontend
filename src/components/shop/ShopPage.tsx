import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { Fragment, useMemo, useState } from 'react';
import ItemFrom from './ItemFrom';
import Divider from '@mui/material/Divider';

export interface ShopItem {
    name: string;
    kg: number;
}

const ShopPage = () => {
    const [items, setItems] = useState<ShopItem[]>([]);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open: boolean = useMemo(() => Boolean(anchorEl), [anchorEl]);

    const handleAdd = (newItem: ShopItem) => {
        setItems((prevItems: ShopItem[]) => [...prevItems, newItem]);
        handleClose();
    };

    return (
        <section className="flex flex-col gap-4 m-16 border border-solid border-gray-50 rounded-md overflow-hidden">
            <div className="w-full bg-sky-800 p-4 text-white text-2xl">
                Shopping list
            </div>
            <div className="w-full flex justify-center">
                <Button
                    className="text-white! bg-transparent! hover:bg-white"
                    onClick={handleClick}
                >
                    ADD ITEM
                </Button>
            </div>
            <div className="p-4 flex flex-col gap-4">
                {items.length === 0 ? (
                    <h1 className="text-gray-400 text-4xl text-center">
                        No items...
                    </h1>
                ) : (
                    items.map(({ name, kg }: ShopItem, index: number) => (
                        <Fragment key={index}>
                            <div className="w-full flex flex-col gap-2">
                                <h1 className="font-medium text-lg text-white">
                                    {name}
                                </h1>
                                <h2 className="text-base text-gray-400">
                                    {kg} kg
                                </h2>
                            </div>

                            {items.length - 1 != index && (
                                <Divider className="bg-gray-400" />
                            )}
                        </Fragment>
                    ))
                )}
            </div>
            <Popover
                id={'create-item'}
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
                <ItemFrom onAdd={handleAdd} />
            </Popover>
        </section>
    );
};

export default ShopPage;
