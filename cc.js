const usrInput = process.argv.slice(2, 3)[0].toLowerCase().split("");
const shiftVal = process.argv.slice(3)[0];
const alphaMap = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for (let i = 0; i < usrInput.length; i++) {
  if (alphaMap.includes(usrInput[i])) {
    if (alphaMap.indexOf(usrInput[i]) + 3 > alphaMap.length) {
      usrInput[i] =
        alphaMap[(alphaMap.indexOf(usrInput[i]) + 3) % alphaMap.length];
    } else {
      usrInput[i] = alphaMap[alphaMap.indexOf(usrInput[i]) + 3];
    }
  }
}

console.log("After encryption: ", usrInput.join(""));
