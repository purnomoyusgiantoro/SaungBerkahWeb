# Saung Berkah Monorepo

Repositori ini adalah monorepo untuk proyek **Saung Berkah Waras**, yang dikelola menggunakan NPM Workspaces.

## 🚀 Tech Stack

Proyek ini dibangun menggunakan teknologi modern berikut:

*   **Core Framework:** [React 18](https://reactjs.org/)
*   **Build Tool:** [Vite 6](https://vitejs.dev/)
*   **Monorepo Tooling:** NPM Workspaces
*   **Language:** JavaScript (JSX)
*   **Styling:** Vanilla CSS (Modern CSS practices)

## 📂 Struktur Folder (Tree Folder)

Berikut adalah gambaran struktur folder utama dalam proyek ini:

```text
SaungBerkahWeb/
├── apps/
│   └── web/                # Aplikasi utama React
│       ├── public/         # Aset statis (gambar, favicon, dll)
│       └── src/            # Kode sumber aplikasi
│           ├── assets/     # Aset internal (gambar, svg)
│           ├── components/ # Komponen UI yang dapat digunakan kembali
│           ├── data/       # Data statis atau konstanta
│           ├── hooks/      # Custom React hooks
│           ├── pages/      # Komponen halaman (View)
│           ├── styles/     # File styling CSS
│           ├── utils/      # Fungsi pembantu (helper functions)
│           ├── App.jsx     # Komponen root aplikasi
│           └── main.jsx    # Entry point aplikasi
├── packages/
│   └── config/             # Konfigurasi bersama (shared configuration)
├── package.json            # Konfigurasi root monorepo & script global
└── ...
```

## 🛠️ Cara Menjalankan (How to Run)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di mesin lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal:
*   **Node.js** (versi 18 atau lebih baru)
*   **npm** (biasanya terinstal bersama Node.js)

### 2. Instalasi Dependensi
Buka terminal di direktori root `SaungBerkahWeb` dan jalankan:
```bash
npm install
```

### 3. Menjalankan Mode Pengembangan
Untuk memulai server pengembangan (development server):
```bash
npm run dev
```
Setelah dijalankan, aplikasi akan tersedia di: [http://localhost:5173](http://localhost:5173)

### 4. Build untuk Produksi
Untuk membuat bundle produksi yang dioptimalkan:
```bash
npm run build
```
Hasil build akan tersedia di folder `apps/web/dist`.

---
*Dibuat untuk mempermudah pengembangan dan dokumentasi proyek Saung Berkah Waras.*
