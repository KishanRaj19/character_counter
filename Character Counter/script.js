const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const charRemaining = document.getElementById("char-remaining");
const maxLength = 50;

textInput.addEventListener("input", () => {
    const length = textInput.value.length;
    charCount.textContent = length;
    charRemaining.textContent = maxLength - length;
});
