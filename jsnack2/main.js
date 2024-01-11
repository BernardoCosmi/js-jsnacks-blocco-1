
let N = parseInt(prompt("Inserisci un numero N:"));
let cubi = [];
const result=document.querySelector('h2')

// Calcolo e salvataggio dati
for (let i = 1; i <= N; i++) {
    cubi.push(i ** 3);
}
result.innerHTML = "I cubi dei primi " + N + " numeri sono: " + cubi
console.log("I cubi dei primi " + N + " numeri sono: " + cubi);