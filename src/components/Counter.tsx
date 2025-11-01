import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount((prev: number) => prev + 1);
    };

    const decrement = () => {
        setCount((prev: number) => prev - 1);
    };

    return (
        <section className="w-full flex justify-center mt-12">
            <div className="flex flex-col gap-4 items-center p-4 border border-solid rounded-md">
                <div>{count}</div>
                <div className="flex gap-8">
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
        </section>
    );
};

export default Counter;
