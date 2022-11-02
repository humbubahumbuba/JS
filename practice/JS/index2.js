/**
 * ## Example 10 - Опертор % и методы строк
 * Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
 * строку в формате часов и минут `HH:MM`.
 * - 70 покажет 01:10
 * - 450 покажет 07:30
 * - 1441 покажет 24:01
 * */

const totalMinutes = 1441;

// получаем целое число в часах
// получаем остаток от деление минут для минут
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

// padStart
// String(hours).padStart(2, 0);, де hours - дана строчка, 2 - довжина до якої доповнити, 0 - строка якою доповнювати
// форматируем в двухсимвольные строки часы и минуты

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
