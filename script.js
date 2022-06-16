let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button')

themeButton.onclick = function() {
    page.classList.toggle('dark-theme');
    // themeButton.textContent = 'Светлая тема';
        // if (themeButton.textContent == 'Темная тема')_{
        //     themeButton.textContent = 'Светлая тема'};

};
// themeButton.onclick = function() {
// themeButton.textContent = 'Темная тема';
// };
