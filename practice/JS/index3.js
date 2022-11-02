//  * Task 1
//  * 1. Запитати користувача: "Яка офіційна назва JavaScript?"
//  * 2. Перевірити відповідь:
//  *    Якщо користувач ввів "ECMAScript", показати alert "Вірно!"
//  *    В іншому випадку, "Не знаєте? ECMAScript!"
let answer = prompt("Какое официальное название JavaScript?");

if (answer === "ECMAScript") {
  alert("Вы правы :)");
} else {
  alert("Вы не правы :(");
}
console.log(answer);
