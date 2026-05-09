// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// CONTACT FORM
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();
});
