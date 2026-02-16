import { Coffee, Home, Box, Truck, Monitor, Settings, PlusCircle } from 'lucide-react';

function Dashboard() {
    return (
        <div>
            <div className="flex h-screen overflow-hidden">

                <aside className="w-72 bg-sidebar-light dark:bg-[#2d251a] h-full flex flex-col p-6 border-r border-primary/10">
                    <div className="flex items-center gap-3 mb-10 px-2">
                        <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <Coffee className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-[#181611] dark:text-white text-lg font-bold leading-none">Cafe Central</h1>
                            <p className="text-[#8a7c60] dark:text-gray-400 text-xs mt-1">Inventory Management</p>
                        </div>
                    </div>
                    <nav className="flex-1 space-y-2">
                        <a className="flex items-center gap-3 px-4 py-3 rounded-full active-nav transition-all duration-200" href="#">
                            <Home className="w-5 h-5" />
                            <span className="font-semibold text-sm">Home</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#8a7c60] dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-200" href="#">
                            <Box className="w-5 h-5" />
                            <span className="font-semibold text-sm">Inventory</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#8a7c60] dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-200" href="#">
                            <Truck className="w-5 h-5" />
                            <span className="font-semibold text-sm">Suppliers</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#8a7c60] dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-200" href="#">
                            <Monitor className="w-5 h-5" />
                            <span className="font-semibold text-sm">Reports</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#8a7c60] dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-200" href="#">
                            <Settings className="w-5 h-5" />
                            <span className="font-semibold text-sm">Settings</span>
                        </a>
                    </nav>
                    <div className="mt-auto pt-6 border-t border-primary/10">
                        <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                            <PlusCircle className="w-5 h-5" />
                            Add Stock
                        </button>
                    </div>
                </aside>

                <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
                    {/* Header */}
                    <header className="flex items-center justify-between px-10 py-6 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
                        <div className="flex items-center gap-6">
                            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                        </div>
                    </header>
                </main>

            </div>
        </div>
    )
}

export default Dashboard