
// for...loop

for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}

// while...loop

let count = 0;
while (count < 3) {
  console.log("Current count: " + count);
  count++;
}

// do...while loop

let x = 10;
do {
  console.log("Executed once, even though x is not < 5. x = " + x);
  x++;
} while (x < 5);


// for...in loop

const person = { name: "Alice", age: 30, city: "NY" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for...of loop

const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// break statement

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue statement

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}