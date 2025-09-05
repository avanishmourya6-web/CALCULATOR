 let string = "";
let buttons = document.querySelectorAll(".button");
let display = document.querySelector("input"); // Define display once

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let btn = e.target.innerHTML;

    if (btn == "=") {
      string = eval(string);
      display.value = string;
    } else if (btn == "C") {
      string = "";
      display.value = string;
    } else if (btn == "BB") {
      string = string.slice(0, -1); // Remove last character
      display.value = string;
    } else {
      string += btn;
      display.value = string;
    }
    if(btn == '='){
      try{
        string = eval(string);
        display.value = string;
      }catch{
        display.value = 'Error';
        string = "";
      }
    }
  });
});