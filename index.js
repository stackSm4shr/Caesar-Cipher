let action = null; 
const alphaMap = "abcdefghijklmnopqrstuvwxyz".split("");
const alphaLen = alphaMap.length;

const form = document.getElementById("form");
const messageInput = document.getElementById("messageInput");
const shiftInput = document.getElementById("shiftInput");
const output = document.getElementById("output");
const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("decrypt");

function caesarCipher(input, shift, enDeVal) {
  if (enDeVal === "e") {
    shift *= 1;
  } else if (enDeVal === "d") {
    shift *= -1;
  } 

  let usrInput = input.toLowerCase().split("");

  for (let i = 0; i < usrInput.length; i++) {
    if (alphaMap.includes(usrInput[i])) {
      let newIndex = (alphaMap.indexOf(usrInput[i]) + shift) % alphaLen;

      if (newIndex < 0) {
        newIndex += alphaLen;
      }
      usrInput[i] = alphaMap[newIndex];
    }
  }

  return usrInput.join("");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const messageText = messageInput.value.trim();
  let shiftVal = parseInt(shiftInput.value, 10);

  if (messageText === "") {
    output.textContent = "⚠️ Please enter a message before submitting.";
    output.className =
      "mt-4 p-4 rounded bg-red-500 text-white font-semibold";
    return;
  }

  if (isNaN(shiftVal)) {
    output.textContent = "⚠️ Please enter a valid shift value.";
    output.className =
      "mt-4 p-4 rounded bg-red-500 text-white font-semibold";
    return;
  }

  if (!action) {
    output.textContent = "⚠️ Please select Encrypt or Decrypt first.";
    output.className =
      "mt-4 p-4 rounded bg-yellow-500 text-white font-semibold";
    return;
  }

  const result = caesarCipher(messageText, shiftVal, action);
  output.textContent = `Result: "${result}"`;
  output.className =
    "mt-4 p-4 rounded bg-green-500 text-white font-semibold";
});

encryptBtn.addEventListener("click", function () {
  action = "e";
  output.textContent = "Encrypt mode selected.";
  output.className =
    "mt-4 p-4 rounded bg-blue-500 text-white font-semibold";
});

decryptBtn.addEventListener("click", function () {
  action = "d";
  output.textContent = "Decrypt mode selected.";
  output.className =
    "mt-4 p-4 rounded bg-blue-500 text-white font-semibold";
});
