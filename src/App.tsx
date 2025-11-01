import Counter from './components/Counter';
import Form from './components/Form';

function App() {
    return (
        <main className="w-screen h-screen">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-amber-400 text-center font-semibold">
                    LAB 8 & LAB 9
                </h1>
                <div>
                    <Counter />
                    <Form />
                </div>
            </div>
        </main>
    );
}

export default App;
