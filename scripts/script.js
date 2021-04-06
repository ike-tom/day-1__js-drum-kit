'use strict'
const keys = document.querySelectorAll(".key")
const audios = document.querySelectorAll("audio")


window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a": keys[0].classList.add("playing")
            audios[0].play()
            audios[0].currentTime = 0
            break;
        case "s": keys[1].classList.add("playing")
            audios[1].play()
            audios[1].currentTime = 0
            break;
        case "d": keys[2].classList.add("playing")
            audios[2].play()
            audios[2].currentTime = 0
            break;
        case "f": keys[3].classList.add("playing")
            audios[3].play()
            audios[3].currentTime = 0
            break;
        case "g": keys[4].classList.add("playing")
            audios[4].play()
            audios[4].currentTime = 0
            break;
        case "h": keys[5].classList.add("playing")
            audios[5].play()
            audios[5].currentTime = 0
            break;
        case "j": keys[6].classList.add("playing")
            audios[6].play()
            audios[6].currentTime = 0
            break;
        case "k": keys[7].classList.add("playing")
            audios[7].play()
            audios[7].currentTime = 0
            break;
        case "l": keys[8].classList.add("playing")
            audios[8].play()
            audios[8].currentTime = 0
            break;
        default: return
    }
})

window.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "a": keys[0].classList.remove("playing")
            break;
        case "s": keys[1].classList.remove("playing")
            break;
        case "d": keys[2].classList.remove("playing")
            break;
        case "f": keys[3].classList.remove("playing")
            break;
        case "g": keys[4].classList.remove("playing")
            break;
        case "h": keys[5].classList.remove("playing")
            break;
        case "j": keys[6].classList.remove("playing")
            break;
        case "k": keys[7].classList.remove("playing")
            break;
        case "l": keys[8].classList.remove("playing")
            break;
        default: return
    }
})



