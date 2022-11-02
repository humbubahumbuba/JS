// округление:
// 1. вниз
// 2. вверх
// 3. математическое

const value = 27.5;
const roundedDown = Math.floor(value);
const roundedUp = Math.ceil(value);
const rounded = Math.round(value);
console.log("Down :", roundedDown);
console.log("Up :", roundedUp);
console.log("Math round :", rounded);
