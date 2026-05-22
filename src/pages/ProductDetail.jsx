import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(response.message);
          return;
        }
        setProduct(response.data);
        setSelectedImage(response.data.thumbnail);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Fungsi untuk format harga ke Rupiah
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price * 1000);
  };

  // Fungsi untuk rating stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400 text-lg">★</span>
        ))}
        {halfStar && <span className="text-yellow-400 text-lg">½</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-lg">★</span>
        ))}
        <span className="ml-2 text-sm text-gray-500">({rating})</span>
      </div>
    );
  };

  // Fungsi untuk badge stok
  const getStockBadge = (stock) => {
    if (stock === 0) {
      return { text: "Stok Habis", color: "red", bg: "bg-red-100 text-red-800" };
    }
    if (stock < 10) {
      return { text: "Stok Terbatas", color: "yellow", bg: "bg-yellow-100 text-yellow-800" };
    }
    return { text: "Stok Tersedia", color: "green", bg: "bg-green-100 text-green-800" };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Memuat produk...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error!</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <Link
            to="/products"
            className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Kembali ke Products
          </Link>
        </div>
      </div>
    );
  }

  if (!product) return null;

  const stockBadge = getStockBadge(product.stock);
  const discount = product.discountPercentage || 0;
  const originalPrice = product.price * 1000;
  const discountedPrice = originalPrice * (1 - discount / 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link to="/" className="text-gray-500 hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link to="/products" className="text-gray-500 hover:text-emerald-600 transition-colors">
            Products
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-emerald-600 font-semibold">{product.title}</span>
        </div>

        {/* Product Detail Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Bagian Gambar - Kiri */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative group">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-2">🖼️</div>
                    <p>No Image Available</p>
                  </div>
                )}
                {/* Badge Diskon */}
                {discount > 0 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -{Math.round(discount)}%
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.thumbnail && (
                  <button
                    onClick={() => setSelectedImage(product.thumbnail)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      selectedImage === product.thumbnail
                        ? "border-emerald-500 shadow-md"
                        : "border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    <img
                      src={product.thumbnail}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                )}
                {product.images &&
                  product.images.slice(0, 3).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                        selectedImage === img
                          ? "border-emerald-500 shadow-md"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
              </div>
            </div>

            {/* Bagian Informasi - Kanan */}
            <div className="space-y-5">
              {/* Title & Rating */}
              <div>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {product.title}
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${stockBadge.bg}`}
                  >
                    {stockBadge.text}
                  </span>
                </div>
                <div className="mt-2">
                  {renderStars(product.rating)}
                </div>
              </div>

              {/* Brand & Category */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Brand:</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    {product.brand || "Generic"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Kategori:</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">SKU:</span>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono text-gray-600">
                    {product.sku || `SKU-${product.id}`}
                  </code>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-100 py-4">
                {discount > 0 ? (
                  <div>
                    <p className="text-gray-400 line-through text-sm">
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-4xl font-bold text-emerald-600">
                      {formatPrice(Math.round(product.price * (1 - discount / 100)))}
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      Hemat {formatPrice(Math.round(product.price * discount / 100))}
                    </p>
                  </div>
                ) : (
                  <p className="text-4xl font-bold text-emerald-600">
                    {formatPrice(product.price)}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span>📝</span> Deskripsi Produk
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || "Tidak ada deskripsi untuk produk ini."}
                </p>
              </div>

              {/* Stock & Quantity */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Stok Tersedia</span>
                  <span
                    className={`font-semibold text-lg ${
                      product.stock < 10 ? "text-orange-600" : "text-green-600"
                    }`}
                  >
                    {product.stock} unit
                  </span>
                </div>

                {product.stock > 0 && (
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-gray-600">Jumlah:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-600 font-bold transition-all shadow-sm"
                      >
                        -
                      </button>
                      <span className="w-16 text-center font-semibold text-lg">
                        {quantity}
                      </span>
                      <button
                        onClick={() =>
                          setQuantity(Math.min(product.stock, quantity + 1))
                        }
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-600 font-bold transition-all shadow-sm"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">
                      Maksimal {product.stock} unit
                    </span>
                  </div>
                )}

                {/* Subtotal */}
                {product.stock > 0 && (
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="text-xl font-bold text-emerald-600">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  disabled={product.stock === 0}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    product.stock > 0
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  🛒 Tambah ke Keranjang ({quantity})
                </button>
                <button className="px-6 py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold transition-all">
                  ❤️ Wishlist
                </button>
              </div>

              {/* Shipping Info */}
              <div className="bg-blue-50 rounded-xl p-4 space-y-2 text-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-xl">✅</span>
                  <span>Garansi resmi 1 tahun</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-xl">🚚</span>
                  <span>Gratis ongkir minimal belanja Rp 500.000</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-xl">🔄</span>
                  <span>Pengembalian barang 14 hari</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        {product.dimensions && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📋</span> Spesifikasi Produk
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.dimensions.width && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Lebar</p>
                  <p className="font-semibold">{product.dimensions.width} cm</p>
                </div>
              )}
              {product.dimensions.height && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Tinggi</p>
                  <p className="font-semibold">{product.dimensions.height} cm</p>
                </div>
              )}
              {product.dimensions.depth && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Kedalaman</p>
                  <p className="font-semibold">{product.dimensions.depth} cm</p>
                </div>
              )}
              {product.weight && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Berat</p>
                  <p className="font-semibold">{product.weight} kg</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Return Button */}
        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <span>←</span> Kembali ke Daftar Produk
          </Link>
        </div>
      </div>
    </div>
  );
}