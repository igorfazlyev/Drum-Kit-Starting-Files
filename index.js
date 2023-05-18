const drums = {
    'w':{image:'./images/tom1.png', sound:'./sounds/tom-1.mp3'},
    'a':{image:'./images/tom2.png', sound:'./sounds/tom-2.mp3'},
    's':{image:'./images/tom3.png', sound:'./sounds/tom-3.mp3'},
    'd':{image:'./images/tom4.png', sound:'./sounds/tom-4.mp3'},
    'j':{image:'./images/crash.png', sound:'./sounds/crash.mp3'},
    'k':{image:'./images/kick.png', sound:'./sounds/kick-bass.mp3'},
    'l':{image:'./images/snare.png', sound:'./sounds/snare.mp3'},
}
const buttons = document.querySelectorAll(".set button");
for (let button of buttons){
    let letter = button.innerText.trim().toLowerCase();
    if  (letter in drums){
        let drum = drums[letter];
        button.style.backgroundImage = `url("${drum.image}")`;

        button.addEventListener("click", function(){
            playDrum(drum);
            //this.style.color = "white";
        })
    };
}

document.addEventListener("keydown", function(event){
    //console.log(event);
    const pressedKey = event.key.toLowerCase();
    if (pressedKey in drums) {
        playDrum(drums[pressedKey]);
        drumSound.play();
    }
})

function playDrum(drum){
    const drumSound = new Audio(drum.sound);
    drumSound.play();
}