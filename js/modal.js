var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

$(document).ready(toggleModal);

function toggleModal() {
    if (localStorage.getItem('popState') != "shown") {
        $(".modal").delay(2000).fadeIn();
        // modal.classList.toggle("show-modal");
        localStorage.setItem('popState', 'shown')
    }

};

function windowOnLoad(event) {
    if (event.target === modal) {
        $(document).ready(toggleModal());
    }
};

function closeModal(event) {
    if (event.target === modal) {
        document.querySelector(".modal").style.display = "none"
    }
};

// trigger.addEventListener("load", toggleModal);
document.addEventListener("click", closeModal);
document.addEventListener("load", windowOnLoad);