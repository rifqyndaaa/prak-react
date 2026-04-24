import { useState } from "react";
import { AiFillAppstore, AiFillCustomerService } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";

export default function Sidebar() {
    const [active, setActive] = useState("Dashboard");

    return (
        <div className="w-64 bg-white min-h-screen shadow-md flex flex-col justify-between">
            
            {/* Logo */}
            <div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold">
                        Sedap<span className="text-green-500">.</span>
                        
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Modern Admin Dashboard
                    </p>
                </div>

                {/* Menu */}
                <ul className="mt-6 space-y-2 px-4">
                    
                    <li 
                        onClick={() => setActive("Dashboard")}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer 
                        ${active === "Dashboard" ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`}
                    >
                        <AiFillAppstore />
                        Dashboard
                    </li>

                    <li 
                        onClick={() => setActive("Details")}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer 
                        ${active === "Details" ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`}
                    >
                        <TbListDetails />
                        Details
                    </li>

                    <li 
                        onClick={() => setActive("Services")}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer 
                        ${active === "Services" ? "bg-green-100 text-green-600 font-semibold" : "hover:bg-gray-100"}`}
                    >
                        <AiFillCustomerService />
                        Services
                    </li>
                </ul>
            </div>

            {/* Footer tetap */}
            <div className="p-4">
                <div className="bg-green-500 text-white p-4 rounded-lg flex items-center justify-between">
                    <div>
                        <p className="text-sm mb-2">
                            Please organize your menus through button below!
                        </p>

                        <div className="flex items-center gap-2 bg-white text-green-500 px-3 py-1 rounded cursor-pointer">
                            <FaPlus />
                            <span>Add Menus</span>
                        </div>
                    </div>

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                        className="w-14 h-14 rounded-full border-2 border-white shadow"
                        alt="avatar"
                    />
                </div>

                <p className="text-xs text-gray-400 mt-4">
                    Sedap Restaurant Admin Dashboard
                </p>

                <p className="text-xs text-gray-400">
                    © 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}