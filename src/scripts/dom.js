export const renderResult = (response) => {
    const results = document.querySelector("#results");
    const newResult = document.createElement("div");
    let resultClasses = [
        "grid",
        "grid-cols-2",
        "mx-auto",
        "w-full",
        "justify-items-center",
        "bg-indigo-200",
        "rounded-lg",
        "my-1",
    ];
    newResult.classList.add(...resultClasses);
    if (response.status === "Bad Request") {
        newResult.classList.replace("bg-indigo-200", "bg-red-200");
    }
    const userInput = document.createElement("p");
    const output = document.createElement("p");

    userInput.innerHTML = `${response.data.input}`;
    output.innerHTML = `${response.data.output}`;
    newResult.appendChild(userInput);
    newResult.appendChild(output);
    results.appendChild(newResult);
};
