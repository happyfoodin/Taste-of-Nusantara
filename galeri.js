import { menuData } from "./menu.js";

const idGaleri = [];

const galeriData = menuData
  .filter((menu) => idGaleri.length === 0 || idGaleri.includes(menu.id))
  .map((menu) => ({ src: menu.foto, keterangan: menu.nama }));

const JUMLAH_AWAL = 4;
const JEDA_GANTI = 5000;
const DURASI_FADE = 500;

const galeriGrid = document.getElementById("galeri-grid");
const tombolGaleriSemua = document.getElementById("tombol-galeri-semua");

const modalGambar = document.getElementById("modal-gambar");
const modalFoto = document.getElementById("modal-foto");
const modalKeterangan = document.getElementById("modal-keterangan");
const tombolTutupModal = document.getElementById("tombol-tutup-modal");

const kurangiGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let tampilSemua = false;
let modalTerbuka = false;
let timerGanti = null;

function ambilAcak(jumlah) {
  const indeks = [];
  for (let i = 0; i < galeriData.length; i++) {
    indeks.push(i);
  }
  for (let i = indeks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indeks[i], indeks[j]] = [indeks[j], indeks[i]];
  }
  return indeks.slice(0, jumlah);
}

function semuaIndeks() {
  const indeks = [];
  for (let i = 0; i < galeriData.length; i++) {
    indeks.push(i);
  }
  return indeks;
}

function tampilkanGaleri(daftarIndeks) {
  galeriGrid.innerHTML = "";

  for (let n = 0; n < daftarIndeks.length; n++) {
    const nomor = daftarIndeks[n];
    const item = galeriData[nomor];
    const kartu = document.createElement("figure");

    kartu.dataset.indeks = nomor;
    kartu.className = "relative aspect-square overflow-hidden rounded-xl bg-nusa-krem shadow-md";
    kartu.innerHTML = `
      <button type="button"
              class="block h-full w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nusa-emas"
              aria-label="Perbesar foto ${item.keterangan}">
        <img src="${item.src}" alt="${item.keterangan}" loading="lazy"
             class="h-full w-full object-cover transition duration-500 hover:scale-110"
             onerror="this.style.display='none'">
      </button>
      <figcaption class="pointer-events-none absolute inset-x-0 bottom-0 bg-nusa-cokelat/70 px-3 py-2 text-sm font-medium text-white">
        ${item.keterangan}
      </figcaption>
    `;
    galeriGrid.appendChild(kartu);
  }
}

function gantiFoto() {
  galeriGrid.classList.add("opacity-0");

  setTimeout(function () {
    if (!tampilSemua) {
      tampilkanGaleri(ambilAcak(JUMLAH_AWAL));
    }
    galeriGrid.classList.remove("opacity-0");
  }, DURASI_FADE);
}

function mulaiPutar() {
  if (tampilSemua || modalTerbuka || kurangiGerak || timerGanti !== null) return;
  timerGanti = setInterval(gantiFoto, JEDA_GANTI);
}

function hentikanPutar() {
  clearInterval(timerGanti);
  timerGanti = null;
}

// modal gambar
function bukaModal(nomor) {
  const item = galeriData[nomor];
  if (!item) return;

  modalFoto.src = item.src;
  modalFoto.alt = item.keterangan;
  modalKeterangan.textContent = item.keterangan;

  modalGambar.classList.remove("hidden");
  modalGambar.classList.add("flex");
  modalTerbuka = true;
  hentikanPutar();
}

function tutupModal() {
  modalGambar.classList.add("hidden");
  modalGambar.classList.remove("flex");
  modalTerbuka = false;
  mulaiPutar();
}

galeriGrid.addEventListener("click", function (event) {
  const kartu = event.target.closest("[data-indeks]");
  if (!kartu) return;
  bukaModal(Number(kartu.dataset.indeks));
});

tombolTutupModal.addEventListener("click", tutupModal);

// tombol lihat selengkapnya
tombolGaleriSemua.addEventListener("click", function () {
  tampilSemua = !tampilSemua;

  if (tampilSemua) {
    hentikanPutar();
    tampilkanGaleri(semuaIndeks());
    tombolGaleriSemua.textContent = "Tampilkan Lebih Sedikit";
  } else {
    tampilkanGaleri(ambilAcak(JUMLAH_AWAL));
    tombolGaleriSemua.textContent = "Lihat Selengkapnya";
    mulaiPutar();
  }
});

galeriGrid.addEventListener("mouseenter", hentikanPutar);
galeriGrid.addEventListener("mouseleave", mulaiPutar);
galeriGrid.addEventListener("focusin", hentikanPutar);
galeriGrid.addEventListener("focusout", mulaiPutar);

if (galeriData.length <= JUMLAH_AWAL) {
  tombolGaleriSemua.classList.add("hidden");
}

tampilkanGaleri(ambilAcak(JUMLAH_AWAL));
mulaiPutar();