// ========================================
// MOBILE NAVIGATION
// ========================================

const menuBtn =
    document.querySelector("#menuBtn");

const navMenu =
    document.querySelector("#navMenu");


menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});
menuBtn,addEventListener("click",() =>{
    navMenu.classList.toggle("show");
    if(navMenu.classList.contains("show")) {
        menuBtn.textContent ="✕";
    } else {
        menuBtn.textContent ="☰";
    }
});


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ========================================

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.querySelector("#contactForm");


const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const messageInput =
    document.querySelector("#message");


const nameError =
    document.querySelector("#nameError");

const emailError =
    document.querySelector("#emailError");

const messageError =
    document.querySelector("#messageError");


const successMessage =
    document.querySelector("#successMessage");


// ========================================
// FORM SUBMISSION
// ========================================

contactForm.addEventListener(
    "submit",
    function(event) {

        // Stop page from refreshing
        event.preventDefault();


        // Clear previous messages

        nameError.textContent = "";

        emailError.textContent = "";

        messageError.textContent = "";

        successMessage.textContent = "";


        // Get values

        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();

        const message =
            messageInput.value.trim();


        let isValid = true;


        // ========================================
        // NAME VALIDATION
        // ========================================

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        }


        // ========================================
        // EMAIL VALIDATION
        // ========================================

        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        } else if (!email.includes("@")) {

            emailError.textContent =
                "Please enter a valid email.";

            isValid = false;

        }


        // ========================================
        // MESSAGE VALIDATION
        // ========================================

        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            isValid = false;

        } else if (message.length < 10) {

            messageError.textContent =
                "Message must be at least 10 characters.";

            isValid = false;

        }


        // ========================================
        // SUCCESS
        // ========================================

        if (isValid) {

            successMessage.textContent =
                "Thank you! Your message has been received.";

            contactForm.reset();

        }

    }
);