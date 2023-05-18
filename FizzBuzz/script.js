let arr = [1];

let regExpOnlyNumber = /[a-zA-Z!@#$%^&*(),.?":{}|<>]/;

if (regExpOnlyNumber.test(process.argv[2]))
  return console.log("El valor ingresado deve ser un número");

for (let index = 1; index < process.argv[2]; index++) {
  arr.push(arr.at(-1) + 1);
}

function fizz_buzz() {
  for (let i = 0; i < arr.length; i++)
    console.log(
      `${arr[i] % 3 ? "" : "Fizz"}${arr[i] % 5 ? "" : "Buzz"}` || arr[i]
    );
}

fizz_buzz();
