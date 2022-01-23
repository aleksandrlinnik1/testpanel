export const findEl = (sel, parent) =>
    (parent || document).querySelector(sel);

export const formatMoney = num =>
    `¥${num.toFixed(2)}`;