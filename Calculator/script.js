const kali = document.getElementById("kali");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const bagi = document.getElementById("bagi");

let hasil = document.getElementById("hasil");

kali.addEventListener("click", function () {
    let a = Number(document.getElementById("angkaSatu").value);
    let b = Number(document.getElementById("angkaDua").value);

    x = 0;

    x = a * b;

    hasil.textContent = "Hasil nya adalah : " + x;
});

tambah.addEventListener("click", function () {
    let a = Number(document.getElementById("angkaSatu").value);
    let b = Number(document.getElementById("angkaDua").value);

    x = 0;

    x = a + b;

    hasil.textContent = "Hasil nya adalah : " + x;
});

kurang.addEventListener("click", function () {
    let a = Number(document.getElementById("angkaSatu").value);
    let b = Number(document.getElementById("angkaDua").value);

    x = 0;

    x = a - b;

    hasil.textContent = "Hasil nya adalah : " + x;
});

bagi.addEventListener("click", function () {
    let a = Number(document.getElementById("angkaSatu").value);
    let b = Number(document.getElementById("angkaDua").value);

    x = 0;

    x = a / b;

    hasil.textContent = "Hasil nya adalah : " + x;
});
