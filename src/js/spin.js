import { findEl } from './utils';
const spinButton = findEl('.spin');

const SPIN_BUTTON_DISABLED_TIMEOUT = 500;
const SPIN_DURATION = 1000;
let stopTimeout;

export function initSpin() {
    spinButton.addEventListener('click', onClick);
}

function onClick() {
    const { classList } = spinButton;
    if (classList.contains('stop')) {
        classList.remove('stop');
        clearTimeout(stopTimeout);
        return;
    }
    classList.add('disabled');
    classList.add('stop');
    setTimeout(() => classList.remove('disabled'), SPIN_BUTTON_DISABLED_TIMEOUT);
    stopTimeout = setTimeout(() => classList.remove('stop'), SPIN_DURATION);
}