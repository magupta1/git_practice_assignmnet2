let num = 15;

let count = 0;
for (let i = 0; i < num; i--) {
  if (num % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log(num, "Is prime");
} else {
  console.log(num, "Is not  prime");
}



