const input = document.querySelector("#income-number");

input.addEventListener("input", function (e) {
  // Hapus semua karakter non-angka
  let value = e.target.value.replace(/[^0-9]/g, "");

  // Format angka jika ada nilai
  if (value) {
    value = parseInt(value, 10).toLocaleString("en-US");
  }

  // Setel kembali nilai input yang sudah diformat
  e.target.value = value;

  // Mengatur posisi kursor selalu di akhir
  input.setSelectionRange(value.length, value.length);
});
