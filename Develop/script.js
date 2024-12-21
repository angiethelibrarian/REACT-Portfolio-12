document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    function navigateToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${targetId}`) {
                link.classList.add("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", navigateToSection);
    });

    // Set default section
    window.location.hash = "#about"; // Set to About Me by default
    navigateToSection.call(navLinks[0]); // Call the navigation function to show About Me

    // Form validation
    const contactForm = document.getElementById("contactForm");
    const formNotification = document.getElementById("form-notification");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Simple validation
        let valid = true;
        let notifications = [];

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (!name.value) {
            valid = false;
            notifications.push("Name is required.");
        }
        if (!email.value) {
            valid = false;
            notifications.push("Email is required.");
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            valid = false;
            notifications.push("Email is invalid.");
        }
        if (!message.value) {
            valid = false;
            notifications.push("Message is required.");
        }

        if (!valid) {
            formNotification.innerHTML = notifications.join("<br>");
        } else {
            formNotification.innerHTML = "Form submitted successfully!";
            // Reset form
            contactForm.reset();
        }
    });
});