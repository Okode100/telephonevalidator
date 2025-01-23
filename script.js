document.getElementById("check-btn").addEventListener("click", () => {
    const inputField = document.getElementById("user-input");
    const resultsDiv = document.getElementById("results-div");
    const inputValue = inputField.value.trim();

    // Clear previous results
    resultsDiv.textContent = "";

    if (!inputValue) {
        alert("Please provide a phone number");
        return;
    }

    // US Phone number validation regex
    const validUSPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    const isValid = validUSPhoneRegex.test(inputValue);

    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${inputValue}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${inputValue}`;
    }
});

document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("results-div").textContent = "";
});
