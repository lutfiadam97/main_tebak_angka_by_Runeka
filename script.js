// GAME TEBAK ANGKA

// player menebak angka
var tebakAngka;
// menangkap angka tebakan komputer
// bikin nilai random
var comp = Math.floor(Math.random() * 10);
//console.log(comp);

// bikin rules
var hasil = "";
var tanya = true;

while (tanya) {
  for (var kesempatan = 2; kesempatan >= 0; kesempatan--) {
    tebakAngka = prompt("Tebak Angka (1 - 10) ");
    // bikin kondisi menang
    if (tebakAngka == comp && kesempatan != 0) {
      hasil = "Anda BENAR!!! \nAngka yang dicari adalah " + comp;
      alert(hasil);
      tanya = confirm("Main lagi?");
      break;
      // jika tebakan salah, lanjut ke kodingan selanjutnya
    } else if (tebakAngka < comp && kesempatan != 0) {
      hasil = "tebakan anda terlalu RENDAH!";
      alert(hasil + " , kesempatan Anda tersisa : " + kesempatan + "x");
    } else if (tebakAngka > comp && kesempatan != 0) {
      hasil = "tebakan anda terlalu TINGGI!";
      alert(hasil + " , kesempatan Anda tersisa : " + kesempatan + "x");
    } else if (kesempatan == 0) {
      alert("Kesempatan Anda sudah HABIS!" + "\nGAME OVER!");
      tanya = confirm("Main lagi?");
    } else {
      alert("Tebakan anda bukan Angka!");
    }
  }
}

alert("TERIMA KASIH TELAH BERMAIN!");
