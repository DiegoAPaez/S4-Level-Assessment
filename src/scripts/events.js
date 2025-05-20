/**
 * Responsabilidad: gestionar los eventos
 * */
import { fizzBuzz } from "./fizzBuzz.js";
import { renderResult } from "./dom.js";

const form = document.querySelector("#fizzbuzz");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.querySelector("#userInput");
    const value = parseInt(userInput.value);
    const result = fizzBuzz(value);
    renderResult(result);
    userInput.value = ``;
});
