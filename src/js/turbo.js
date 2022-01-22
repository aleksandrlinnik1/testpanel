import { findEl } from './utils';

const turbo = findEl('.turbo');
const turboCheckbox = findEl('.checkbox', turbo);

export function initTurbo() {
    turboCheckbox.addEventListener('click', toggleTurbo);
}

function toggleTurbo() {
    turbo.classList.toggle('on');
}