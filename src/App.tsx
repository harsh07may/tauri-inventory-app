import "./App.css";
import Sidebar from "./components/shared/Sidebar";
import { Outlet } from "react-router";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background dark:bg-background-dark">
        <Header />
        <Outlet />
      </main>
    </div>

  )
}

export default App;
