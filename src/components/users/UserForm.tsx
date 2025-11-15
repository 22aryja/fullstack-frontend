import type { User } from '@/types/user';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { useReducer, type FC } from 'react';

type State = Omit<User, 'id'>;

interface Action {
    type: keyof State;
    payload: string | number;
}

function reducer(state: State, action: Action): State {
    return {
        ...state,
        [action.type]: action.payload,
    };
}

const initialState: State = {
    name: '',
    surname: '',
    age: 0,
};

const transform = (user: User): State => {
    const { id, ...rest } = user;
    return rest;
};

interface Props {
    onSubmit: (state: State, isEdited: boolean) => void;
    user?: User;
}

const UserForm: FC<Props> = ({ onSubmit, user }) => {
    const [state, dispatch] = useReducer(
        reducer,
        user ? transform(user) : initialState
    );

    const handleChange = (_: Event, newValue: number) => {
        dispatch({ type: 'age', payload: newValue });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isEdited: boolean = !!user;
        onSubmit(state, isEdited);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
            <TextField
                label="Name"
                variant="outlined"
                required
                value={state.name}
                onChange={(
                    event: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                    >
                ) => dispatch({ type: 'name', payload: event.target.value })}
            />
            <TextField
                label="Surname"
                variant="outlined"
                required
                value={state.surname}
                onChange={(
                    event: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                    >
                ) => dispatch({ type: 'surname', payload: event.target.value })}
            />

            <div>
                <label>Age: {state.age}</label>
                <Slider
                    min={0}
                    max={100}
                    value={state.age}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit">{user ? 'Edit' : 'Add'}</Button>
        </form>
    );
};

export default UserForm;
