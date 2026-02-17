import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }))
  }

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App;
