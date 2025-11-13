import { Link } from 'react-router';
import Tooltip from '@mui/material/Tooltip';

interface NavItem {
    name: string;
    route: string;
}

const items: NavItem[] = [
    {
        name: 'Home',
        route: '/',
    },
    {
        name: 'Shop',
        route: '/shop',
    },
    {
        name: 'Table',
        route: '/grid',
    },
];

const Header = () => {
    return (
        <header className="w-full p-4 flex bg-sky-800">
            <nav className="flex gap-8">
                {items.map(({ name, route }: NavItem) => (
                    <Tooltip key={name} title={name} arrow>
                        <Link
                            to={route}
                            className="w-full h-full p-4 text-white text-lg hover:bg-sky-900 hover:underline"
                        >
                            {name}
                        </Link>
                    </Tooltip>
                ))}
            </nav>
        </header>
    );
};

export default Header;
