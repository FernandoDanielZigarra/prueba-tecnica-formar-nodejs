let input = process.argv[2];

function fizz_buzz(value) {
  let regExpOnlyNumber = /[a-zA-Z!@#$%^&*(),.?":{}|<>]/;
  if (regExpOnlyNumber.test(process.argv[2]))
    return "El valor ingresado deve ser un número";
  let arr = [];
  let result = [];
  for (let index = 1; index <= parseInt(value); index++) {
    if (arr.length === 0) {
      arr.push(1);
      continue;
    } else {
      arr.push(arr.at(-1) + 1);
      continue;
    }
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    if (parseInt(arr[i]) % 3 === 0 && parseInt(arr[i]) % 5 === 0) {
      result.push("FizzBuzz");
      continue;
    } else if (parseInt(arr[i]) % 3 === 0) {
      result.push("Fizz");
      continue;
    } else if (parseInt(arr[i]) % 5 === 0) {
      result.push("Buzz");
      continue;
    }
    result.push(arr[i]);
    continue;
  }
  return result;
}

console.log(fizz_buzz(input));
