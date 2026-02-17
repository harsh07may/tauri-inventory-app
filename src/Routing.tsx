import { BrowserRouter, Routes, Route, Navigate } from "react-router"

import App from "./App"
import Inventory from "./pages/Inventory"
import Suppliers from "./pages/Suppliers"
import Reporting from "./pages/Reporting"
import Staff from "./pages/Staff"
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"

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
