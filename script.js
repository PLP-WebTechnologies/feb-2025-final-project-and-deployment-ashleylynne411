// Selecting all slide elements
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Function to update active slide
function updateSlide(newIndex) {
    slides[currentSlide].classList.remove("active");
    currentSlide = newIndex;
    slides[currentSlide].classList.add("active");
}

// Next button functionality
document.getElementById("next").addEventListener("click", () => {
    updateSlide((currentSlide + 1) % slides.length);
    alert("You clicked Next!");
});

// Previous button functionality
document.getElementById("prev").addEventListener("click", () => {
    updateSlide((currentSlide - 1 + slides.length) % slides.length);
    alert("You clicked Previous!");
});

// Form validation for the contact page
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!email.includes("@")) {
        alert("Enter a valid email!");
        event.preventDefault();
    } else if (message.trim() === "") {
        alert("Message cannot be empty!");
        event.preventDefault();
    }
});

// Scroll-to-Top Button Functionality
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
