import  { formatMoney, findEl } from './utils';

const COINS = [
    0.01,
    0.02,
    0.03,
    0.05,
    0.1,
    0.2,
    0.3,
    0.5,
    0.8,
    1,
    2,
    3,
    5,
    8,
    10,
    20,
    30,
    50,
    80,
    100,
    200
];

const COIN_VALUE = 15;

let plusButton;
let minusButton;
let totalCounter;
let coinCounter;

let coinIndex = 3;

export function initBets() {
    findElements();
    setBet();
    addListeners();
}

function setBet() {
    const coin = COINS[coinIndex];
    const totalBet = coin * COIN_VALUE;
    totalCounter.innerText = formatMoney(totalBet);
    coinCounter.innerText = formatMoney(coin);
}

function findElements() {
    plusButton = findEl('.btn-plus');
    minusButton = findEl('.btn-minus');
    totalCounter = findEl('.total-counter .coincounter');
    coinCounter = findEl('.coin .coincounter');
}

function addListeners() {
    plusButton.addEventListener('click', onPlusClick);
    minusButton.addEventListener('click', onMinusClick);
}

function onPlusClick() {
    if (coinIndex === (COINS.length - 1)) {
        return;
    }
    ++coinIndex;
    setBet();
    checkButtonsDisabled();
}

function onMinusClick() {
    if (!coinIndex) {
        return;
    }
    --coinIndex;
    setBet();
    checkButtonsDisabled();
}

function checkButtonsDisabled() {
    plusButton.classList.toggle('disabled', coinIndex === (COINS.length - 1));
    minusButton.classList.toggle('disabled', coinIndex === 0);
}

