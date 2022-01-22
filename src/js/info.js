import { findEl } from './utils';

const infoButton = findEl('.btn-info');

export function initInfo() {
    infoButton.addEventListener('click', openInfo, true);
}

function openInfo() {
    alert('info')
}