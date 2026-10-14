# Taste of Nusantara

Website restoran masakan tradisional Indonesia. Dibuat untuk Proyek Ujian Tengah Semester mata kuliah Pemrograman Web, dengan client "Taste of Nusantara".

Website ini menampilkan pilihan makanan tradisional Indonesia, lengkap dengan fitur pemesanan sederhana, reservasi meja, dan galeri makanan.

## Teknologi

- HTML5 dengan elemen semantik (`header`, `nav`, `main`, `section`, `footer`)
- CSS dan Tailwind CSS v4
- JavaScript (ES Module)
- Vite sebagai development server dan build tool
- Data berupa data dummy/statis, tanpa backend dan database

## Cara Menjalankan

Prasyarat: [Node.js](https://nodejs.org) versi 20.19 atau lebih baru.

1. Unduh atau clone repository ini:

   ```bash
   git clone https://github.com/happyfoodin/Taste-of-Nusantara.git
   cd Taste-of-Nusantara
   ```

2. Pasang dependensi:

   ```bash
   npm install
   ```

3. Jalankan development server:

   ```bash
   npm run dev
   ```

4. Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### Perintah lain

| Perintah | Fungsi |
|---|---|
| `npm run build` | Membuat versi siap pakai di folder `dist` |
| `npm run preview` | Melihat hasil build di browser |

## Catatan

- Website tidak bisa dibuka dengan klik dua kali pada `index.html`, karena memakai ES Module dan Tailwind lewat Vite. Gunakan `npm run dev`.
- Jika `npm install` gagal, periksa versi Node.js dengan `node -v`.