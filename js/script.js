const panels = document.querySelectorAll(".panel"); //by using querySelectorAll it turns alls the panels into a node list so that we can use a forEach loop below

//function that toggles the class open to the panels
function toggleOpen() {
    this.classList.toggle("open");
};

//function that makes the words appear at the end of the transition by activating open-active class
function toggleActive(e) {
    if(e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

//listen for click events on each panel
panels.forEach(panel => panel.addEventListener("click", toggleOpen));

//listens for the end of a transition so the browser knows when to lower/lift the writing
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
