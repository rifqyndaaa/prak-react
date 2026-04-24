import { useState } from "react";
import servicesData from "./services.json";

export default function GuestView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const categories = [...new Set(servicesData.map(service => service.category))];
  const ratings = ["4.5", "4.6", "4.7", "4.8", "4.9"];

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? service.category === selectedCategory : true;
    const matchesRating = selectedRating ? service.rating >= parseFloat(selectedRating) : true;
    
    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            🚀 IT Services Hub
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Discover premium IT solutions for your business needs
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🔍 Search Services
              </label>
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📁 Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ⭐ Minimum Rating
              </label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Ratings</option>
                {ratings.map(rating => (
                  <option key={rating} value={rating}>{rating} ★ & above</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          Found <span className="font-bold text-blue-600">{filteredServices.length}</span> services
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-sm font-bold">
                  {service.rating} ★
                </div>
                {service.isActive && (
                  <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    Active
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-semibold">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold w-20">Provider:</span>
                    <span>{service.details.provider}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold w-20">Duration:</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold w-20">Price:</span>
                    <span className="text-green-600 font-bold">${service.price}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-500">No services found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}