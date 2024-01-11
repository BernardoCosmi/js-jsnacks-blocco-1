let sum=0
let numbers = []
const result=document.querySelector('h2')
for(let i=0; i<10; i++){
    let numbersAdded = prompt("Inserire 10 numeri")
    numbers.push(numbersAdded)
    sum += +numbersAdded;

}
result.innerHTML = 'La somma è ' + sum
    console.log(numbers)
    console.log('La somma è ' + sum);