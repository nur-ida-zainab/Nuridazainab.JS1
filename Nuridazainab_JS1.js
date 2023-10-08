// penggunaan if, else
var umur = 20;
var izin = true;

if (umur >= 18) {
    if (izin) {
        console.log("Anda boleh masuk.");
    } else {
        console.log("Anda tidak memiliki izin.");
    }
} else {
    console.log("Anda belum cukup umur.");
}
let age = 25;
let hasLicense = true;

// nested if
if (age >= 18) {
  console.log("You are an adult.");
  
  if (hasLicense) {
    console.log("You have a driver's license.");
  } else {
    console.log("You don't have a driver's license.");
  }
} else {
  console.log("You are not an adult.");
}

// switch case
let hari = "Selasa";
switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu.");
    break;
  default:
    console.log("Ini bukan hari kerja.");
}

// for statement
const fruits = ["Apel", "Pisang", "Jeruk", "Anggur"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Buah: " + fruits[i]);
}

// while
let angka = 1;

let counter = 1;

while (counter <= 5) {
  console.log("Iterasi ke-" + counter);
  counter++;
}

// do while
let text = "Halo";

let index = 0;
do {
  console.log(text[index]);
  index++;
} while (index < text.length);

// function
function sapa() {
    console.log("Halo, selamat datang!");
  }
  
  // Memanggil fungsi sapa
  sapa();
  








  