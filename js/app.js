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

/**
 * Define Global Variables
 * 
 */
let count = 0;
let sections;
let array = [];
let section_array = [];
let active = 0;
let timer;
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
goup = () => {
    if (window.innerHeight < pageYOffset) {
        document.querySelector("#UpButton").style.display = "block";
    } else {
        document.querySelector("#UpButton").style.display = "none";
    }
}
up = () => {
    window.scrollTo(0, 0);
}

hideNav = () => {
    timer = setTimeout(() => {
        document.querySelector(".page__header").style.display = "none";
    }, 3000);
}

showNav = () => {
        document.querySelector(".page__header").style.display = "block";
    }
    /**
     * End Helper Functions
     * Begin Main Functions
     * 
     */

// build the nav
sections = document.querySelectorAll("section");
header = document.querySelector("#navbar__list");
sections.forEach(element => {
    let node = document.createElement("li");
    node.id = "element" + element.id;
    // Scroll to anchor ID using scrollTO event
    let node2 = document.createElement("a");
    count++;
    node2.style = "color: white;text-decoration-line: none;"
    node2.href = "#" + element.id;
    let textnode = document.createTextNode(element.querySelector("h2").textContent);
    section_array.push(element.id);
    array.push(element.offsetTop);
    node2.appendChild(textnode);
    node.appendChild(node2);
    header.appendChild(node);
});
array.sort((a, b) => a - b);
console.log(array);

// Add class 'active' to section when near top of viewport
onscroll = () => {
    clearTimeout(timer);
    showNav();
    let min = 10000000;
    let index = 0;
    for (i = 0; i < array.length; i++) {
        temp = Math.abs(pageYOffset - array[i]);
        if (temp < min) {
            min = temp;
            index = i;
        }
    }
    // Set sections as active
    document.querySelector("#" + section_array[active]).classList.remove("your-active-class");
    document.querySelector("#" + section_array[index]).classList.add("your-active-class");
    document.querySelector("#element" + section_array[active]).classList.remove("active");
    document.querySelector("#element" + section_array[index]).classList.add("active");
    active = index;
    goup();
    hideNav();
}


/**
 * End Main Functions
 * Begin Events
 * 
 */
document.addEventListener("scroll", onscroll);
// Build menu 

// Scroll to section on link click