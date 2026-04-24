import { useState } from "react";
import GuestView from "./GuestView";
import AdminView from "./AdminView";

export default function ServiceHub() {
  const [viewMode, setViewMode] = useState("guest");

  return (
    <div>
      {/* View Toggle Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white rounded-lg shadow-lg p-1">
        <button
          onClick={() => setViewMode("guest")}
          className={`px-4 py-2 rounded-md font-semibold transition-all ${
            viewMode === "guest"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          👤 Guest View
        </button>
        <button
          onClick={() => setViewMode("admin")}
          className={`px-4 py-2 rounded-md font-semibold transition-all ${
            viewMode === "admin"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`} 
        >
          👑 Admin View
        </button>
      </div>

      {viewMode === "guest" ? <GuestView /> : <AdminView />}
    </div>
  );
}