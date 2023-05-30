let num = process.argv[2];

function number_cardinality(value) {
  let regExpOnlyNumber = /[a-zA-Z!@#$%^&*(),.?":{}|<>]/;
  if (regExpOnlyNumber.test(value))
    return console.log("El valor ingresado deve ser un número");
  let result = "";
  if (value.toString().at(-1) === "0") {
    result = "zero";
  } else if (value.toString().at(-1) === "5") {
    result = "five"
  }else if(parseInt(value) % 2 === 0 && value.at(-1) !== "0"){
    result = "even"
  }else if(parseInt(value) % 2 !== 0 && value.toString().at(-1) !== "5"){
    result = "odd"
  }else{
    result = value.toString()
  }
  return result;
}
console.log(number_cardinality(num));
