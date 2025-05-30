import { expect, describe, test } from "@jest/globals";
import { fizzBuzz } from "../src/scripts/fizzBuzz";

describe("FizzBuzz test for multiples of 3 and 5", () => {
    test("returns Fizz when multiple of 3", () => {
        // Gherking test
        /**
         * Scenario: Número divisible por 3
         * Given un número 9
         * When el número es procesado
         * Then se muestra "Fizz"
         */

        // Arrange: Preparar el escenario
        let valor_entrada = 9;
        let respuesta_esperada = {
            status: "ok",
            message: "Número divisible por 3",
            data: {
                input: 9,
                output: "Fizz",
            },
        };

        // Act: ejecutar el escenario
        let resultado = fizzBuzz(valor_entrada);

        // Assert: Comprobar el escenario
        expect(typeof resultado.data.input).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.output).toBe("Fizz");
    });

    test("returns Buzz when multiple of 5", () => {
        //Gherking test
        /**
         * Scenario: Número divisible por 5
         * Given un número 10
         * When el número es procesado
         * Then se muestra "Buzz"
         */
        // Arrange
        let valor_entrada = 10;
        let respuesta_esperada = {
            status: "ok",
            message: "Número divisible por 5",
            data: {
                input: 10,
                output: "Buzz",
            },
        };
        // Act
        let resultado = fizzBuzz(valor_entrada);
        // Assert
        expect(typeof resultado.data.input).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.output).toBe("Buzz");
    });

    test("returns FizzBuzz when multiple of 3 and 5", () => {
        //Gherking test
        /**
         * Scenario: Número divisible por 3 y 5
         * Given un número 15
         * When el número es procesado
         * Then se muestra "FizzBuzz"
         */
        // Arrange
        let valor_entrada = 15;
        let respuesta_esperada = {
            status: "ok",
            message: "Número divisible por 3 y 5",
            data: {
                input: 15,
                output: "FizzBuzz",
            },
        };
        // Act
        let resultado = fizzBuzz(valor_entrada);
        // Assert
        expect(typeof resultado.data.input).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.output).toBe("FizzBuzz");
    });

    test("returns number when is not multiple of 3 and 5", () => {
        //Gherking test
        /**
         * Scenario: Número no divisible por 3 ni 5
         * Given un número 8
         * When el número es procesado
         * Then se muestra el número ingresado
         */
        // Arrange
        let valor_entrada = 8;
        let respuesta_esperada = {
            status: "ok",
            message: "Número no divisible por 3 ni 5",
            data: {
                input: 8,
                output: 8,
            },
        };
        // Act
        let resultado = fizzBuzz(valor_entrada);
        // Assert
        expect(typeof resultado.data.input).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.output).toBe(valor_entrada);
    });

    test("returns error message if input is not valid", () => {
        //Gherking test
        /**
         * Scenario: Entrada no valida
         * Given un string
         * When el número es procesado
         * Then se muestra "Invalid input"
         */
        // Arrange
        let valor_entrada = "Hello";
        let respuesta_esperada = {
            status: "Bad Request",
            message: "Input cannot be processed",
            data: {
                input: "Hello",
                output: "Invalid input",
            },
        };
        // Act
        let resultado = fizzBuzz(valor_entrada);
        // Assert
        expect(typeof resultado.data.input).toBe("string");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.output).toBe("Invalid input");
    });
});
