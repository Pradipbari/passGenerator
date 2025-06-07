let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("copyicon");
slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
  slidervalue.textContent = inputslider.value;
});
genbtn.addEventListener("click", () => {
  passbox.value = generatePassword();
});
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "@#$%^&*";
//function to generate password
function generatePassword() {
  let genPassword = "";
  let allChars = "";
  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";
  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }
  let i = 1;
  while (i <= inputslider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}
copyIcon.addEventListener("click", () => {
  if (passbox.value != "" || passbox.value >= 1) {
    copyIcon.innerText = "";
    navigator.clipboard.writeText(passbox.value);
    copyIcon.title = "Password Copied";
  }
});
