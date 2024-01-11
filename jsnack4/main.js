let input = parseInt(prompt("Digita la quantità di valori da inserire:"));
let numeri = [""];
const result = document.querySelector('h2')

for(let y=0; y<input; y++){
    let numbersAdded = parseInt(prompt("Inserire " + input + " numeri, premendo invio per ognuno di essi"))
    numeri.push(numbersAdded)
}

let somma = 0;
for (let i = 0; i < numeri.length; i++) {
    //Pari o dispari?
    if(i % 2 !==0){
        somma += numeri[i]
    }
}

console.log(numeri)
console.log("La somma degli elementi in posizione dispari è: " + somma);
result.innerHTML = "La somma degli elementi in posizione dispari è: " + somma;