AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1300, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
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
    .send("service_l7dvs3p", "template_fxhpiej", params)
    .then(function (res) {
      alert("Mail Sent! \n\n In case if you don't get my message back, Check your Spam Folder!!" );
    });
}
