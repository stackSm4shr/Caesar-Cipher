const usrInput = process.argv.slice(2, 3)[0].toLowerCase().split("");
//taking console input slice it to get string setting all values to lowercase and splitting string in array usrInput
let shiftVal = Number(process.argv.slice(3, 4)[0]);
//taking console input slice it to get shift value convert string to number
const enDeVal = process.argv.slice(4, 5)[0].toLowerCase();
//taking console input slice it to get encrypt or decrypt value

if (enDeVal === "e") {
  shiftVal *= 1;
} else if (enDeVal === "d") {
  shiftVal *= -1;
} else {
  console.log(
    "Error, no decryption/encryption Value specified, now using Default -> encryption"
  );
  shiftVal *= 1;
}

const alphaMap = "abcdefghijklmnopqrstuvwxyz".split("");

const alphaLen = alphaMap.length;
//itterates through array usrInput, checks if value is in alphaMap if=true then calculate new index for shift value and change old value with shift value
for (let i = 0; i < usrInput.length; i++) {
  if (alphaMap.includes(usrInput[i])) {
    let newIndex = (alphaMap.indexOf(usrInput[i]) + shiftVal) % alphaLen;
    //for shiftVal= 3  (   for h this would be 7    ) +    3      %   26    = 10
    //for shiftVal= -3 (   for h this would be 7    ) +   -3      %   26    = 4
    //for shiftVal= -3 (   for a this would be 0    ) +   -3      %   26    = -3
    //if newIndex < 0 then newIndex=newIndex+alphaLen, for shiftVal= -3 would be 23
    if (newIndex < 0) {
      newIndex += alphaLen;
    }
    usrInput[i] = alphaMap[newIndex];
    //value of usrInput index of i is changed to value of alphaMap index of newIndex
  }
}

console.log("After encryption:", usrInput.join(""));
// encrypted usrInput array values are joined to a string and console logged
