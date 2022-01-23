import { findEl } from './utils';

const autoSpinContainer = findEl('.autospin');
const autoSpinButton = findEl('.btn-auto', autoSpinContainer);

export function initAutospin() {
    autoSpinContainer.addEventListener('click', onAutoSpinClick);
}

function onAutoSpinClick({ target: { classList }}) {
    if(classList.contains('autospin-option')) {
        autoSpinContainer.classList.add('enabled');
        autoSpinButton.classList.add('stop');
        return;
    }
    if(classList.contains('stop')) {
        autoSpinContainer.classList.remove('enabled');
        autoSpinButton.classList.remove('stop');
        return;
    }
}