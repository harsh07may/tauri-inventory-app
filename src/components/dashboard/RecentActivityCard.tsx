import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"
import { Badge } from "../ui/badge"
import { useEffect, useState } from "react"
import { getTransactions } from "@/lib/db"
import { Transaction } from "@/lib/models"

type ActivityStatus = "restocked" | "used"

type Activity = {
    id: number
    name: string
    change: string
    date: string
    status: ActivityStatus
    icon: string
}

const activities: Activity[] = [
    {
        id: 1,
        name: "Oat Milk (Barista Ed.)",
        change: "+24 units",
        date: "Oct 24, 10:15 AM",
        status: "restocked",
        icon: "💧",
    },
    {
        id: 2,
        name: "Arabica Coffee Beans",
        change: "-5.0 kg",
        date: "Oct 24, 09:45 AM",
        status: "used",
        icon: "☕",
    },
    {
        id: 3,
        name: "Caramel Syrup",
        change: "+12 units",
        date: "Oct 23, 04:30 PM",
        status: "restocked",
        icon: "🍯",
    },
    {
        id: 4,
        name: "Paper Cups (12oz)",
        change: "-100 units",
        date: "Oct 23, 01:20 PM",
        status: "used",
        icon: "🥤",
    },
]

function getStatusStyles(status: "IN" | "OUT") {
    switch (status) {
        case "IN":
            return "text-green-600"
        case "OUT":
            return " text-red-600"
    }
}


export default function RecentActivityCard() {
    const [activity, setActivity] = useState<Transaction[] | null>(null)

    // TODO: Refactor with react-query
    useEffect(() => {
        const load = async () => {
            try {
                const [transactions] = await Promise.all([
                    getTransactions(),

                ])
                setActivity(transactions)
            } catch (error) {
                console.error('BACKEND ERROR:', error)
            }
        }
        load()
    }, [])

    return (
        <Card className="col-span-3 row-span-3 bg-white">
            <CardHeader className="flex flex-row items-start justify-between">
                <div>
                    <CardTitle className="text-lg font-semibold">
                        Recent Activity
                    </CardTitle>
                    <CardDescription>
                        Audit trail for the last 24 hours
                    </CardDescription>
                </div>
                <CardAction className="text-sm text-orange-500 hover:underline cursor-pointer">
                    <Link to="/stock-audit">
                        View All
                    </Link>
                </CardAction>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-xs font-semibold text-muted-foreground">
                                ITEM NAME
                            </TableHead>
                            <TableHead className="text-xs font-semibold text-muted-foreground">
                                CHANGE
                            </TableHead>
                            <TableHead className="text-xs font-semibold text-muted-foreground">
                                DATE
                            </TableHead>
                            <TableHead className="text-xs font-semibold text-muted-foreground">
                                STATUS
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {activity && activity.map((item) => (
                            <TableRow key={item.id} className="border-b last:border-0">
                                <TableCell className="flex items-center gap-3 font-medium">
                                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                        {/* // TODO: item.icon based on the categories or products */}
                                        ☕
                                    </div>
                                    {item.product_name}
                                </TableCell>

                                <TableCell
                                    className={`font-medium ${getStatusStyles(item.transaction_type)}`}
                                >
                                    {item.transaction_type == "IN" ? `+ ${item.quantity}` : `- ${item.quantity}`}
                                </TableCell>

                                <TableCell className="text-muted-foreground text-sm">
                                    {item.transaction_date}
                                </TableCell>

                                <TableCell>
                                    <Badge variant={item.transaction_type == "IN" ? "success" : "destructive"}>
                                        {item.transaction_type == "IN" ? "RESTOCKED" : "USED"}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                            //TODO: Add a remark column.
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
