# Taste of Nusantara

Website restoran masakan tradisional Indonesia. Dibuat untuk Proyek Ujian Tengah Semester mata kuliah Pemrograman Web, dengan client "Taste of Nusantara".

Website ini menampilkan pilihan makanan tradisional Indonesia, lengkap dengan fitur pemesanan sederhana, reservasi meja, dan galeri makanan.

## Teknologi

- HTML5 dengan elemen semantik (`header`, `nav`, `main`, `section`, `footer`)
- CSS dan Tailwind CSS v4
- JavaScript (ES Module)
- Vite sebagai development server dan build tool
- Data berupa data dummy/statis, tanpa backend dan database

## Fitur

Website terdiri dari satu halaman dengan 7 section utama.

| No | Section | Isi | Interaksi JavaScript |
|---|---|---|---|
| 1 | Header | Logo dan navigasi | Menu mobile, link aktif saat scroll |
| 2 | Beranda | Foto makanan, tagline, dan tombol ajakan | - |
| 3 | Menu | 30 menu dalam 3 kategori (Hidangan Utama, Minuman, Hidangan Penutup) dengan foto, harga, dan deskripsi | **Filter kategori**, tampil 4 menu acak dan tombol Lihat Semua Menu |
| 4 | Pesanan Anda | Daftar menu yang dipesan, jumlah, subtotal, total item, dan total harga | **Counter pesanan dan perhitungan total** |
| 5 | Reservasi Meja | Form nama, tanggal, jam, dan jumlah orang | **Validasi form** |
| 6 | Galeri | Foto makanan, 4 foto acak yang berganti otomatis, dan tombol Lihat Selengkapnya | **Modal gambar** |
| 7 | Footer | Alamat, jam buka, dan kontak | Tahun otomatis |

### Penerapan JavaScript

- **Variabel dan tipe data:** array of object untuk data menu (`menuData`), `Map` untuk keranjang, angka untuk harga.
- **Operator:** perhitungan subtotal dan total harga, perbandingan tanggal dan jam pada validasi.
- **Pengulangan:** `for` dan `for...of` untuk menampilkan menu, pesanan, dan galeri.
- **Fungsi:** fungsi terpisah untuk setiap tugas, misalnya `tampilkanMenu`, `tambahPesanan`, `validasiTanggal`, dan `bukaModal`.

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

## Struktur Folder

```
Taste-of-Nusantara/
├── images/            foto hero, menu, dan galeri
├── index.html         halaman utama (7 section)
├── style.css          tema Tailwind dan CSS tambahan
├── script.js          menu mobile, tahun footer, link aktif
├── menu.js            data menu, tampilan card, filter
├── pesanan.js         keranjang dan total harga
├── reservasi.js       validasi form reservasi
├── galeri.js          galeri dan modal gambar
├── vite.config.js     konfigurasi Vite
├── package.json       dependensi dan perintah npm
└── README.md
```

## Pembagian Tugas

| No | Nama | Bagian |
|---|---|---|
| 1 | Adinda Egia Rehulina Pelawi | Setup proyek, header dan navigasi, beranda, footer |
| 2 | Hafifuddin | Section Menu: data menu, card menu, filter kategori |
| 3 | Ezer Nicholas Purba | Section Pesanan Anda: keranjang, counter, total harga |
| 4 | Naufal Rasyiq Dziqri Simanjuntak | Section Reservasi Meja: form dan validasi |
| 5 | Ibnu Ad'ha | Section Galeri, modal gambar, dan dokumentasi |

## Checklist Task Brief Client

- [x] 1. Landing page dengan foto makanan dan tagline restoran
- [x] 2. Section Our Menu, minimal 15 menu
- [x] 3. Menu dikelompokkan: Main Course, Drink, dan Dessert
- [x] 4. Menampilkan nama, foto, harga, dan deskripsi makanan
- [x] 5. Filter kategori dengan JavaScript
- [x] 6. Tombol Pesan pada setiap makanan
- [x] 7. Nama menu yang dipilih tampil di bagian Pesanan Anda
- [x] 8. Penghitung jumlah pesanan
- [x] 9. Total sederhana berdasarkan jumlah item
- [x] 10. Form Reservasi Meja
- [x] 11. Input nama, tanggal, jam, dan jumlah orang
- [x] 12. Validasi field dengan JavaScript
- [x] 13. Gallery makanan
- [x] 14. Gambar tampil dalam modal saat diklik

JavaScript minimal dari brief: filter menu, counter pesanan, perhitungan total, dan modal. Semuanya sudah ada.

## Catatan

- Website tidak bisa dibuka dengan klik dua kali pada `index.html`, karena memakai ES Module dan Tailwind lewat Vite. Gunakan `npm run dev`.
- Jika `npm install` gagal, periksa versi Node.js dengan `node -v`.