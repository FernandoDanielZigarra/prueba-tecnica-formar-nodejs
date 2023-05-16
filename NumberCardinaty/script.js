let num = process.argv[2];

function number_cardinality() {
  console.log(
    `${num.toString().at(-1) === "0" ? "zero" : ""}${
      num.toString().at(-1) === "5" ? "five" : ""
    }${parseInt(num) % 2 === 0 && num.at(-1) !== "0" ? "even" : ""}${
      parseInt(num) % 2 && num.toString().at(-1) !== "5" ? "odd" : ""
    }`
  );
}
number_cardinality();
