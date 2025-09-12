// const date = new Date();
// const y = date.getFullYear();
// const m = String(date.getMonth() + 1).padStart(2, "0");
// const d = String(date.getDate()).padStart(2, "0");
// document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

let tugas = document.getElementById("inputTugas");
let output = document.getElementById("output");

document.getElementById("btnTambah").addEventListener("click", function () {
    if (tugas.value === "") {
        alert("Kolom kosong");
    } else {
        const listTugas = new Array(tugas.value);
        output.textContent = listTugas[0];
    }
});