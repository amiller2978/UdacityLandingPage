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

//Variables to hold the view height and width
let viewWidth = document.documentElement.clientWidth;
let viewHeight = document.documentElement.clientHeight;


//helper function to test if the element is in the view
var isInView = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


//variables to facilitate accessing the navbar and section elements
let navBarMenu = document.querySelector('.navbar__menu');
let count = 0;

const divList = document.querySelectorAll('.landing__container');
let divCount = divList.length;

const sectionList = document.querySelectorAll('section');
let sectionListArray = Array.from(sectionList);


//construct the navbar based on the # of sections
for (const sectionNum of sectionListArray) {
        const newNavDIV = document.createElement('A'); 
        navBarMenu.appendChild(newNavDIV);
        newNavDIV.setAttribute("href",'#' + sectionNum.id);
        newNavDIV.textContent=sectionNum.id;   
  };



let scrollPosition = 0;

//event listener that will set the active class based on what is in view
window.addEventListener('scroll', function(e) {
    scrollPosition = window.scrollY;
   
    for (const sectionNum of sectionListArray) {
        if (isInView(sectionNum)) {
            document.getElementById(sectionNum.id).className="your-active-class";
            let navSection = document.querySelectorAll("[href='#"+ sectionNum.id + "']");
            navSection.item(0).style.backgroundColor="lightblue";
         
        } else {
            document.getElementById(sectionNum.id).className=null;
            let navSection = document.querySelectorAll("[href='#"+ sectionNum.id + "']");
            navSection.item(0).style.backgroundColor="white";

        }
      }
    
  
    
  });
