//for clicks on the screen only
for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        keypress(this.innerHTML);
        animationbykey(this.innerHTML);
        
    });
}
//for keyboard press
document.addEventListener("keypress",function(event){
keypress(event.key);
animationbykey(event.key);
})


//one unifor function to detect the key pressed and to play the sound accordingly
function keypress(inputkey){

    switch (inputkey) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

//adding animation tothe pressed keys

function animationbykey(key){
     document.querySelector("." + key).classList.add("pressed");

//timing out the animation

setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");

}, 130);
}