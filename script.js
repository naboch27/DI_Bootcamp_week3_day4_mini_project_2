// la hauteur de la section dois être celle de l'écran de la fênetre
let section = document.querySelector('section');
section.style.height = window.innerHeight + "px";

// liste des songs

const songList = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"];

// play musique

let boxes = document.querySelectorAll('.box');
for(let i in songList) {
    boxes[i].addEventListener('click', () => {
        let audio = document.querySelector('.song');
        audio.setAttribute('src', `sounds/${songList[i]}.wav`);
        audio.play();
    });
}
