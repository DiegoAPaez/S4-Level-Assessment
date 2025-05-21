import { fizzBuzz } from "./fizzBuzz.js";
import { renderResult } from "./dom.js";

const form = document.querySelector("#fizzbuzz");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.querySelector("#userInput");
    let value = parseInt(userInput.value);
    let result = fizzBuzz(isNaN(value) ? userInput.value : value);
    renderResult(result);
    userInput.value = ``;
});
