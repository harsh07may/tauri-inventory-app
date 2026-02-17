import StatisticsCard from "@/components/dashboard/StatisticsCard"
import Header from "@/components/shared/Header"
import Sidebar from "@/components/shared/Sidebar"
import { AlertTriangleIcon, CreditCardIcon, PackageIcon } from "lucide-react"
import { useEffect, useState } from "react";

import { getProducts, getUsers, getLowStock, getTotalValue } from "@/lib/db";


type DashboardStats = {
    totalProducts: number
    totalValue: number
    lowStock: number
}

function Dashboard() {

    const [stats, setStats] = useState<DashboardStats | null>(null)

    useEffect(() => {
        const load = async () => {
            try {
                const [products, lowStock, totalValue] = await Promise.all([
                    getProducts(),
                    getLowStock(),
                    getTotalValue(),
                ])

                setStats({
                    totalProducts: products.length,
                    totalValue,
                    lowStock,
                })
            } catch (error) {
                console.error('BACKEND ERROR:', error)
            }
        }
        load()
    }, [])

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-background dark:bg-background-dark">
                <Header />
                <section className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-3">
                    <StatisticsCard
                        icon={<PackageIcon />}
                        title="Total Products"
                        value={stats?.totalProducts ? `${stats.totalProducts.toLocaleString()}` : '—'}
                        className="bg-blue-50"
                        color="blue"
                    />

                    <StatisticsCard
                        icon={<CreditCardIcon />}
                        title="Total Value"
                        value={stats?.totalValue ? `$${stats.totalValue.toLocaleString()}` : '—'}
                        className="bg-purple-50"
                        color="purple"
                    />

                    <StatisticsCard
                        icon={<AlertTriangleIcon />}
                        title="Low Stock"
                        value={stats?.lowStock ? `${stats.lowStock.toLocaleString()} Items` : '0'}
                        className="bg-red-50"
                        color="red"
                    />
                </section>

                <section>
                    
                </section>
            </main>
        </div>

    )
}

export default Dashboard