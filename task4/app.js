const textEl = document.getElementById("text");
const countEl = document.querySelector(".count");

textEl.addEventListener("input", () => {
    if(textEl.value.length >= 10){
        textEl.style.borderColor = "red";
        countEl.style.color = "red";
    }else if(textEl.value.length < 10){
        textEl.style.borderColor = "inherit";
        countEl.style.color = "inherit";
    }
    let length = textEl.value.length;
    countEl.textContent = length;
});

