import App from '@/App';
import ShopPage from '@/components/shop/ShopPage';
import TablePage from '@/components/table/TablePage';
import WelcomePage from '@/components/welcome/WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/grid" element={<TablePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
