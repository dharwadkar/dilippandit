var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

$(document).ready(toggleModal);

function toggleModal() {
    modal.classList.toggle("show-modal");
};

function windowOnLoad(event) {
    if (event.target === modal) {
        $(document).ready(toggleModal());
    }
};

function closeButton(event) {
    if (event.target !== modal) {
        $(document).ready(toggleModal().hide());
    }
};

// trigger.addEventListener("load", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("load", windowOnLoad);