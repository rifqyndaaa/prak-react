import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header />
                <Dashboard />
            </div>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);