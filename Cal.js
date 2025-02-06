$(document).ready(function () {
    let input = "";
  
    $(".btn").click(function () {
      const value = $(this).data("value");
  
      if (value === "AC") {
        input = ""; // Clear input
      } else if (value === "Delete") {
        input = input.slice(0, -1); // Remove last character
      } else if (value === "=") {
        try {
          input = eval(input).toString(); // Evaluate the expression
        } catch (e) {
          input = "Error"; // Handle invalid input
        }
      } else {
        input += value; // Append value to input
      }
  
      $("#display").val(input); // Update display
    });
  });
  $(document).ready(function () {
    let input = ""; // Variabel untuk menyimpan input pengguna
  
    // Fungsi onClick untuk setiap tombol
    $(".btn").on("click", function () {
      const value = $(this).data("value"); // Ambil nilai tombol
  
      if (value === "AC") {
        input = ""; // Reset input
      } else if (value === "Delete") {
        input = input.slice(0, -1); // Hapus karakter terakhir
      } else if (value === "=") {
        try {
          input = eval(input).toString(); // Evaluasi ekspresi
        } catch (e) {
          input = "Error"; // Tampilkan error jika ekspresi salah
        }
      } else {
        input += value; // Tambahkan nilai tombol ke input
      }
  
      $("#display").val(input); // Tampilkan input atau hasil di layar
    });
  });
  $(document).ready(function () {
    let input = "";
  
    $(".btn").on("click", function () {
      const value = $(this).data("value");
      const $button = $(this); // Simpan tombol yang ditekan
  
      // Efek warna saat tombol ditekan
      $button.css("background-color", "#add8e6"); // Warna tombol saat diklik
      setTimeout(() => {
        $button.css("background-color", ""); // Kembali ke warna semula setelah 200ms
      }, 200);
  
      // Logika tombol
      if (value === "AC") {
        input = "";
      } else if (value === "Delete") {
        input = input.slice(0, -1);
      } else if (value === "=") {
        try {
          input = eval(input).toString();
        } catch (e) {
          input = "Error";
        }
      } else {
        input += value;
      }
  
      $("#display").val(input);
    });
  });
  $(document).ready(function () {
    let input = "";
  
    // Event klik untuk tombol
    $(".btn").on("click", function () {
      const value = $(this).data("value");
  
      // Logika tombol
      if (value === "AC") {
        input = ""; // Reset semua input
      } else if (value === "Delete") {
        input = input.slice(0, -1); // Hapus karakter terakhir
      } else if (value === "=") {
        try {
          // Evaluasi ekspresi
          input = eval(input).toString();
        } catch (e) {
          // Jika terjadi error, hapus semua input
          input = "";
          alert("Input salah! Semua telah dihapus."); // Pesan untuk pengguna
        }
      } else {
        input += value; // Tambahkan input
      }
  
      // Tampilkan input atau hasil di layar
      $("#display").val(input);
    });
  });
  if (value === "=") {
    try {
      input = eval(input).toString();
    } catch (e) {
      input = "";
      $("#display").val("Error"); // Tampilkan pesan error
    }
  }
  