import React, { useState } from "react";
import { Link } from "react-router-dom";

// Data produk
const products = [
  {
    id: 1,
    title: "Wireless Mouse M330",
    code: "ELC-MS-001",
    category: "Electronics",
    brand: "Logitech",
    price: 250000,
    stock: 45,
  },
  {
    id: 2,
    title: "Mechanical Keyboard K840",
    code: "ELC-KB-002",
    category: "Electronics",
    brand: "Keychron",
    price: 1200000,
    stock: 15,
  },
  {
    id: 3,
    title: "Running Shoes UltraBoost",
    code: "APP-SH-003",
    category: "Apparel",
    brand: "Adidas",
    price: 2400000,
    stock: 20,
  },
  {
    id: 4,
    title: "Casual Hoodie Black",
    code: "APP-HD-004",
    category: "Apparel",
    brand: "Uniqlo",
    price: 399000,
    stock: 60,
  },
  {
    id: 5,
    title: "Smart TV 43 Inch Ultra HD",
    code: "TV-LG-005",
    category: "Home Appliances",
    brand: "LG",
    price: 4500000,
    stock: 8,
  },
  {
    id: 6,
    title: "Air Fryer 4L",
    code: "KIT-AF-006",
    category: "Kitchen",
    brand: "Philips",
    price: 1100000,
    stock: 12,
  },
  {
    id: 7,
    title: "Stainless Steel Tumbler 500ml",
    code: "KIT-TB-007",
    category: "Kitchen",
    brand: "Hydro Flask",
    price: 450000,
    stock: 35,
  },
  {
    id: 8,
    title: "Leather Wallet Classic",
    code: "ACC-WL-008",
    category: "Accessories",
    brand: "Fossil",
    price: 850000,
    stock: 25,
  },
  {
    id: 9,
    title: "Gaming Chair Pro",
    code: "FUR-CR-009",
    category: "Furniture",
    brand: "Furnilux",
    price: 1750000,
    stock: 10,
  },
  {
    id: 10,
    title: "Wireless Headphones XM5",
    code: "ELC-HP-010",
    category: "Electronics",
    brand: "Sony",
    price: 3800000,
    stock: 14,
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  let filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return "↕️";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const getStockBadge = (stock) => {
    if (stock === 0) return { color: "red", text: "Habis" };
    if (stock < 10) return { color: "yellow", text: "Stok Terbatas" };
    if (stock < 30) return { color: "blue", text: "Stok Sedang" };
    return { color: "green", text: "Stok Tersedia" };
  };

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const lowStockCount = products.filter((p) => p.stock < 10).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header dengan Statistik */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                📦 Product Management
              </h1>
              <p className="text-gray-500 mt-1">Kelola dan monitor semua produk</p>
            </div>
            <Link
              to="/products/add"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>+</span> Tambah Produk
            </Link>
          </div>

          {/* Statistik Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Produk</p>
                  <p className="text-2xl font-bold text-gray-800">{totalProducts}</p>
                </div>
                <div className="text-3xl">📦</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Stok</p>
                  <p className="text-2xl font-bold text-gray-800">{totalStock}</p>
                </div>
                <div className="text-3xl">📊</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Nilai</p>
                  <p className="text-xl font-bold text-gray-800">
                    Rp {totalValue.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Stok Menipis</p>
                  <p className="text-2xl font-bold text-orange-600">{lowStockCount}</p>
                </div>
                <div className="text-3xl">⚠️</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md mb-6 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔍 Cari Produk
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Cari berdasarkan nama, kode, atau brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📁 Filter Kategori
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "Semua Kategori" : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <tr>
                  <th
                    onClick={() => requestSort("id")}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      ID {getSortIcon("id")}
                    </div>
                  </th>
                  <th
                    onClick={() => requestSort("title")}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      Produk {getSortIcon("title")}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Kode
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Brand
                  </th>
                  <th
                    onClick={() => requestSort("price")}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      Harga {getSortIcon("price")}
                    </div>
                  </th>
                  <th
                    onClick={() => requestSort("stock")}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      Stok {getSortIcon("stock")}
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {sortedProducts.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center">
                      <div className="text-gray-400 text-lg">
                        😅 Tidak ada produk yang ditemukan
                      </div>
                    </td>
                  </tr>
                ) : (
                  sortedProducts.map((item, index) => {
                    const stockBadge = getStockBadge(item.stock);
                    const bgColor =
                      index % 2 === 0 ? "bg-white" : "bg-gray-50";

                    return (
                      <tr
                        key={item.id}
                        className={`${bgColor} hover:bg-emerald-50 transition-colors duration-200 group`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{item.id}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            to={`/products/${item.id}`}
                            className="text-emerald-600 hover:text-emerald-800 font-semibold hover:underline decoration-2 underline-offset-2 transition-all"
                          >
                            {item.title}
                          </Link>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono text-gray-600">
                            {item.code}
                          </code>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            {item.category}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item.brand}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-bold text-emerald-600">
                            Rp {item.price.toLocaleString("id-ID")}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-${stockBadge.color}-100 text-${stockBadge.color}-800`}
                          >
                            {item.stock} unit
                          </span>
                          {item.stock < 10 && item.stock > 0 && (
                            <span className="ml-2 text-xs text-orange-500">
                              ⚠️
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Tabel */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Menampilkan {sortedProducts.length} dari {products.length} produk
              </p>
              <div className="text-sm text-gray-500">
                Klik header tabel untuk mengurutkan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}