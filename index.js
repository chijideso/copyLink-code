

const inputField = document.querySelector(".copylink-input")
const copyButton = document.querySelector(".button-copy")

inputField.addEventListener("focus", ()=> inputField.select())

copyButton.addEventListener("click",()=>{
    const text = inputField.value
    inputField.select();
    navigator.clipboard.writeText(text)
})

