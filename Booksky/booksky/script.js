//selecting popupbox , popupoverlay , button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("Click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})