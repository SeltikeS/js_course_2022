/* eslint-disable no-console */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return (...args2) => curried.apply(this, args2.concat(args));
  };
}

const addSimple = (a, b) => a + b;
const subSimple = (a, b) => a - b;
const mulSimple = (a, b) => a * b;
const divSimple = (a, b) => a / b;

const add = curry(addSimple);
const sub = curry(subSimple);
const mul = curry(mulSimple);
const div = curry(divSimple);

const pipe = (...args) => curry(...args);

// Каррирование не работает на неопределенное количество аргументов

// function pipe(...args) {
//   for (let i = 0; i < args.length; ++i) {
//     args[i].apply(this, args[i]);
//   }
// }

// TESTS

const a = add(1, 2); // 3
const b = mul(a, 10); // 30
const sub1 = sub(1); // sub1 отнимает от любого числа единицу
const c = sub1(b); // 29
const d = mul(sub(a, 1))(c); // 58

console.log(`${a} // Ожидается 3`);
console.log(`${b} // Ожидается 30`);
console.log(`${c} // Ожидается 29`);
console.log(`${d} // Ожидается 58`);

// функция, последовательно выполняющая эти операции.
const doSmth = pipe(add(d), sub(c), mul(b), div(a));
const result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290
const x = pipe(add(1), mul(2))(3); // 8

console.log(`${result} // Ожидается 290`);
console.log(`${x} // Ожидается 8`);
