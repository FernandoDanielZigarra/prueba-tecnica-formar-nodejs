let num = "512321";
let result = [];

console.log(num.slice(1,-1));

for (let i = 0; i < num.length - 1; i++) {
  let limitRight = parseInt(num[i]) + 1 + i;
  let limitLeft = parseInt(num[i]) - 1 - i;
  let startRight = i + 1;
  let startLeft = i - 1;
  let subTotal = 0;
  let subTotal2 = 0;

  subTotal = num.slice(startRight, limitRight);
  if (i !== 0) {
    subTotal2 = num.slice(startLeft, limitLeft);
  }
  console.log(subTotal);
  console.log(subTotal2);
  /* result.push(subTotal) */
}

/* console.log(result) */
