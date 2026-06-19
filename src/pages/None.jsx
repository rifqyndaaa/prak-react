import React, { useState, useEffect } from "react";
import { AiFillDelete, AiOutlinePlus, AiOutlineFileText } from "react-icons/ai";

// Import sesuai struktur folder kamu
import { notesAPI } from "../service/notesAPI"; 
import GenericTable from "../components/GenericTable"; 
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

export default function None() {
  // --- STATE ---
  const [notes, setNotes] = useState([]);
  const [isLoadingNotes, setIsLoadingNotes] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
  });

  // --- EFFECT: Load data pertama kali ---
  useEffect(() => {
    loadNotes();
  }, []);

  // --- FUNGSI: Ambil data ---
  const loadNotes = async () => {
    try {
      setIsLoadingNotes(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan dari server.");
      console.error(err);
    } finally {
      setIsLoadingNotes(false);
    }
  };

  // --- FUNGSI: Handle input form ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --- FUNGSI: Handle tambah data ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");

    try {
      await notesAPI.createNote(dataForm); 
      setSuccess("Catatan baru berhasil disimpan!");
      setDataForm({ title: "", content: "" });
      await loadNotes(); 
    } catch (err) {
      console.error(err);
      setError("Gagal menambahkan catatan baru.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- FUNGSI: Handle aksi hapus data ---
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setIsDeleting(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);
      setSuccess("Catatan telah berhasil dihapus.");
      await loadNotes();
    } catch (err) {
      setError(`Gagal menghapus catatan: ${err.message}`);
      console.error(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section dengan Efek Gradient Glass */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-900/10 text-white">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <AiOutlineFileText className="text-2xl opacity-90" />
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Notes Space
                </h2>
              </div>
              <p className="text-emerald-100 text-sm sm:text-base max-w-md">
                Tulis ide, atur tugas, dan kelola semua catatan digital Anda dengan efisien.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center self-start sm:self-auto">
              <span className="block text-xs uppercase tracking-wider text-emerald-200 font-medium">Total Catatan</span>
              <span className="text-2xl font-bold font-mono">{notes.length}</span>
            </div>
          </div>
          {/* Dekorasi Ornamen Background */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Notifikasi Alerts */}
        <div className="space-y-3">
          {success && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center gap-3 animate-fade-in shadow-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="text-sm font-medium">{success}</p>
            </div>
          )}
          {error && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-rose-800 flex items-center gap-3 animate-fade-in shadow-sm">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
        </div>

        {/* Grid Pembagi Form dan Tabel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Sisi Kiri: Form Input (Sticky) */}
          <div className="lg:col-span-1 lg:sticky lg:top-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
            <h3 className="text-md font-bold text-gray-900 mb-4 flex items-center gap-2 pb-3 border-b border-gray-50">
              Buat Catatan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Judul</label>
                <input
                  type="text"
                  name="title"
                  value={dataForm.title}
                  placeholder="Ketik judul di sini..."
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Isi Catatan</label>
                <textarea
                  name="content"
                  value={dataForm.content}
                  placeholder="Tulis detail catatan Anda..."
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium text-gray-800 placeholder-gray-400 resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 active:shadow-none transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none"
              >
                <AiOutlinePlus className="text-base" />
                {isSubmitting ? "Menyimpan..." : "Simpan Catatan"}
              </button>
            </form>
          </div>

          {/* Sisi Kanan: Daftar Tabel Catatan */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4.5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
              <h3 className="text-md font-bold text-gray-900">
                Arsip Catatan
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-gray-200/60 text-gray-600 rounded-full">
                Database Live
              </span>
            </div>

            {/* State Loading */}
            {isLoadingNotes && (
              <div className="py-20 flex justify-center">
                <LoadingSpinner text="Sinkronisasi data..." />
              </div>
            )}

            {/* State Kosong */}
            {!isLoadingNotes && notes.length === 0 && !error && (
              <div className="py-16">
                <EmptyState text="Belum ada arsip catatan. Mulai tulis data pertamamu di form sebelah kiri." />
              </div>
            )}

            {/* State Error Api */}
            {!isLoadingNotes && notes.length === 0 && error && (
              <div className="py-16">
                <EmptyState text="Koneksi terputus. Mohon periksa kembali jaringan backend Anda." />
              </div>
            )}

            {/* Render Tabel Data */}
            {!isLoadingNotes && notes.length > 0 && (
              <div className="overflow-x-auto">
                <GenericTable
                  columns={["No", "Judul Catatan", "Isi Deskripsi", "Aksi"]}
                  data={notes}
                  renderRow={(note, index) => (
                    <tr key={note.id || index} className="group border-b border-gray-100/80 hover:bg-gray-50/70 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-gray-400">
                        {String(index + 1).padStart(2, '0')}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors text-sm">
                          {note.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <div className="text-sm text-gray-500 truncate leading-relaxed">
                          {note.content}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(note.id)}
                          disabled={isDeleting}
                          className="p-2 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-all duration-150 disabled:opacity-40"
                          title="Hapus Catatan"
                        >
                          <AiFillDelete className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  )}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}