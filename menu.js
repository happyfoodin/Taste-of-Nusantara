export const menuData = [
  // Main Course
  { id: 1, nama: "Rendang Sapi", kategori: "Main Course", harga: 35000, foto: "images/rendang.jpg", deskripsi: "Daging sapi empuk dimasak lama dengan santan dan rempah khas Minang." },
  { id: 2, nama: "Nasi Goreng Kampung", kategori: "Main Course", harga: 25000, foto: "images/nasi-goreng-kampung.jpg", deskripsi: "Nasi goreng bumbu sederhana dengan telur dan ikan teri." },
  { id: 3, nama: "Soto Betawi", kategori: "Main Course", harga: 30000, foto: "images/soto-betawi.jpg", deskripsi: "Soto berkuah santan gurih dengan daging dan jeroan sapi." },
  { id: 4, nama: "Ayam Bakar Taliwang", kategori: "Main Course", harga: 32000, foto: "images/ayam-bakar-taliwang.jpg", deskripsi: "Ayam bakar pedas khas Lombok dengan bumbu cabai dan terasi." },
  { id: 5, nama: "Gado-Gado", kategori: "Main Course", harga: 22000, foto: "images/gado-gado.jpg", deskripsi: "Sayuran rebus dengan bumbu kacang dan kerupuk." },
  { id: 6, nama: "Pempek Palembang", kategori: "Main Course", harga: 28000, foto: "images/pempek-palembang.jpg", deskripsi: "Olahan ikan dan sagu disajikan dengan kuah cuko asam pedas." },
  { id: 7, nama: "Sate Padang", kategori: "Main Course", harga: 30000, foto: "images/sate-padang.jpg", deskripsi: "Sate daging dengan kuah kental berbumbu rempah khas Padang." },
  { id: 8, nama: "Nasi Liwet Solo", kategori: "Main Course", harga: 27000, foto: "images/nasi-liwet-solo.jpg", deskripsi: "Nasi gurih santan dengan suwiran ayam, telur, dan sambal." },

  // Drink
  { id: 9, nama: "Es Teh Manis", kategori: "Drink", harga: 6000, foto: "images/teh-manis.jpg", deskripsi: "Teh dingin dengan gula, minuman wajib pendamping makan." },
  { id: 10, nama: "Es Cendol", kategori: "Drink", harga: 12000, foto: "images/es-cendol.jpg", deskripsi: "Cendol hijau dengan santan dan gula merah cair." },
  { id: 11, nama: "Wedang Jahe", kategori: "Drink", harga: 10000, foto: "images/wedang-jahe.jpg", deskripsi: "Minuman jahe hangat dengan gula aren." },
  { id: 12, nama: "Kopi Tubruk", kategori: "Drink", harga: 12000, foto: "images/kopi-tubruk.jpg", deskripsi: "Kopi hitam seduh langsung, pekat dan harum." },
  { id: 13, nama: "Es Kelapa Muda", kategori: "Drink", harga: 15000, foto: "images/es-kelapa-muda.jpg", deskripsi: "Air dan daging kelapa muda dengan sirup dan es batu." },
  { id: 14, nama: "Bandrek", kategori: "Drink", harga: 10000, foto: "images/bandrek.jpg", deskripsi: "Minuman hangat khas Sunda dari jahe, gula aren, dan rempah." },

  // Dessert
  { id: 15, nama: "Klepon", kategori: "Dessert", harga: 10000, foto: "images/klepon.jpg", deskripsi: "Bola ketan isi gula merah dengan taburan kelapa parut." },
  { id: 16, nama: "Pisang Goreng", kategori: "Dessert", harga: 12000, foto: "images/pisang-goreng.jpg", deskripsi: "Pisang digoreng dengan balutan tepung renyah." },
  { id: 17, nama: "Es Campur", kategori: "Dessert", harga: 15000, foto: "images/es-campur.jpg", deskripsi: "Aneka buah dan agar dengan sirup, susu, dan es serut." },
  { id: 18, nama: "Dadar Gulung", kategori: "Dessert", harga: 10000, foto: "images/dadar-gulung.jpg", deskripsi: "Kulit hijau tipis berisi kelapa dan gula merah." },
  { id: 19, nama: "Bika Ambon", kategori: "Dessert", harga: 15000, foto: "images/bika-ambon.jpg", deskripsi: "Kue berongga lembut beraroma pandan, oleh-oleh khas Medan." },
  { id: 20, nama: "Kue Lapis", kategori: "Dessert", harga: 8000, foto: "images/kue-lapis.jpg", deskripsi: "Kue kenyal berlapis warna-warni dengan rasa manis lembut." }
];

export function tampilkanMenu(daftarMenu) {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";

  for (const menu of daftarMenu) {
    const card = document.createElement("article");
    card.className = "flex flex-col overflow-hidden rounded-xl bg-white shadow-md";
    card.innerHTML = `
      <img src="${menu.foto}" alt="${menu.nama}" class="h-48 w-full object-cover">
      <div class="flex flex-1 flex-col p-4">
        <span class="text-xs font-semibold uppercase text-nusa-merah">${menu.kategori}</span>
        <h3 class="mt-1 text-lg font-bold text-nusa-cokelat">${menu.nama}</h3>
        <p class="mt-1 flex-1 text-sm text-gray-600">${menu.deskripsi}</p>
        <p class="mt-3 font-semibold text-nusa-cokelat">Rp ${menu.harga.toLocaleString("id-ID")}</p>
      </div>
    `;
    grid.appendChild(card);
  }
}

tampilkanMenu(menuData);