// Auto format phone number to (xxx) xxx-xxxx
let phoneInput = document.querySelector("#phoneNumber");
let arr = [];
phoneInput.addEventListener("input", (e) => {
  let digit = e.data;
  if (digit !== null) arr.push(digit);
  e.target.value = "(";

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) [(e.target.value += arr[i])];
    if (i === 3) e.target.value += ") " + arr[i];
    if (i > 3 && i < 6) e.target.value += arr[i];
    if (i === 6) e.target.value += " - " + arr[i];
    if (i > 6) e.target.value += arr[i];
    console.log(arr);
  }
  if (arr.length === 0) {
    e.target.value = "";
  }
});

phoneInput.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Backspace") {
    arr.pop();
    console.log("after backspace", arr);
  }
});

// Show red border on invalid inputs
let inputs = document.querySelectorAll("input[required]");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#passwordConfirm");
let accButton = document.querySelector("#accButton");

accButton.addEventListener("click", (e) => {
  let isValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.border = "red solid 2px";
      isValid = false;
    } else {
      input.style.border = "rgba(115, 156, 142) solid 2px";
    }
  });

  // check email format
  if (!email.value.includes("@") || !email.value.includes(".")) {
    email.style.border = "red solid 2px";
    isValid = false;
  } else {
    email.style.border = "rgba(115, 156, 142) solid 2px";
  }

  // check password match
  if (
    !password.value.trim() ||
    !passwordConfirm.value.trim() ||
    password.value !== passwordConfirm.value
  ) {
    password.style.border = "red solid 2px";
    passwordConfirm.style.border = "red solid 2px";
    isValid = false;
  } else {
    password.style.border = "rgba(115, 156, 142) solid 2px";
    passwordConfirm.style.border = "rgba(115, 156, 142) solid 2px";
  }

  if (!isValid) {
    e.preventDefault();
  }
});
