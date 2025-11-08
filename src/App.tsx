import GitHub from './components/GitHub';
import Weather from './components/Weather';
import Provider from './providers/Provider';

function App() {
    return (
        <Provider>
            <main className="w-screen h-screen">
                <Weather />
                <GitHub />
            </main>
        </Provider>
    );
}

export default App;
