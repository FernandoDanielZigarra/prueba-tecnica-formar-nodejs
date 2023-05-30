let num = process.argv[2];

function range_vision() {
  let regExpOnlyNumber = /[a-zA-Z!@#$%^&*(),.?":{}|<>-]/;

  if (regExpOnlyNumber.test(num))
    return console.log(
      "El valor ingresado debe ser un número entero no negativo"
    );
  if (!num.includes("1"))
    return console.log(
      "El número ingresado debe poseer al menos un digito con el valor de 1"
    );

  let indexOneRanges = [];
  let sumaryOneRanges = [];
  let minOneRangeIndex = 0;
  let minOneRangeSumatory = 0;
  let rangesVision = [];
  let valuesSumaryRanges = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") indexOneRanges.push(i);
  }

  for (const index of indexOneRanges) {
    let subSumaryOnes = 0;
    if (!isNaN(parseInt(num[index - 1])))
      subSumaryOnes += parseInt(num[index - 1]);
    if (!isNaN(parseInt(num[index + 1])))
      subSumaryOnes += parseInt(num[index + 1]);
    sumaryOneRanges.push(subSumaryOnes);
  }

  minOneRangeSumatory = Math.min(...sumaryOneRanges);
  minOneRangeIndex =
    indexOneRanges[sumaryOneRanges.indexOf(minOneRangeSumatory)];

  for (const n of num) {
    rangesVision.push(parseInt(n));
  }

  for (let i = 0; i <= rangesVision.length - 1; i++) {
    let leftValues = 0;
    let rightValues = 0;
    if (rangesVision[i] !== 1 && i > 0) {
      for (let j = 1; j <= rangesVision[i] && i - j >= 0; j++) {
        leftValues += rangesVision[i - j];
      }
    }
    if (rangesVision[i] !== 1 && i < rangesVision.length - 1) {
      for (
        let h = 1;
        h <= rangesVision[i] && i + h < rangesVision.length;
        h++
      ) {
        rightValues += rangesVision[i + h];
      }
    }
    if (leftValues !== 0 || rightValues !== 0)
      valuesSumaryRanges.push(leftValues + rightValues);
  }
  if (!valuesSumaryRanges.includes(minOneRangeSumatory)) {
    return false;
  }
  return true;
}
range_vision();
