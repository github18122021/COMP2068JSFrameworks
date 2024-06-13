let path = window.location.pathname;
// console.log(window.location)
// if (path.startsWith("/projects")) {
//   path = "/projects";
// }

// for screens > md
const links = document.querySelectorAll(`#horizontal_nav a`);

links.forEach((link) => {

    if(path.startsWith(link.pathname) && (link.pathname !== "/")) {
        console.log(path.length);
        console.log(link.pathname.length);
        console.log(path, link.pathname)
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
  if (path.startsWith(mobileLink.pathname) && (mobileLink.pathname !== "/")) {
    // console.log(mobileLink.href);
    mobileLink.classList.add('active-link');
  }
});

