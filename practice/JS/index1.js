// Индекс массы тела
// числа даны строкой

let weight = "96";
let heaight = "1.85";

//  Приводим строку к числу
heaight = Number.parseFloat(heaight);
weight = Number.parseFloat(weight);

// Квадрат роста
let heaightPow = heaight * heaight;

// Вычисление индекса массы тела
const bmi = weight / heaightPow;
const roundedBmi = bmi.toFixed(2);
console.log("BMI :", roundedBmi);
