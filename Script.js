document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('matrix-output');
    const inputField = document.getElementById('matrix-input');

    const commands = {
        help: "Available commands: 'hack', 'status', 'exit'.",
        hack: "Hacking... Decrypting passwords... Accessing database... Done.",
        status: "System status: All systems online. Encryption level: 95%.",
        exit: "Shutting down. Goodbye."
    };

    function displayOutput(text) {
        output.innerHTML += text + "<br>";
        output.scrollTop = output.scrollHeight;
    }

    inputField.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const userInput = inputField.value.trim();
            inputField.value = '';

            if (commands[userInput]) {
                displayOutput("> " + userInput);
                displayOutput(commands[userInput]);
            } else {
                displayOutput("> " + userInput);
                displayOutput("Unknown command. Type 'help' for a list of commands.");
            }
        }
    });

    displayOutput("Welcome to The Matrix... Type 'help' for a list of commands.");
});
