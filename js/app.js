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



//const section3 = document.querySelector('#section3');
let viewWidth = document.documentElement.clientWidth;
let viewHeight = document.documentElement.clientHeight;

//console.log(section3.getBoundingClientRect());
//console.log(viewHeight, viewWidth);




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//return false if not completely in viewport, true if it is
var isInView = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


//console.log(isInView(section3));


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



//create a list of all sections, query for all divs then get the parent 
let navBarMenu = document.querySelector('.navbar__menu');
let count = 0;
// const sectionDiv = document.querySelector('.landing__container');
// //console.log(sectionDiv);

//this get all the 'divs' and then the length tells me how many sections there are
const divList = document.querySelectorAll('.landing__container');
let divCount = divList.length;

const sectionList = document.querySelectorAll('section');
let sectionListArray = Array.from(sectionList);


//console.log(divCount);


// build the nav
// const newNavDIV = document.createElement('LI');
// const newNavDIV2 = document.createElement('LI');
//     document.body.appendChild(newNavDIV);
//     newNavDIV.textContent='Section list here ' + divCount;
//     document.body.appendChild(newNavDIV2);
//     newNavDIV2.textContent='Section list here ' + divCount;
// console.log('here');
// divList.forEach( 
// function(currentValue, currentIndex, listObj) { 
//        console.log(listObj.values(currentIndex));
//        const newNavDIV = document.createElement('LI'); 
//        navBarList.appendChild(newNavDIV);
//        //set ID = to section #-----need to do------
//        newNavDIV.textContent='Section list here ' + (currentIndex + 1);
//        //console.log(currentIndex);
//     }
    
//    );   



for (const sectionNum of sectionListArray) {
        
       //console.log(sectionNum);
    
        //section3.style.backgroundColor = 'yellow'
        const newNavDIV = document.createElement('A'); 
        navBarMenu.appendChild(newNavDIV);
       //set ID = to section #-----need to do------
        newNavDIV.setAttribute("href",'#' + sectionNum.id);
        newNavDIV.textContent=sectionNum.id;
        
    
       
    
  };

console.log('I got this far');


//console.log(sectionListArray); 

// for(var i = 0; i < divList.length; i++) {
// 	if(divList[i].getAttribute('class').includes('state-expanded')) {
//     divList[i].querySelector('span').style.background = 'blue';
//   	console.log(divs[i].querySelector('span').innerHTML);
//   }
// }
//

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

let scrollPosition = 0;
let ticking = false;

function outputScrollPosition(scrollPosition){
    //console.log(scrollPosition);
}

//prooving that the nodeList array can be used for the window attributes
let testDiv = sectionListArray[0];
console.log('just before event listener')
window.addEventListener('scroll', function(e) {
    scrollPosition = window.scrollY;
    console.log('I am here!!!!!!!!!!!!!!!!!!');
    for (const sectionNum of sectionListArray) {
        
        //console.log(sectionNum);
        if (isInView(sectionNum)) {
            //sectionNum.style.backgroundColor = 'yellow'
            
            console.log(sectionNum.id);
            //use sectionNum to find element with that ID and 
            document.getElementById(sectionNum.id).className="your-active-class";
            // let navSection = document.querySelectorAll("[href='#section2']");
            // navSection.style.backgroundColor="red";
            console.log('in view');
        } else {
            document.getElementById(sectionNum.id).className=null;
        }
      }
    
  
    
  });
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


