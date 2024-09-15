const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Frontend developer", "Programmer", "UI/UX designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

// Get the hamburger icon
const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menu_list");

function showSection(sectionId) {
  if (menuList.classList.contains("show")) {
    toggleMenu();
  }
  const sections = ["home", "about", "skills", "projects", "contact"];
  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (section === sectionId) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
}

// Initially hide all sections except "home"
showSection("home");

// Event listeners for navigation
document
  .getElementById("nav-home")
  .addEventListener("click", () => showSection("home"));
document
  .getElementById("nav-about")
  .addEventListener("click", () => showSection("about"));
document
  .getElementById("nav-skills")
  .addEventListener("click", () => showSection("skills"));
document
  .getElementById("nav-projects")
  .addEventListener("click", () => showSection("projects"));
document
  .getElementById("nav-contact")
  .addEventListener("click", () => showSection("contact"));

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function toggleMenu() {
  menuList.classList.toggle("show");
  if (menuList.classList.contains("show")) {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slides = document.querySelectorAll(".profile-skills > div");

  let currentSlide = 0;

  // Function to show the current slide and hide the rest
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Function to check if the screen size is less than 680 pixels
  function isSmallScreen() {
    return window.innerWidth <= 680;
  }
  console.log(isSmallScreen());
  showSlide(currentSlide);

  // Event listener for the previous button
  prevBtn.addEventListener("click", function () {
    if (isSmallScreen()) {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  });

  // Event listener for the next button
  nextBtn.addEventListener("click", function () {
    if (isSmallScreen()) {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  });
  function handleScreenSize() {
    if (!isSmallScreen()) {
      // If the screen size becomes larger than 680px, reset currentSlide and show all slides
      currentSlide = 0;
      slides.forEach((slide) => (slide.style.display = "block"));
    } else {
      // If the screen size becomes smaller than 680px, show only the current slide
      showSlide(currentSlide);
    }
  }
  // Event listener to reevaluate carousel on window resize
  window.addEventListener("load", handleScreenSize);
  window.addEventListener("resize", handleScreenSize);
});

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  let templateParams = {
    name: name,
    email: email,
    message: message
  };

  // Send the email using EmailJS
  emailjs.send('service_qe0luzn', 'template_49yixpz', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Your message has been sent successfully!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('There was an error sending your message. Please try again later.');
    });
}