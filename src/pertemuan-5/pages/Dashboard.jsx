import { useState } from "react";

export default function Dashboard() {
    const [selected, setSelected] = useState(null);
    const [search, setSearch] = useState("");

    const activities = [
        "🛒 New Order #123",
        "👤 New User Registered",
        "💰 Payment Completed",
        "📦 Order Shipped",
        "❌ Order Cancelled"
    ];

    const filteredActivities = activities.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    const cards = [
        { title: "Total Orders", value: 75, color: "green", icon: "🛒", growth: "+12%" },
        { title: "Total Delivered", value: 175, color: "blue", icon: "🚚", growth: "+8%" },
        { title: "Total Canceled", value: 40, color: "red", icon: "⛔", growth: "-3%" },
        { title: "Total Revenue", value: "Rp.128", color: "yellow", icon: "💰", growth: "+20%" },
        { title: "Total Users", value: 120, color: "purple", icon: "👥", growth: "+5%" },
    ];

    const progress = 75; // 🔥 bisa nanti dari API

    return (
        <div className="p-6">

            {/* 🔥 WELCOME CARD */}
            <div className="bg-white p-4 rounded-xl shadow mb-6 flex items-center gap-4 hover:shadow-lg transition">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" 
                    className="w-12 h-12 rounded-full" 
                />
                <div>
                    <h2 className="font-semibold text-lg">
                        Welcome back, Rifqi 👋
                    </h2>
                    <p className="text-sm text-gray-400">
                        Have a nice day managing your dashboard
                    </p>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
            <p className="text-gray-400 mb-6">
                Dashboard / Order List
            </p>

            {/* 🔥 CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        onClick={() => setSelected(card.title)}
                        className="bg-white p-4 rounded-xl shadow flex items-center gap-4 cursor-pointer hover:scale-105 hover:shadow-lg transition"
                    >
                        <div className={`bg-${card.color}-500 text-white p-3 rounded-full`}>
                            {card.icon}
                        </div>

                        <div>
                            <h2 className="text-xl font-bold">{card.value}</h2>
                            <p className="text-gray-400 text-sm">{card.title}</p>

                            {/* 🔥 Growth */}
                            <span className={`text-xs font-semibold ${
                                card.growth.includes("+") ? "text-green-500" : "text-red-500"
                            }`}>
                                {card.growth}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔥 PROGRESS */}
            <div className="bg-white p-4 rounded-xl shadow mt-6">
                <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-400">Order Progress</p>
                    <p className="text-sm font-semibold">{progress}%</p>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* 🔥 RECENT ACTIVITY + SEARCH */}
            <div className="bg-white p-4 rounded-xl shadow mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold">Recent Activity</h3>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border px-2 py-1 rounded text-sm"
                    />
                </div>

                <ul className="text-sm text-gray-500 space-y-1">
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map((item, i) => (
                            <li key={i} className="hover:text-black cursor-pointer">
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-300">No activity found</li>
                    )}
                </ul>
            </div>

            {/* 🔥 MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl w-96 text-center shadow-lg animate-scaleIn">
                        <h2 className="text-xl font-bold mb-2">{selected}</h2>

                        <p className="text-gray-500 mb-4">
                            Detail informasi untuk <b>{selected}</b>.
                        </p>

                        <button
                            onClick={() => setSelected(null)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}