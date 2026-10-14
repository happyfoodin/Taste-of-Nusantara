import { menuData } from "./menu.js";

const keranjang = new Map();

const gridMenu = document.getElementById("menu-grid");
const daftarPesanan = document.getElementById("daftar-pesanan");
const totalHargaElement = document.getElementById("total-harga");

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function tambahPesanan(idMenu) {
  const menu = menuData.find((item) => item.id === idMenu);

  if (!menu) return;

  const jumlahSekarang = keranjang.get(idMenu) || 0;
  keranjang.set(idMenu, jumlahSekarang + 1);

  tampilkanPesanan();
}

function ubahJumlah(idMenu, perubahan) {
  const jumlahBaru = (keranjang.get(idMenu) || 0) + perubahan;

  if (jumlahBaru <= 0) {
    keranjang.delete(idMenu);
  } else {
    keranjang.set(idMenu, jumlahBaru);
  }

  tampilkanPesanan();
}

function tampilkanPesanan() {
  daftarPesanan.innerHTML = "";
  let totalHarga = 0;
  let totalItem = 0;

  for (const [idMenu, jumlah] of keranjang) {
    const menu = menuData.find((item) => item.id === idMenu);
    if (!menu) continue;

    const subtotal = menu.harga * jumlah;
    totalHarga += subtotal;
    totalItem += jumlah;

    const baris = document.createElement("div");
    baris.className = "flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between";
    baris.innerHTML = `
      <div class="min-w-0 flex-1">
        <h3 class="font-semibold text-nusa-cokelat">${menu.nama}</h3>
        <p class="mt-1 text-sm text-gray-500">${formatRupiah(menu.harga)} / item</p>
        <p class="mt-1 text-sm font-medium text-nusa-merah">Subtotal: ${formatRupiah(subtotal)}</p>
      </div>
      <div class="flex items-center gap-3 self-start sm:self-auto">
        <button type="button" data-jumlah-ubah="-1" data-menu-id="${menu.id}"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-nusa-emas text-lg font-bold hover:bg-nusa-emas"
          aria-label="Kurangi ${menu.nama}">−</button>
        <span class="min-w-6 text-center font-semibold" aria-label="Jumlah ${jumlah}">${jumlah}</span>
        <button type="button" data-jumlah-ubah="1" data-menu-id="${menu.id}"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-nusa-cokelat text-lg font-bold text-white hover:bg-nusa-merah"
          aria-label="Tambah ${menu.nama}">+</button>
      </div>
    `;
    daftarPesanan.appendChild(baris);
  }

  if (totalItem === 0) {
    daftarPesanan.innerHTML = `
      <p id="pesanan-kosong" class="rounded-lg bg-white p-5 text-center text-sm text-gray-500">
        Keranjang masih kosong. Silakan pilih menu terlebih dahulu.
      </p>
    `;
  }

  totalHargaElement.textContent = formatRupiah(totalHarga);
}

gridMenu.addEventListener("click", (event) => {
  const tombolPesan = event.target.closest("[data-pesan-id]");
  if (!tombolPesan) return;

  const idMenu = Number(tombolPesan.dataset.pesanId);
  tambahPesanan(idMenu);

});

daftarPesanan.addEventListener("click", (event) => {
  const tombolUbah = event.target.closest("[data-jumlah-ubah]");
  if (!tombolUbah) return;

  const idMenu = Number(tombolUbah.dataset.menuId);
  const perubahan = Number(tombolUbah.dataset.jumlahUbah);
  ubahJumlah(idMenu, perubahan);
});

tampilkanPesanan();