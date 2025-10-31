// const date = new Date();
// const y = date.getFullYear();
// const m = String(date.getMonth() + 1).padStart(2, "0");
// const d = String(date.getDate()).padStart(2, "0");
// document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

let input = document.getElementById('inputTugas')
let btn = document.getElementById('btnTambah')
let output = document.getElementById('output')

btn.addEventListener('click', addTodo);

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTodo();
});

function addTodo() {
    const text = input.value.trim();

    if (text === '') {
        alert('Silahkan masukkan tugas terlebih dahulu');
        return;
    }

    const li = document.createElement('li');
    li.textContent = text;

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Selesai';
    doneBtn.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Hapus';
    delBtn.addEventListener('click', () => {
        output.removeChild(li);
    });

    li.appendChild(doneBtn)
    li.appendChild(delBtn)

    output.appendChild(li)

    input.value = ''
}