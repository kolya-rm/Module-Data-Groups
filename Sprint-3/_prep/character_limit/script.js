const textArea = document.querySelector("#comment-input");
const characterLimitInfo = document.querySelector("#character-limit-info")
const characterLimit = textArea.maxLength;


function updateCharacterLimitInfo() {
  characterLimitInfo.innerText = `You have ${characterLimit - textArea.value.length} characters remaining`;
}

function checkCharacterLimitExcess() {
  if (textArea.value.length > characterLimit) {
    textArea.value = textArea.value.substring(0, characterLimit);
  }
}

function onWindowLoadFinish() {
  updateCharacterLimitInfo();
}

function onTextAreaInput() {
  updateCharacterLimitInfo();
}

window.addEventListener("load", onWindowLoadFinish);
textArea.addEventListener("input", onTextAreaInput);