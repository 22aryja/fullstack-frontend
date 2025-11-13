import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Provider from './providers/Provider.tsx';
import AppRoutes from './routes/AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <AppRoutes />
        </Provider>
    </StrictMode>
);
