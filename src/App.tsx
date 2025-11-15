import { Outlet } from 'react-router';
import Header from './components/layout/Header';

function App() {
    return (
        <main className="flex flex-col w-screen h-screen bg-neutral-800">
            {/* <Header /> */}
            <Outlet />
        </main>
    );
}

export default App;
