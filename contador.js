let contador = 0;

const numero = document.getElementById('numero');

document.getElementById('btnIncrementar').addEventListener('click', () => {
    contador++;
    numero.textContent = contador;
    numero.style.color = contador > 0 ? "green" : contador < 0 ? "red" : "black";
});

document.getElementById('btnDecrementar').addEventListener('click', () => {
    contador--;
    numero.textContent = contador;
    numero.style.color = contador > 0 ? "green" : contador < 0 ? "red" : "black";
});

document.getElementById('btnZerar').addEventListener('click', () => {
    contador = 0;
    numero.textContent = contador;
    numero.style.color = "black";
});