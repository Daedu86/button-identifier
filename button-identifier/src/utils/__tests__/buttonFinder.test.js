const findButtons = require('../buttonFinder');

test('findButtons should return all button elements', () => {
    document.body.innerHTML = `
        <button id="btn1">Button 1</button>
        <button id="btn2">Button 2</button>
        <div>Not a button</div>
    `;

    const buttons = findButtons();
    expect(buttons.length).toBe(2);
    expect(buttons[0].id).toBe('btn1');
    expect(buttons[1].id).toBe('btn2');
});