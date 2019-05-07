/* global document */
const style = document.createElement('style');

style.innerHTML = 'table {opacity: 1} table td {display: none} table td:first-child {display: block}';

document.body.append(style);
