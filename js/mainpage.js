
/*This is for nav*/
var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}


/*For mouseover captions*/
function displayText(){
    console.log("mouse");
    document.getElementById("email").value="Email";
}

