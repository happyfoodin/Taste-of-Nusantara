const formReservasi = document.getElementById("form-reservasi");
const inputNama = document.getElementById("nama");
const inputTanggal = document.getElementById("tanggal");
const inputJam = document.getElementById("jam");
const inputJumlah = document.getElementById("jumlah");
const pesanReservasi = document.getElementById("pesan-reservasi");

function formatTanggalLokal(tgl) {
  const tahun = tgl.getFullYear();
  const bulan = String(tgl.getMonth() + 1).padStart(2, "0");
  const hari = String(tgl.getDate()).padStart(2, "0");
  return tahun + "-" + bulan + "-" + hari;
}

const hariIni = formatTanggalLokal(new Date());
inputTanggal.min = hariIni;

function tampilkanError(input, pesan) {
  document.getElementById("error-" + input.id).textContent = pesan;
  input.classList.add("border-red-500");
  input.classList.remove("border-nusa-emas/60");
}

function hapusError(input) {
  document.getElementById("error-" + input.id).textContent = "";
  input.classList.remove("border-red-500");
  input.classList.add("border-nusa-emas/60");
}

function validasiNama() {
  if (inputNama.value.trim() === "") {
    tampilkanError(inputNama, "Nama tidak boleh kosong.");
    return false;
  }
  hapusError(inputNama);
  return true;
}

function validasiTanggal() {
  if (inputTanggal.value === "") {
    tampilkanError(inputTanggal, "Tanggal tidak boleh kosong.");
    return false;
  }
  if (inputTanggal.value < hariIni) {
    tampilkanError(inputTanggal, "Tanggal tidak boleh sudah lewat.");
    return false;
  }
  hapusError(inputTanggal);
  return true;
}

function ambilJamBuka(tanggal) {
  const hari = new Date(tanggal + "T00:00:00").getDay();
  if (hari === 0 || hari === 6) {
    return { buka: "09:00", tutup: "23:00", teks: "Sabtu - Minggu 09.00 - 23.00" };
  }
  return { buka: "10:00", tutup: "22:00", teks: "Senin - Jumat 10.00 - 22.00" };
}

function validasiJam() {
  if (inputJam.value === "") {
    tampilkanError(inputJam, "Jam tidak boleh kosong.");
    return false;
  }
  if (inputTanggal.value !== "") {
    const jamBuka = ambilJamBuka(inputTanggal.value);
    if (inputJam.value < jamBuka.buka || inputJam.value >= jamBuka.tutup) {
      tampilkanError(inputJam, "Di luar jam buka (" + jamBuka.teks + ").");
      return false;
    }
  }
  const sekarang = new Date();
  const jamSekarang =
    String(sekarang.getHours()).padStart(2, "0") + ":" +
    String(sekarang.getMinutes()).padStart(2, "0");
  if (inputTanggal.value === hariIni && inputJam.value < jamSekarang) {
    tampilkanError(inputJam, "Jam sudah lewat untuk hari ini.");
    return false;
  }
  hapusError(inputJam);
  return true;
}

function validasiJumlah() {
  const jumlah = Number(inputJumlah.value);
  if (inputJumlah.value === "") {
    tampilkanError(inputJumlah, "Jumlah orang tidak boleh kosong.");
    return false;
  }
  if (!Number.isInteger(jumlah) || jumlah < 1) {
    tampilkanError(inputJumlah, "Jumlah orang minimal 1.");
    return false;
  }
  hapusError(inputJumlah);
  return true;
}

function tampilkanPesan(teks, berhasil) {
  pesanReservasi.textContent = teks;
  pesanReservasi.classList.remove("hidden", "bg-green-100", "text-green-800", "bg-red-100", "text-red-800");
  if (berhasil) {
    pesanReservasi.classList.add("bg-green-100", "text-green-800");
  } else {
    pesanReservasi.classList.add("bg-red-100", "text-red-800");
  }
}

formReservasi.addEventListener("submit", function (e) {
  e.preventDefault();

  const namaValid = validasiNama();
  const tanggalValid = validasiTanggal();
  const jamValid = validasiJam();
  const jumlahValid = validasiJumlah();

  if (namaValid && tanggalValid && jamValid && jumlahValid) {
    const tanggalTeks = new Date(inputTanggal.value + "T00:00:00").toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    tampilkanPesan(
      "Reservasi berhasil! Terima kasih, " + inputNama.value.trim() +
      ". Meja untuk " + inputJumlah.value + " orang pada " + tanggalTeks +
      " pukul " + inputJam.value + " sudah kami catat.",
      true
    );
    formReservasi.reset();
  } else {
    tampilkanPesan("Reservasi belum bisa dikirim. Mohon periksa kembali isian Anda.", false);
  }
});

inputNama.addEventListener("input", validasiNama);
inputTanggal.addEventListener("change", function () {
  validasiTanggal();
  if (inputJam.value !== "") {
    validasiJam();
  }
});
inputJam.addEventListener("change", validasiJam);
inputJumlah.addEventListener("input", validasiJumlah);
