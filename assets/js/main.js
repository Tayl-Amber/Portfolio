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

/* const form = document.querySelector('form');
const name = document.getElementById("name");
const Email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");





function send_email(){

  const bodyMessage = `Name: ${name.value} <br> Email: ${Email.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "taylamber352@gmail.com",
    Password : "115254242A2D623CC99A6F89A5843101DF55",
    To : 'taylamber352@gmail.com',
    From : "taylamber352@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => alert(message)
);
}

from.addEventListener('submit', (e) => {
  e.preventDefault();
  send_email();
}); */

















