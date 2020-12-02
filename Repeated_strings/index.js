// function repeatStringNumTimes(string, times) {
//     if(times < 0)
//       return "";
//     if(times === 1)
//       return string;
//     else
//       return string + repeatStringNumTimes(string, times - 1);
//   }

// let repeatStringCalc = (str, limit) => {

//  let str1 = repeatStringNumTimes(str, limit);
//  console.log(str1);
//   let temp = str.toString().repeat(Math.ceil(limit / str.toString().length));
//   console.log('Output -> ', temp.substring(0, limit).match(/a/g).length);
// };

// repeatStringCalc("abc", 1000000000000);

String.prototype.countCharacter = function (char) {
  return [...this].filter((c) => c === char).length;
};

// Complete the repeatedString function below.
function repeatedString(s, n) {
  const l = s.length,
    repeatsRequired = Math.ceil(n / l),
    charsRequired = repeatsRequired * l,
    numCharsInLastRepeat = l - (charsRequired % n);

  console.log(l, repeatsRequired, charsRequired, numCharsInLastRepeat);

  const a_s = s.countCharacter("a"),
    a_r = s.slice(0, numCharsInLastRepeat).countCharacter("a");

  console.log(a_s);
  console.log(a_r);

  console.log(a_s * (repeatsRequired - 1) + a_r);

  return a_s * (repeatsRequired - 1) + a_r;
}

console.log(repeatedString("aba", 10));
