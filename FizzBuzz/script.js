let arr = [1];

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
