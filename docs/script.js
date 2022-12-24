var btnNext = document.getElementById("btn-next")
var body = document.getElementById("root");
btnNext.addEventListener("click", function(event) {
    event.preventDefault();
    body.classList.toggle("step-2");
})