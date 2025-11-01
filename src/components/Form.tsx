import { useState, type ChangeEvent, type FormEvent } from 'react';

const Form = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.alert(`Hello, ${user.firstName} ${user.lastName}`);
        event.preventDefault();
    };

    return (
        <div className="w-full flex justify-center mt-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div>
                    <label>First name </label>
                    <input
                        type="text"
                        name="firstName"
                        className="outline-none border border-solid border-neutral-900 rounded-md"
                        onChange={handleChange}
                        value={user.firstName}
                    />
                </div>
                <div>
                    <label>Last name </label>
                    <input
                        type="text"
                        name="lastName"
                        className="outline-none border border-solid border-neutral-900 rounded-md"
                        onChange={handleChange}
                        value={user.lastName}
                    />
                </div>
                <div>
                    <label>Email </label>
                    <input
                        type="email"
                        name="email"
                        className="outline-none border border-solid border-neutral-900 rounded-md"
                        onChange={handleChange}
                        value={user.email}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
