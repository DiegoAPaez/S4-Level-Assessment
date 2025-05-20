/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            input: 0, // Número evaluado
            output: "" // outputado esperado
            }
    }
 * */

export const fizzBuzz = (userInput) => {
    try {
        const response = {
            status: "",
            message: "",
            data: {
                input: 0,
                output: "",
            },
        };

        if (typeof userInput !== "number") {
            response.status = "Bad Request";
            response.message = "Input cannot be processed";
            response.data.input = userInput;
            response.data.output = "Invalid input";
            return response;
        }

        if (userInput % 5 === 0 && userInput % 3 === 0) {
            response.status = "ok";
            response.message = "Número divisible por 3 y 5";
            response.data.input = userInput;
            response.data.output = "FizzBuzz";
        } else if (userInput % 5 === 0 && userInput % 3 !== 0) {
            response.status = "ok";
            response.message = "Número divisible por 5";
            response.data.input = userInput;
            response.data.output = "Buzz";
        } else if (userInput % 5 !== 0 && userInput % 3 === 0) {
            response.status = "ok";
            response.message = "Número divisible por 3";
            response.data.input = userInput;
            response.data.output = "Fizz";
        } else {
            response.status = "ok";
            response.message = "Número no divisible por 3 ni 5";
            response.data.input = userInput;
            response.data.output = userInput;
        }
        return response;
    } catch (error) {
        console.error(`Input error: ${error}`);
    }
};
