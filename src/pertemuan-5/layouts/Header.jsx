import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow">
            
            {/* Search */}
            <div className="relative w-full max-w-lg">
                <input
                    type="text"
                    placeholder="Search Here..."
                    className="border border-gray-100 p-2 pr-10 bg-white w-full rounded-md outline-none"
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 ml-4">
                
                {/* Notification */}
                <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500">
                    <FaBell />
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">
                        50
                    </span>
                </div>

                {/* Chart */}
                <div className="p-3 bg-blue-100 rounded-2xl">
                    <FcAreaChart />
                </div>

                {/* Settings */}
                <div className="p-3 bg-red-100 rounded-2xl text-red-500">
                    <SlSettings />
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span>
                        Hello, <b>rifqi yanda</b>
                    </span>
                    
                    {/* AVATAR FIX */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                        className="w-10 h-10 rounded-full border-2 border-white shadow"
                        alt="avatar"
                    />
                </div>

            </div>
        </div>
    );
}