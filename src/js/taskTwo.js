let b = 20;
console.log(b); // 20

if (true) {
  console.log(b); // undefined
  let b = 10;
}

console.log(b); // 20
