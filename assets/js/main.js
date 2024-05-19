AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1300, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// main.js
// main.js
/* 
document.addEventListener("DOMContentLoaded", function() {
  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var subject = document.getElementById("subjectInput").value;
    var message = document.getElementById("messageInput").value;

    // Compose mailto link with form data
    var mailtoLink = "mailto:taylamber352@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message);

    // Open default email client
    window.location.href = mailtoLink;
  }

  // Add event listener to the form
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmission);
  }
}); */
 











