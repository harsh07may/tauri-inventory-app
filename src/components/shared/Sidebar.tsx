import { Coffee, Home, Box, Truck, Monitor, Settings, PlusCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router';

function Sidebar() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/inventory', label: 'Inventory', icon: Box },
        { path: '/suppliers', label: 'Suppliers', icon: Truck },
        { path: '/reports', label: 'Reports', icon: Monitor },
        { path: '/settings', label: 'Settings', icon: Settings },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-72 bg-sidebar dark:bg-[#2d251a] h-full flex flex-col p-2 border-r border-primary/10">
            <Link to="/" className="flex items-center gap-3 mb-10 px-2">
                <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <Coffee className="w-5 h-5" />
                </div>
                <div>
                    <h1 className="text-[#181611] dark:text-white text-lg font-bold leading-none">Cafe Central</h1>
                    <p className="text-[#8d775f] dark:text-gray-400 text-xs mt-1">Inventory Management</p>
                </div>
            </Link>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 ${isActive(item.path)
                            ? 'text-white bg-primary'
                            : 'text-primary dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="font-semibold text-sm">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-primary/10">
                <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                    <PlusCircle className="w-5 h-5" />
                    Add Stock
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;