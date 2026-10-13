// 1. NAVBAR MOBILE 
const tombolMenu = document.getElementById("tombol-menu");
const daftarMenu = document.getElementById("daftar-menu");

function toggleMenu() {
  daftarMenu.classList.toggle("hidden");
  daftarMenu.classList.toggle("flex");
}

tombolMenu.addEventListener("click", toggleMenu);

const linkMenu = document.querySelectorAll("#daftar-menu a");

for (let i = 0; i < linkMenu.length; i++) {
  linkMenu[i].addEventListener("click", function () {
    daftarMenu.classList.add("hidden");
    daftarMenu.classList.remove("flex");
  });
}


// 2. TAHUN OTOMATIS DI FOOTER 
const elemenTahun = document.getElementById("tahun");
const tahunSekarang = new Date().getFullYear();
elemenTahun.textContent = tahunSekarang;


// 3. LINK NAVBAR AKTIF SAAT SCROLL 
const semuaSection = document.querySelectorAll("main section");

function tandaiLinkAktif() {
  let idAktif = "";

  for (let i = 0; i < semuaSection.length; i++) {
    const posisiAtas = semuaSection[i].offsetTop - 120;
    if (window.scrollY >= posisiAtas) {
      idAktif = semuaSection[i].id;
    }
  }

  for (let j = 0; j < linkMenu.length; j++) {
    const href = linkMenu[j].getAttribute("href");
    if (href === "#" + idAktif) {
      linkMenu[j].classList.add("text-nusa-emas");
    } else {
      linkMenu[j].classList.remove("text-nusa-emas");
    }
  }
}

window.addEventListener("scroll", tandaiLinkAktif);