let string = "ABCDX";
let subString = "CDC";
let n = string.length
let m = subString.length
let ocurrence = 0;
for (let i = 0; i < n - m + 1; i++) {
  if(subString == string.slice(i,i+m)){
    ocurrence += 1;
  }
}
console.log(ocurrence)
