const btnNext = document.getElementById("btn-next")
const body = document.getElementById("root");
const listBtnSlide = [...document.getElementsByClassName("btn-slide-dot")];
const curEvent = "christmas";
const nextEvent = "new-year";
let idx = 0;

listBtnSlide[idx].classList.toggle("active");

btnNext.addEventListener("click", (event) => {
    event.preventDefault();
    listBtnSlide[idx].classList.toggle("active");
    idx = (idx + 1) % 2;
    listBtnSlide[idx].classList.toggle("active");
    body.classList.toggle(curEvent);
    body.classList.toggle(nextEvent);
    swap(curEvent, nextEvent)
})