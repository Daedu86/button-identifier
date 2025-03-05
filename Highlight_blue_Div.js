(function() {
    function findAndHighlightDivs() {
        const divs = Array.from(document.querySelectorAll('div'));
        divs.forEach(div => {
            div.style.border = '2px solid blue';
        });
    }

    findAndHighlightDivs();
})();