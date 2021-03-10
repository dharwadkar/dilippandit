var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnLoad(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("load", toggleModal);
closeButton.addEventListener("load", toggleModal);
window.addEventListener("load", windowOnLoad);