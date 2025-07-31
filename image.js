function increaseWidth() {


    let sri = document.getElementById("sizingImage");
    let currentWidth = parseInt((sri).width); 

    if (currentWidth < 300) {
        sri.style.width = (currentWidth + 5) + "px";
    } else {
        
    }
}

function decreaseWidth() {
    

    let sri = document.getElementById("sizingImage");
    let currentWidth = parseInt((sri).width);

    if (currentWidth > 100) {
        sri.style.width = (currentWidth - 5) + "px";
    } else {
        
    }
}
