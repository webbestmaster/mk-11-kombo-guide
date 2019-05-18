/* global document */
const tableNode = document.querySelector('.tab-pane.fade.active.show');
const abilityNodeList = tableNode.querySelectorAll('span.equip[data-original-title]');
const name = tableNode.querySelector('h2').textContent.trim();

const abilityNameList = new Set();

abilityNodeList.forEach(abilityNode => {
    // console.log(abilityNode.dataset.originalTitle)
    abilityNameList.add(
        abilityNode.dataset.originalTitle
            .replace('Requires: ', '')
            .replace('(*)', '')
            .replace('(**)', '')
            .trim()
            .replace(/\s+/gi, ' ')
    );
});

const abilityNameListSorted = [...abilityNameList].sort();

console.log(abilityNameListSorted.join('\n'));

// abilityNameListSorted.forEach(name => console.log(name));

// console.log(abilityNameListSorted);
// console.log(abilityNodeList);
