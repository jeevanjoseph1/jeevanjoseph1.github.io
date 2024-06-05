'use strict';

/**
 * Function to toggle the "active" class of an element.
 * @param {HTMLElement} elem - The element to toggle.
 */
const elemToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

/**
 * Navbar toggle functionality.
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * Close navbar when clicking on any navbar link.
 */
for (let i = 0; i < navbarLinks.length; i++) { 
  navElemArr.push(navbarLinks[i]); 
}

/**
 * Add event listeners to toggle navbar when clicking on any element in navElemArr.
 */
for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * Header active state on scroll.
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active") : header.classList.remove("active");
}); 

/**
 * Event listener to redirect to property.html when clicking on the "Explore Properties" button.
 */
document.getElementById("explore-properties-btn").addEventListener("click", function() {
  window.location.href = "property.html";
});
