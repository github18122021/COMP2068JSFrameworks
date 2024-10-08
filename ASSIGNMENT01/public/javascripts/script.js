let path = window.location.pathname;
// console.log(window.location)
// if (path.startsWith("/projects")) {
//   path = "/projects";
// }

// for screens > md
const links = document.querySelectorAll(`#horizontal_nav a`);

links.forEach((link) => {

    if(path === link.pathname){
        link.classList.add('active-link');
    } else if (path.startsWith(link.pathname) && (link.pathname !== "/")) {
        link.classList.add('active-link');
    }
})


// for screens < md
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('#mobile-menu a');

// toggling menu when mobileMenu bar icon is clicked.
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

// adding "active-link" class based on the current active route 

mobileLinks.forEach((mobileLink) => {
  
  if(path === mobileLink.pathname){
    mobileLink.classList.add('active-link');
  } else if (path.startsWith(mobileLink.pathname) && (mobileLink.pathname !== "/")) {
    mobileLink.classList.add('active-link');
  }
});

// submission of form in contact section

let contactForm = document.getElementById("contact_form");

contactForm.addEventListener("submit", postData);

function postData(e) {
    // preventing default behavior
    e.preventDefault();
    
    // future version: sending written message to myself [data backend processing]

    // current version
    alert("Message has been sent successfully!");
    contactForm.reset();
}


