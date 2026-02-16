import Header from "@/components/shared/Header"
import Sidebar from "@/components/shared/Sidebar"
import Test from "@/components/shared/Test"

function Dashboard() {
    return (
        <div>
            <div className="flex h-screen overflow-hidden">

                <Sidebar />
                <main className="flex-1 overflow-y-auto bg-background dark:bg-background-dark">
                    <Header />
                </main>

            </div>
        </div>
    )
}

export default Dashboard