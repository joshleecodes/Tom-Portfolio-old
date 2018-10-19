'use strict';

document.addEventListener("DOMContentLoaded", function(){
    var currSection = 1;
    var about1 = document.querySelector('.about-1');
    var about2 = document.querySelector('.about-2');
    //var about3 = document.querySelector('.about-3');
    var gaming1 = document.querySelector('.gaming-1');
    var gaming2 = document.querySelector('.gaming-2');
    var engineering1 = document.querySelector('.engineering-1');
    
    var page1 = document.querySelector('.page-1');
    var page2 = document.querySelector('.page-2');
    var page3 = document.querySelector('.page-3');
    
    //Page Event Listeners
    page1.addEventListener("click", displayPage1);
    page2.addEventListener("click", displayPage2);
    page3.addEventListener("click", displayPage3);
    
    //Section Event Listeners
    document.querySelector('.about').addEventListener("click", setSection.bind(this, 1, 2));
    document.querySelector('.gaming').addEventListener("click", setSection.bind(this, 2, 2));
    document.querySelector('.engineering').addEventListener("click", setSection.bind(this, 3, 1));
    document.querySelector('.contact').addEventListener("click", setSection.bind(this, 4, 0));

    //Clear old pages, update tracker and display new pages
    function setSection(section, dots) {
        clearPages();
        currSection = section;
        displayPage1(section);
        numOfPages(dots);
    }
    
    //change number of buttons for section
    function numOfPages(dots){
        if(dots === 1) {
            page1.classList.remove("hidden");
            page1.classList.add("visible");
            page2.classList.remove("visible");
            page2.classList.add("hidden");
            page3.classList.remove("visible");
            page3.classList.add("hidden");
        }
        else if(dots === 2) {
            page1.classList.remove("hidden");
            page1.classList.add("visible");
            page2.classList.remove("hidden");
            page2.classList.add("visible");
            page3.classList.remove("visible");
            page3.classList.add("hidden");
        }
        else if(dots === 1) {
            page1.classList.remove("hidden");
            page1.classList.add("visible");
            page2.classList.remove("hidden");
            page2.classList.add("visible");
            page3.classList.remove("hidden");
            page3.classList.add("visible");
        }
    }
    
    //oranage underline current section 
    
    
    function clearPages() {
        //clear about
        about1.classList.remove("visible");
        about1.classList.add("hidden");
        about2.classList.remove("visible");
        about2.classList.add("hidden");
        
        //clear gaming
        gaming1.classList.remove("visible");
        gaming1.classList.add("hidden");
        gaming2.classList.remove("visible");
        gaming2.classList.add("hidden");
        
        //clear engineering
        engineering1.classList.remove("visible");
        engineering1.classList.add("hidden");
    }
    
    function displayPage1() {
        if(currSection === 1){
            about1.classList.remove("hidden");
            about1.classList.add("visible");
            about2.classList.remove("visible");
            about2.classList.add("hidden");
            //about3.classList.remove("visible");
            //about3.classList.add("hidden");
        }
        else if(currSection === 2){
            gaming1.classList.remove("hidden");
            gaming1.classList.add("visible");
            gaming2.classList.remove("visible");
            gaming2.classList.add("hidden");
            //gaming3.classList.remove("visible");
            //gaming3.classList.add("hidden");
        }
        else if(currSection === 3) {
            engineering1.classList.remove("hidden");
            engineering1.classList.add("visible");
            //engineer2.classList.remove("visible");
            //engineer2.classList.add("hidden");
            //engineer3.classList.remove("visible");
            //engineer3.classList.add("hidden");
        }

    }

    function displayPage2() {
        if(currSection === 1) {
            about1.classList.remove("visible");
            about1.classList.add("hidden");
            about2.classList.remove("hidden");
            about2.classList.add("visible");
            //about3.classList.remove("visible");
            //about3.classList.add("hidden");
        }
        else if(currSection === 2) {
            gaming1.classList.remove("visible");
            gaming1.classList.add("hidden");
            gaming2.classList.remove("hidden");
            gaming2.classList.add("visible");
            //gaming3.classList.remove("visible");
            //gaming3.classList.add("hidden");
        } 
        else if(currSection === 3) {
            engineering1.classList.remove("visible");
            engineering1.classList.add("hidden");
            //engineer2.classList.remove("hidden");
            //engineer2.classList.add("visible");
            //engineer3.classList.remove("visible");
            //engineer3.classList.add("hidden");
        }

    }

    function displayPage3(section) {
        if(section === 1) {
            about1.classList.remove("visible");
            about1.classList.add("hidden");
            about2.classList.remove("visible");
            about2.classList.add("hidden");
            //about3.classList.remove("hidden");
            //about3.classList.add("visible");
        }
        else if(section === 2) {
            gaming1.classList.remove("visible");
            gaming1.classList.add("hidden");
            gaming2.classList.remove("visible");
            gaming2.classList.add("hidden");
            //gaming3.classList.remove("hidden");
            //gaming3.classList.add("visible");
        }
        else if(section === 3) {
            engineering1.classList.remove("visible");
            engineering1.classList.add("hidden");
            //engineer2.classList.remove("visible");
            //engineer2.classList.add("hidden");
            //engineer3.classList.remove("hidden");
            //engineer3.classList.add("visible");
        }
    }
});