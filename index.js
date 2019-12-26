for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        
        var typedron = this.innerHTML;
        makesound(typedron);
        pressedbuton(typedron);
    });
document.addEventListener("keypress",function(event){
    makesound(event.key);
    pressedbuton(event.key);
})
}

function makesound(key){
    var audio = new Audio();
        switch(key){
            case "w":
                audio = new Audio("sounds/tom-1.mp3");
                break;
            case "a":
                audio = new Audio("sounds/tom-2.mp3");
                break;
            case "s":
                audio = new Audio("sounds/tom-3.mp3");
                break;
            case "d":
                audio = new Audio("sounds/tom-4.mp3");
                break;
            case "j":
                audio = new Audio("sounds/snare.mp3");
                break;
            case "k":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "l":
                audio = new Audio("sounds/kick-bass.mp3");
                break;     
        }
        //var audio = new Audio("sounds/crash.mp3");
        audio.play();
}

function pressedbuton(key){
    var button = document.querySelector("." + key)
    button.classList.add("pressed");
    setTimeout (function(){
        button.classList.remove("pressed");
    },100);
}