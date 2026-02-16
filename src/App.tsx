import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { getUsers } from "./lib/db";


function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")
  useEffect(() => {
    const load = async () => {
      try {
        const users = await getUsers();
        console.log(users);
      } catch (error) {
        console.error('Failed to load users:', error);
      }
    };
    load();
  }, []);

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
