import findButtons from './utils/buttonFinder.js';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = findButtons();
    console.log('Found buttons:', buttons);
});