import React, { useState } from "react";
// Import komponen Button kustom Anda
import { Button } from "@/components/ui/button"; 
// Import icon pendukung untuk mempercantik UI
import { 
  Plus, 
  Trash2, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Filter, 
  Eye, 
  RefreshCw,
  SlidersHorizontal
} from "lucide-react";

function FiturXYZ() {
  // State simulasi untuk interaksi tombol (loading/disabled)
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1200); // simulasi loading 1.2 detik
  };

  // Data palsu untuk mengisi tabel agar halaman terlihat hidup
  const dummyData = [
    { id: "XYZ-001", nama: "Modul Enkripsi Alpha", status: "Aktif", tanggal: "2026-06-01" },
    { id: "XYZ-002", nama: "Integrasi API Gateway", status: "Pending", tanggal: "2026-06-03" },
    { id: "XYZ-003", nama: "Sinkronisasi Database", status: "Nonaktif", tanggal: "2026-05-28" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 antialiased text-foreground">
      
      {/* 1. HEADER HALAMAN & UTILITY BUTTONS */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-border">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Manajemen Fitur XYZ</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Pantau, konfigurasi, dan kelola seluruh metrik performa modul XYZ secara real-time.
          </p>
        </div>
        
        {/* Grup Tombol Aksi Utama */}
        <div className="flex items-center gap-2.5 self-start sm:self-center">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={isRefreshing ? "animate-spin" : ""} />
            {isRefreshing ? "Memuat..." : "Refresh"}
          </Button>
          
          <Button variant="outline" size="sm">
            <Download />
            Export Data
          </Button>
          
          <Button variant="default" size="sm" className="shadow-sm">
            <Plus />
            Tambah Modul Baru
          </Button>
        </div>
      </div>

      {/* 2. RINGKASAN KARTU STATISTIK (DASHBOARD FEEL) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total Fitur Terdaftar</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-bold tracking-tight">124</span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">+12% bln ini</span>
          </div>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Modul XYZ Aktif</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-bold tracking-tight">98</span>
            <Button variant="link" size="xs" className="h-auto p-0 text-primary">Lihat semua</Button>
          </div>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Rata-rata Latensi</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-bold tracking-tight">42<span className="text-sm font-normal text-muted-foreground">ms</span></span>
            <span className="text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full">Stabil</span>
          </div>
        </div>
      </div>

      {/* 3. BAGIAN UTAMA: KONTEN TABEL DATA */}
      <div className="rounded-xl border border-border bg-background shadow-xs overflow-hidden">
        
        {/* Filter Bar */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/20 gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="xs">
              <Filter />
              Filter Status
            </Button>
            <Button variant="ghost" size="xs">
              <SlidersHorizontal />
              Kustomisasi Kolom
            </Button>
          </div>
          <span className="text-xs text-muted-foreground">Menampilkan 3 dari 124 data</span>
        </div>

        {/* Real Table Element */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-muted-foreground font-medium text-xs uppercase tracking-wider">
                <th className="p-4 w-[100px]">ID</th>
                <th className="p-4">Nama Modul</th>
                <th className="p-4">Tanggal Rilis</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {dummyData.map((item) => (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono font-medium text-xs text-muted-foreground">{item.id}</td>
                  <td className="p-4 font-medium">{item.nama}</td>
                  <td className="p-4 text-muted-foreground">{item.tanggal}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium border ${
                      item.status === "Aktif" ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900" :
                      item.status === "Pending" ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900" :
                      "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
                    }`}>
                      <span className={`size-1.5 rounded-full ${
                        item.status === "Aktif" ? "bg-emerald-500" : item.status === "Pending" ? "bg-amber-500" : "bg-zinc-400"
                      }`} />
                      {item.status}
                    </span>
                  </td>
                  {/* Kolom Aksi yang Menggunakan Berbagai Varian Tombol Kustom Anda */}
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Button variant="ghost" size="icon-sm" title="Lihat Detail">
                        <Eye />
                      </Button>
                      <Button variant="secondary" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="icon-sm" title="Hapus Modul">
                        <Trash2 />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. PAGINATION NAVIGASI (FOOTER TABEL) */}
        <div className="flex items-center justify-between p-4 border-t border-border bg-muted/10">
          <Button variant="outline" size="sm" disabled>
            <ArrowLeft />
            Sebelumnya
          </Button>
          
          {/* Indikator Halaman Aktif */}
          <div className="hidden sm:flex items-center gap-1">
            <Button variant="outline" size="icon-sm" className="border-primary text-primary bg-primary/5">1</Button>
            <Button variant="ghost" size="icon-sm">2</Button>
            <Button variant="ghost" size="icon-sm">3</Button>
            <span className="px-1 text-muted-foreground text-xs">...</span>
            <Button variant="ghost" size="icon-sm">42</Button>
          </div>
          
          <Button variant="outline" size="sm">
            Selanjutnya
            <ArrowRight />
          </Button>
        </div>

      </div>

    </div>
  );
}

export default FiturXYZ;