const plusEl = document.querySelector(".item-plus");
const minusEl = document.querySelector(".item-minus");
const plusText = document.querySelector(".plus-text");
const plusBlock = document.querySelector(".block");
const minusNone = document.querySelector(".none");


plusEl.addEventListener('click', function () {
    if (minusEl.style.display === "none") {
        minusEl.style.display = "block";
        plusText.style.color = "#2f57ef"
        minusNone.style.display = "block";
        plusBlock.style.display = "none";

    } else {
        minusEl.style.display = "none";
        plusText.style.color = "inherit"
        minusNone.style.display = "none";
        plusBlock.style.display = "block";
    }
});
