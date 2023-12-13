const upBtn = document.querySelector(".increase")
const downBtn = document.querySelector(".decrease")
const counterEl = document.querySelector(".counter")

let counter = 0;

upBtn.addEventListener("click", () => {
    counter++;

    if (counter > 0) {
        counterEl.style.color = "green";
    } else if(counter === 0){ 
        counterEl.style.color = "white";
    }
    counterEl.textContent = counter;
});

downBtn.addEventListener("click", () => {
    counter--;

    if (counter < 0) {
        counterEl.style.color = "red";
    }else if(counter === 0){ 
        counterEl.style.color = "white";
    }
    counterEl.textContent = counter;
});