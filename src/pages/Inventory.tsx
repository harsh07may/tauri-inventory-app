import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getProducts, searchProducts, } from "@/lib/db"
import { Product } from "@/lib/models"
import { useEffect, useState } from "react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { FilterIcon, PlusCircleIcon, SearchIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { STOCK_THRESHOLD } from "@/constants"

function Inventory() {
    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            const load = async () => {
                try {
                    const result =
                        search.trim() !== ""
                            ? await searchProducts(search)
                            : await getProducts()

                    setProducts(result)
                } catch (error) {
                    console.error("BACKEND ERROR:", error)
                }
            }

            load()
        }, 300)

        return () => clearTimeout(timeout)
    }, [search])
    return (
        <div className="space-y-5 h-full bg-card p-5">
            <InputGroup className="shadow rounded-3xl bg-background py-5">
                <InputGroupInput
                    id="inline-start-input"
                    placeholder="Search inventory items..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <InputGroupAddon align="inline-start">
                    <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                    <InputGroupButton>
                        <FilterIcon />
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            <section className="p-2 rounded-md shadow bg-background relative">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-muted-foreground">ITEM NAME</TableHead>
                            <TableHead className="text-muted-foreground">CATEGORY</TableHead>
                            <TableHead className="text-muted-foreground">SUPPLIER</TableHead>
                            <TableHead className="text-muted-foreground">QUANTITY</TableHead>
                            <TableHead className="text-muted-foreground">STATUS</TableHead>
                            <TableHead className="text-muted-foreground text-right">PRICE</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell>
                                    <Badge variant={"success"}>
                                        category
                                    </Badge>
                                </TableCell>
                                <TableCell>{item.supplier}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>
                                    {
                                        item.quantity <= STOCK_THRESHOLD ?
                                            <Badge variant="destructive">• LOW STOCK</Badge> :
                                            <Badge variant="success">• IN STOCK</Badge>
                                    }
                                </TableCell>
                                <TableCell className="text-right">${item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </div>
    )
}

export default Inventory