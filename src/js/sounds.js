import { findEl } from './utils';
const wrapper = findEl('.wrapper');

// fix playback bug in safari browser
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();


import urlSounds from '../sounds/bclick.wav';
const buttonSound = new Audio(urlSounds);

export function initSounds() {
    wrapper.addEventListener('click', playButtonSound, true);
}

function playButtonSound({ target: { classList } }) {
    if (classList.contains("btn") && !classList.contains('disabled')) {
        buttonSound.pause();
        buttonSound.currentTime = 0;
        buttonSound.play();  
    }
}