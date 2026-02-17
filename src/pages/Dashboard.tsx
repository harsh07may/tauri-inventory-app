import StatisticsCard from "@/components/dashboard/StatisticsCard"
import Header from "@/components/shared/Header"
import Sidebar from "@/components/shared/Sidebar"
import { AlertTriangleIcon, CalendarCheckIcon, CreditCardIcon, PackageIcon } from "lucide-react"
import { useEffect, useState } from "react";

import { getProducts, getUsers, getLowStock, getTotalValue } from "@/lib/db";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import { Badge } from "@/components/ui/badge";


type DashboardStats = {
    totalProducts: number
    totalValue: number
    lowStock: number
}

function Dashboard() {

    const [stats, setStats] = useState<DashboardStats | null>(null)

    // TODO: Refactor with react-query
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
        <>
            <section className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-4">
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
                <StatisticsCard
                    icon={<AlertTriangleIcon />}
                    title="Categories"
                    value={stats?.lowStock ? `${stats.lowStock.toLocaleString()} Items` : '0'}
                    className="bg-green-50"
                    color="green"
                />
            </section>

            <section className="grid grid-cols-4 gap-4 px-5 py-2">

                {/* Large Left Card */}
                <RecentActivityCard />

                {/* Inventory Health Card */}
                <Card className="relative col-span-1 border-0 shadow-xl rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 text-white">
                    <CardContent className="px-3 py-1  flex flex-col gap-5">
                        <div className="text-md font-semibold opacity-90">
                            Inventory Health
                        </div>

                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold leading-none">92%</span>
                            <span className="text-sm opacity-90 mb-1">optimal</span>
                        </div>

                        <Progress value={92} />

                        <p className="text-xs opacity-90 leading-relaxed">
                            Your stock levels are looking healthy! Only 5 items require immediate attention.
                        </p>
                    </CardContent>
                    <CalendarCheckIcon className="absolute -right-1 -bottom-1 size-28 text-white opacity-20" />
                </Card>

                {/* Third Card */}
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>❗Critical Stock</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <div className=" rounded-full bg-background shadow p-2">
                            <p className="text-xs font-medium">Product 1</p>
                            <p className="text-xs font-medium text-red-400"> 1 units left</p>
                        </div>
                        <div className="rounded-full bg-background shadow p-2">
                            <p className="text-xs font-medium">Product 2</p>
                            <p className="text-xs font-medium text-red-400">3 units left</p>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    )
}

export default Dashboard