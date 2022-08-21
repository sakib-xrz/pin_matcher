// generate a pin
function generatePin() {
  const displayPin = document.getElementById("display-pin");
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length != 4) {
    return generatePin();
  } else {
    displayPin.value = pin;
  }
}

document.getElementById("generate-pin").addEventListener("click", function () {
  generatePin();
});

// type pin number
const allButton = document.getElementsByClassName("button");
for (const button of allButton) {
  button.addEventListener("click", function (event) {
    const numbers = event.target.innerText;
    const displayType = document.getElementById("typed-numbers");
    const previousTypeNumber = displayType.value;
    if (isNaN(numbers)) {
      if (numbers === "C") {
        displayType.value = "";
      } else if (numbers === "<") {
        displayType.value = displayType.value.slice(0, -1);
      }
    } else {
      const newTypeNumber = previousTypeNumber + numbers;
      displayType.value = newTypeNumber;
    }
  });
}

// match pin number by click submit button
const submitBtn = document
  .getElementById("verify-pin")
  .addEventListener("click", function () {
    const generatePinDisplay = document.getElementById("display-pin");
    const typedPinDisplay = document.getElementById("typed-numbers");
    const success = document.getElementById("pin-success");
    const fail = document.getElementById("pin-failure");
    if (generatePinDisplay.value === typedPinDisplay.value) {
      document.getElementById("typed-numbers").value = "";
      document.getElementById("display-pin").value = "";
      success.classList.remove("d-none");
      fail.classList.add("d-none");
    } else {
      fail.classList.remove("d-none");
      success.classList.add("d-none");
      function tryLeft() {
        let tryRemain = document.getElementById("try");
        let tryRemainStr = tryRemain.innerText;
        let tryRemaining = parseInt(tryRemainStr);
        tryRemaining--;
        if (tryRemaining < 0) {
          alert("You have failed too many times. Please try after 24 hour!!!");
          return;
        }
        tryRemain.innerText = tryRemaining;
      }
      tryLeft()
    }
  });
