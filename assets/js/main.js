document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
      offset: 120,
      delay: 0,
      duration: 1300,
      easing: "ease",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
  });
//? What are your main objectives!! 
//! You want that!
//* Are you sure:(

  // Reinitialize AOS on page navigation or other dynamic content loads
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
          setTimeout(function() {
              AOS.refresh(); // Reinitialize AOS
          }, 500); // Adjust timeout as needed for your content loading speed
      });
  });
});
// main.js
// main.js

function SendEmail() {
  var params = {
    from_name: document.getElementById("nameInput").value,
    email_id: document.getElementById("emailInput").value,
    message: document.getElementById("messageInput").value,
  };
  emailjs
    .send("service_4i9fcgv", "template_fxhpiej", params)
    .then(function (res) {
      alert("Mail Sent Successfully! \n Thanks of contacting" );
    });
}
