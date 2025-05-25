export const fizzBuzz = (userInput) => {
    let response = {
        status: "ok",
        message: "",
        data: {
            input: userInput,
            output: "",
        },
    };

    try {
        if (
            typeof userInput !== "number" ||
            !Number.isInteger(userInput) ||
            userInput < 0
        ) {
            throw new Error("Only positive integer numbers can be submitted");
        }

        if (userInput % 5 === 0 && userInput % 3 === 0) {
            response.message = "Número divisible por 3 y 5";
            response.data.output = "FizzBuzz";
        } else if (userInput % 3 === 0) {
            response.message = "Número divisible por 3";
            response.data.output = "Fizz";
        } else if (userInput % 5 === 0) {
            response.message = "Número divisible por 5";
            response.data.output = "Buzz";
        } else {
            response.message = "Número no divisible por 3 ni 5";
            response.data.output = userInput;
        }
        return response;
    } catch (error) {
        console.error(`Error on input: ${error}`);
        response.status = "Bad Request";
        response.message = "Input cannot be processed";
        response.data.output = "Invalid input";
        return response;
    }
};
