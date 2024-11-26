const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');

const sections = document.querySelectorAll('.section');



const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');



// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => { 
        // Remove active class from the current active navigation item
        document.querySelector('.nav-list li.active')?.classList.remove('active');
        nav.classList.add('active');

        // Rotate the cube
        cube.style.transform = `rotateY(${idx * -90}deg)`;

        // Remove active class from current active section
        document.querySelector('.section.active')?.classList.remove('active');
        sections[idx].classList.add('active');

        // Specifically add 'active' to the contact section after rotation
        if (idx === 4) {  // Assuming 'contact' is the 4th section (index 3)
            const contactSection = document.querySelector('.section.contact');
            contactSection.classList.add('active');
        }

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1);
        arrSecs.forEach(arrSec => { 
            if (arrSec.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });
        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact');
        }
    });
});

// resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => { 
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});


// portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => { 
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});



// visibility for contact section when reloading (cube reloading animation)
setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);



//

// Ensure only numeric input for phone number field
document.getElementById("phone").addEventListener("input", function (e) {
    // Remove non-numeric characters dynamically
    this.value = this.value.replace(/\D/g, "");

    // Limit to 10 characters
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Name Validation (Ensure only alphabets and spaces)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("⚠️ Full Name must contain only alphabets and spaces.");
        return;
    }

    // Phone Number Validation (Ensure exactly 10 digits)
    if (phone.length !== 10) {
        alert("⚠️ Phone Number must be exactly 10 digits.");
        return;
    }

    // If all validations pass, show success message
    alert("✅ Form submitted successfully! 😊");

    // Clear the form fields
    document.querySelector(".contact-form").reset();
});


//

document.addEventListener("DOMContentLoaded", () => {
    const tabItems = document.querySelectorAll(".tab-item");
  
    // Loop through all tab-items and apply hover effect
    tabItems.forEach((tabItem) => {
      tabItem.addEventListener("mouseover", () => {
        tabItem.classList.add("active-glow"); // Activate gradient glow
      });
  
      tabItem.addEventListener("mouseout", () => {
        tabItem.classList.remove("active-glow"); // Deactivate glow
      });
    });
  });
  