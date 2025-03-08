let phoneInput = document.querySelector("#phoneNumber");

let arr = [];

phoneInput.addEventListener("input", (e) => {
  // e.target.value = "(949) 24";
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
