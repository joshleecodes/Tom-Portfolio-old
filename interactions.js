'use strict';

document.addEventListener("DOMContentLoaded", function(){
    var currSection = 0;
    
    //Section vars
    var titleSection = document.querySelector('.title');
    var aboutSection = document.querySelector('.about');
    var engineerSection = document.querySelector('.engineering');
    var gamingSection = document.querySelector('.gaming');
    var mediaSection = document.querySelector('.media');
    
    
    //Page vars
    var page1 = document.querySelector('.page-1');
    var page2 = document.querySelector('.page-2');
    var page3 = document.querySelector('.page-3');
    
    //content vars
    var title1 = document.querySelector('.entry-img');
    var about1 = document.querySelector('.about-1');
    var about2 = document.querySelector('.about-2');
    var gaming1 = document.querySelector('.gaming-1');
    var gaming2 = document.querySelector('.gaming-2');
    var engineering1 = document.querySelector('.engineering-1');
    
    
    //Page Event Listeners
    page1.addEventListener("click", displayPage1);
    page2.addEventListener("click", displayPage2);
    page3.addEventListener("click", displayPage3);
    
    //Section Event Listeners
    titleSection.addEventListener("click", setSection.bind(this, 0, 0));
    aboutSection.addEventListener("click", setSection.bind(this, 1, 2));
    engineerSection.addEventListener("click", setSection.bind(this, 2, 2));
    gamingSection.addEventListener("click", setSection.bind(this, 3, 1));
    mediaSection.addEventListener("click", setSection.bind(this, 4, 0));

    //Clear old pages, update tracker and display new pages
    function setSection(section, dots) {
        clearPages();
        activeSection(section);
        currSection = section;
        displayPage1(section);
        numOfPages(dots);
    }
    
    //Remove style from previous section and set to active section
    function activeSection(section){ 
        if(currSection !== section){ //check selected section is not already active
            //remove current underline
            if(currSection === 0){
                titleSection.classList.remove("selected"); 
            }
            if(currSection === 1){
                aboutSection.classList.remove("selected");
            }
            if(currSection === 2){
                engineerSection.classList.remove("selected");
            }
            if(currSection === 3){
                gamingSection.classList.remove("selected");
            }
            if(currSection === 4){
                mediaSection.classList.remove("selected");
            }
            
            //add new underline
            if(section === 1){
                aboutSection.classList.add("selected");
            }
            if(section === 2){
                engineerSection.classList.add("selected");
            }
            if(section === 3){
                gamingSection.classList.add("selected");
            }
            if(section === 4){
                mediaSection.classList.add("selected");
            }
        }
    }
    
    //change number of buttons for section
    function numOfPages(dots){
        if(dots === 0){
            page1.classList.remove("page-visible");
            page1.classList.add("page-hidden");
            page2.classList.remove("page-visible");
            page2.classList.add("page-hidden");
            page3.classList.remove("page-visible");
            page3.classList.add("page-hidden");
        }
        
        if(dots === 1){
            page1.classList.remove("page-hidden");
            page1.classList.add("page-visible");
            page2.classList.remove("page-visible");
            page2.classList.add("page-hidden");
            page3.classList.remove("page-visible");
            page3.classList.add("page-hidden");
        }
        else if(dots === 2){
            page1.classList.remove("page-hidden");
            page1.classList.add("page-visible");
            page2.classList.remove("page-hidden");
            page2.classList.add("page-visible");
            page3.classList.remove("page-visible");
            page3.classList.add("page-hidden");
        }
        else if(dots === 3){
            page1.classList.remove("page-hidden");
            page1.classList.add("page-visible");
            page2.classList.remove("page-hidden");
            page2.classList.add("page-visible");
            page3.classList.remove("page-hidden");
            page3.classList.add("page-visible");
        }
    }
    
    
    function clearPages(){
        
        //clear landing page
        title1.classList.remove("visible");
        title1.classList.add("hidden");
        
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
        
        //reset page dots
        page1.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page1.classList.remove("active");
        page2.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page2.classList.remove("active");
        page3.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page3.classList.remove("active");
    }
    
    function displayPage1() {
        if(currSection === 0){
            title1.classList.remove("hidden");
            title1.classList.add("visible");
        }
        if(currSection === 1){
            about1.classList.remove("hidden");
            about1.classList.add("visible");
            about2.classList.remove("visible");
            about2.classList.add("hidden");
        }
        else if(currSection === 2){
            engineering1.classList.remove("hidden");
            engineering1.classList.add("visible");
        }
        else if(currSection === 3) {
            gaming1.classList.remove("hidden");
            gaming1.classList.add("visible");
            gaming2.classList.remove("visible");
            gaming2.classList.add("hidden");
        }
        page1.innerHTML = '<img src="_assets/img/pageIcons/pages-orange.png">';
        page1.classList.add("active");
        page2.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page2.classList.remove("active");
        page3.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page3.classList.remove("active");
    }

    function displayPage2() {
        if(currSection === 1) {
            about1.classList.remove("visible");
            about1.classList.add("hidden");
            about2.classList.remove("hidden");
            about2.classList.add("visible");
        }
        else if(currSection === 2) {
            engineering1.classList.remove("visible");
            engineering1.classList.add("hidden");
        } 
        else if(currSection === 3) {
            gaming1.classList.remove("visible");
            gaming1.classList.add("hidden");
            gaming2.classList.remove("hidden");
            gaming2.classList.add("visible");
        }
        page1.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page1.classList.remove("active");
        page2.innerHTML = '<img src="_assets/img/pageIcons/pages-orange.png">';
        page2.classList.add("active");
        page3.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page3.classList.remove("active");
    }

    function displayPage3(section) {
        if(section === 1) {
            about1.classList.remove("visible");
            about1.classList.add("hidden");
            about2.classList.remove("visible");
            about2.classList.add("hidden");
        }
        else if(section === 2) {
            engineering1.classList.remove("visible");
            engineering1.classList.add("hidden");
        }
        else if(section === 3) {
            gaming1.classList.remove("visible");
            gaming1.classList.add("hidden");
            gaming2.classList.remove("visible");
            gaming2.classList.add("hidden");
        }
        page1.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page1.classList.remove("active");
        page2.innerHTML = '<img src="_assets/img/pageIcons/pages.svg">';
        page2.classList.remove("active");
        page3.innerHTML = '<img src="_assets/img/pageIcons/pages-orange.png">';
        page1.classList.add("active");
    }
});