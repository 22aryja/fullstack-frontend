import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { useState, type FC } from 'react';
import type { ShopItem } from './ShopPage';

interface Props {
    onAdd: (item: ShopItem) => void;
}

const ItemFrom: FC<Props> = ({ onAdd }) => {
    const [name, setName] = useState<string>('');
    const [value, setValue] = useState<number>(1);

    const handleNameChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setName(event.target.value);
    };

    const handleChange = (_: Event, newValue: number) => {
        setValue(newValue);
    };

    const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdd({ name, kg: value });
    };

    return (
        <form className="flex flex-col gap-4 p-4" onSubmit={handleSumbit}>
            <TextField
                id="outlined-basic"
                label="Enter item name"
                variant="outlined"
                required
                onChange={handleNameChange}
            />

            <Divider />

            <div className="flex flex-col gpa-2">
                <label className="text-xs text-gray-400">
                    Your item's weight is {value} kg
                </label>
                <Slider
                    aria-label="Volume"
                    min={1}
                    max={20}
                    value={value}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit">ADD</Button>
        </form>
    );
};

export default ItemFrom;
