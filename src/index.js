import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function manageNav() {
    const nav = document.createElement('nav');
    const body = document.body;

    // create nav buttons
    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    nav.appendChild(homeButton);
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    nav.appendChild(menuButton);
    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    nav.appendChild(contactButton);
    
    function resetPage() {
        body.innerHTML = "";
        document.body.appendChild(nav);
    }
    // add event listeners to nav buttons
    homeButton.addEventListener('click', () => {
        resetPage();
        loadHome();
    });
    menuButton.addEventListener('click', () => {
        resetPage();
        loadMenu();
    });
    contactButton.addEventListener('click', () => {
        resetPage();
        loadContact();
    });

    document.body.appendChild(nav);
    loadHome();
}
manageNav();