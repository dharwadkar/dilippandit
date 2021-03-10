var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

$(document).ready(toggleModal);

function toggleModal() {
    modal.classList.toggle("show-modal");
};

function windowOnLoad(event) {
    if (event.target === modal) {
        $(document).ready(toggleModal());
    }
};

function closeModal(event) {
    if (event.target !== modal) {
        $(document).ready(toggleModal.hide());
    }
};

// trigger.addEventListener("load", toggleModal);
document.addEventListener("click", closeModal("click"));
window.addEventListener("load", windowOnLoad);