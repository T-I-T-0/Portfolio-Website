// Initializes the slideIndex to track the current slide
let slideIndex = 1;
showSlides(slideIndex); // Displays the first slide when the page loads

// Function to change slides when the "Next" or "Previous" buttons are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide when a dot is clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to display the slides
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides"); // Collects all slides
    const dots = document.getElementsByClassName("dot"); // Collects all dots

    if (slides.length === 0) return; // Exits if there are no slides

    // Wraps around the slideIndex if it exceeds the number of slides
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hides all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Removes the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Displays the current slide and activates the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Opens the contact form with a fade-in effect
function openForm() {
    const form = document.getElementById("myForm");
    form.style.display = "block";
    form.classList.remove("fade-out");
    form.classList.add("fade-in");
}

// Closes the contact form with a fade-out effect
function closeForm() {
    const form = document.getElementById("myForm");
    form.classList.remove("fade-in");
    form.classList.add("fade-out");
    setTimeout(() => {
        form.style.display = "none"; // Hides the form after the animation ends
    }, 500); // Duration of the fade-out animation
}

// Closes the contact form if the user clicks outside the form
document.addEventListener("click", function(event) {
    const isCancel = event.target.matches(".cancel"); // Checks if the "cancel" button is clicked
    const isOutsideForm = !event.target.closest(".form-popup"); // Checks if the click is outside the form
    const isOutsideButton = !event.target.closest(".Pop_Up_Button"); // Checks if the click is outside the "Contact" button
    const isOutsideContact = !event.target.closest(".contact"); // Checks if the click is outside any contact-related elements

    // Closes the form if the click meets the conditions
    if (isCancel || (isOutsideForm && isOutsideButton && isOutsideContact)) {
        closeForm();
    }
}, false);