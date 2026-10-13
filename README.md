# Taste of Nusantara

Website restoran masakan tradisional Indonesia (UTS Pemrograman Web - Client 6).
Teknologi: HTML, CSS, Tailwind CSS v4, JavaScript, Vite.

## Cara menjalankan

```
npm install
npm run dev
```

Lalu buka alamat yang muncul di terminal (biasanya http://localhost:5173).

## Struktur folder

```
taste-of-nusantara/
├── index.html      -> struktur halaman (header, hero, section, footer)
├── style.css       -> Tailwind + tema warna/font + CSS tambahan
├── script.js       -> JavaScript
├── vite.config.js  -> konfigurasi Vite + Tailwind
├── package.json
└── images/         -> foto makanan (hero.jpg, menu, gallery)
```

## Identitas

| Nama kelas Tailwind | Warna | Kode |
|---|---|---|
| `nusa-merah` | merah bata | #8b2e1f |
| `nusa-emas` | kuning kunyit | #d99a1e |
| `nusa-hijau` | hijau daun pisang | #3f6b3a |
| `nusa-krem` | krem (latar) | #fff6e5 |
| `nusa-cokelat` | cokelat rempah | #3b2415 |

Contoh pemakaian: `bg-nusa-merah`, `text-nusa-emas`, `border-nusa-hijau`.
Font judul: `font-judul` (Playfair Display). Font isi sudah otomatis (Poppins).

## Aturan kerja kelompok

- Isi hanya section milik masing-masing di `index.html`, jangan ubah `id` section.
- CSS tambahan ditulis di bagian paling bawah `style.css`, JavaScript di bagian paling bawah `script.js`, beri komentar nama bagiannya.
- Pakai warna `nusa-...` supaya tampilan konsisten.
- Foto taruh di folder `images/`, nama file huruf kecil tanpa spasi.
- Setiap anggota kerja di branch sendiri, lalu pull request ke `main`.

## Checklist merge akhir

- [ ] Semua section terisi dan id sama dengan link navbar
- [ ] Tidak ada id yang kembar di `index.html`
- [ ] Tidak ada error merah di Console browser (F12)
- [ ] Filter menu, pesanan, validasi form, dan modal jalan semua
- [ ] Tampilan rapi di lebar HP (±375px), tablet, dan desktop
- [ ] Warna dan font seragam di semua section
- [ ] Semua gambar muncul (path `images/...` benar)
- [ ] Minimal 7 section + 3 interaksi JavaScript terpenuhi
