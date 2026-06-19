import axios from 'axios'

const API_URL = "https://vhndtzamvlaoxpowragk.supabase.co/rest/v1/note"
const API_KEY = "sb_publishable_iYmmSrzqj8Pzjqe1OKYrfQ__j1W-F8m"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    // FUNGSI BARU: Menghapus data berdasarkan ID di Supabase
    async deleteNote(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return response.data
    }
}