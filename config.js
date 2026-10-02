// ============================================================
// KONFIGURASI PORTAL ACR NEXUS
// Edit file ini untuk mengubah pengaturan portal
// ============================================================

const CONFIG = {
    // ============================================
    // LINK CLOUDFLARE TUNNEL (tujuan redirect)
    // ============================================
    redirectUrl: "https://biography-shelf-canberra-ethics.trycloudflare.com/acr-nexus",
    
    // ============================================
    // DURASI LOADING (dalam milidetik)
    // 1000 = 1 detik, 5000 = 5 detik
    // ============================================
    loadingDuration: 5000,
    
    // ============================================
    // MAINTENANCE MODE
    // true  = Portal menampilkan halaman maintenance
    // false = Portal loading normal lalu redirect
    // ============================================
    maintenanceMode: false,
    
    // ============================================
    // TEKS MAINTENANCE (muncul saat mode maintenance ON)
    // ============================================
    maintenanceTitle: "🔧 Sedang Maintenance",
    maintenanceMessage: "Kami sedang melakukan perbaikan sistem.<br>Silakan kembali lagi nanti ya! 🙏",
    maintenanceEta: "Estimasi selesai: 60 menit",
    
    // ============================================
    // TEKS LOADING
    // ============================================
    loadingTitle: "ACR NEXUS",
    loadingSubtitle: "Digital Store • Instant Delivery",
    loadingText: "Menyiapkan halaman...",
    
    // ============================================
    // INFO KONTAK (muncul di footer portal)
    // ============================================
    whatsapp: "6285781209423",
    tiktok: "https://www.tiktok.com/@acrnexusstor.id",
    instagram: "https://www.instagram.com/acrnexusstor.id/"
};
