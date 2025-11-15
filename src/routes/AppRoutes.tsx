import App from '@/App';
import UsersPage from '@/components/users/UsersPage';
import { BrowserRouter, Route, Routes } from 'react-router';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<UsersPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
