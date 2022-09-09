/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
 let navBar = document.querySelector('.navbar__menu');
 let navList = document.querySelector('#navbar__list');
 
 
 //  * - creates a list item
 
 function createListElement(num) {
     let listItem = document.createElement('li');
     let anchor = document.createElement('a');
     // * - appends an anchor child item   
     listItem.append(anchor);
     // * - "num" is the variable that we pass in   
     anchor.innerHTML = `section${num}`
     anchor.dataset.section = `#section${num}`
     anchor.href = `#section${num}`
     anchor.classList.add('menu__link');
 
     anchor.addEventListener('click', e => {
         e.preventDefault()
         // remove className from classList
         // conditional
         // if not clicked then active does not work
         navList.querySelectorAll('a').forEach(a => {
             a.classList.remove('active')
         })
         // Add class 'active' to section when near top of viewport
         anchor.classList.add('active')
         let section = document.querySelector(anchor.dataset.section)
         section.scrollIntoView({
             behavior: "smooth"
         })
     })
     // * - returns the created list item
     return listItem
 }
 let dynamic = document.querySelectorAll('section').length
 
 for (let i = 1; i <= dynamic; i++) {
     let item = createListElement(i);
     navList.appendChild(item);
 }
 /**
  * End Main Functions
  * Begin Events
  * 
  */
 
 // Build menu 
 // Scroll to anchor ID using scrollTO event
 // Scroll to section on link clck
 function makeActive() {
     for (const section of document.querySelectorAll("section")) {
         const box = section.getBoundingClientRect();
         //Find a value that works best, but 150 seems to be a good start.
         if (box.top <= 150 && box.bottom >= 150) {
             //apply active state on current section and corresponding Nav link
             const navLink = document.querySelector(`[href="#${section.id}"]`)
             navLink.classList.add('active')
         } else {
             //Remove active state from other section and corresponding Nav link
             const navLink = document.querySelector(`[href="#${section.id}"]`)
             navLink.classList.remove('active')
         }
     }
 }
 
 // TODO:Make sections active
 // Set sections as active
 document.addEventListener("scroll", makeActive);
 //making form data
 const form = document.querySelector('form')
 form.addEventListener('submit', function(event) {
     event.preventDefault();
     //notify seccessful submission
     alert('thank you we will contact you shortly');
 });