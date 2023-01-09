function loadHome() {
    const content = document.createElement('div');

    const homeImage = new Image();
    homeImage.src = '../src/restaurant.jpg';
    homeImage.style = 'width: 60vw';
    content.appendChild(homeImage);
    
    const header = document.createElement('h1');
    header.textContent += "ShadeBolt";
    content.appendChild(header);
    
    const subheader = document.createElement('h3');
    subheader.textContent += "The restaurant of wealth";
    content.appendChild(subheader);

    const description = document.createElement('p');
    description.textContent += "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    content.appendChild(description);

    document.body.appendChild(content);
}

export default loadHome