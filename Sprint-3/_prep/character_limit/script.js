const textArea = document.querySelector("#comment-input");
const characterLimitInfo = document.querySelector("#character-limit-info")
const characterLimit = textArea.maxLength;

console.log(characterLimit)

function updateCharacterLimitInfo() {
  characterLimitInfo.innerText = `You have ${characterLimit - textArea.value.length} characters remaining`;
}

textArea.addEventListener("input", updateCharacterLimitInfo);