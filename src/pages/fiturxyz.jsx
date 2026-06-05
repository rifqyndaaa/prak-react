import React from "react";
import {
  MdTrendingUp,
  MdPeople,
  MdShoppingCart,
  MdAttachMoney,
} from "react-icons/md";

export default function FiturXYZ() {
  const stats = [
    {
      title: "Total Orders",
      value: "1,245",
      icon: MdShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "Customers",
      value: "8,532",
      icon: MdPeople,
      color: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: "$24,890",
      icon: MdAttachMoney,
      color: "bg-purple-500",
    },
    {
      title: "Growth",
      value: "+18%",
      icon: MdTrendingUp,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-gray-800">
          Fitur XYZ 🚀
        </h1>
        <p className="text-gray-500 mt-2">
          Monitoring data dan analytics secara real-time.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    {item.title}
                  </p>
                  <h2 className="text-3xl font-black text-gray-800 mt-2">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Card */}
        <div className="xl:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Performance Overview
          </h2>

          <div className="h-72 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center">
            <span className="text-gray-400">
              Grafik / Chart Disini
            </span>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {[
              "New Order Received",
              "Customer Registered",
              "Payment Completed",
              "Product Updated",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
              >
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}