import { BrowserRouter, Routes, Route, Navigate } from "react-router"

import App from "./App"
import Inventory from "./pages/Inventory"
import Suppliers from "./pages/Suppliers"
import Reporting from "./pages/Reporting"
import Staff from "./pages/Staff"
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"
import { BoxIcon, TruckIcon, MonitorIcon, SettingsIcon, LayoutDashboardIcon } from 'lucide-react';

export const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboardIcon },
    { path: '/inventory', label: 'Inventory', icon: BoxIcon },
    { path: '/suppliers', label: 'Suppliers', icon: TruckIcon },
    { path: '/reports', label: 'Reports', icon: MonitorIcon },
    { path: '/settings', label: 'Settings', icon: SettingsIcon },
];

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Dashboard />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="suppliers" element={<Suppliers />} />
                    <Route path="reports" element={<Reporting />} />
                    <Route path="staff" element={<Staff />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
