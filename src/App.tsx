import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import { Outlet } from "react-router";
import Header from "./components/shared/Header";

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }))
  }

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
