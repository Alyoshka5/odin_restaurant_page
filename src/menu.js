import food1ImgSrc from './steak.jpg';
import food2ImgSrc from './lobster.jpg';
import food3ImgSrc from './ice-cream.jpg';

function loadMenu() {
    const content = document.createElement('div');
    
    const header = document.createElement('h1');
    header.textContent += "Our Menu";
    content.appendChild(header);

    // food 1
    const food1 = document.createElement('div');
    const food1Name = document.createElement('h2');
    food1Name.textContent = "Steak";
    food1.appendChild(food1Name);
    const food1Image = new Image();
    food1Image.src = food1ImgSrc;
    food1Image.style = 'width: 40vw';
    food1.appendChild(food1Image);
    const food1Price = document.createElement('h3');
    food1Price.textContent = "Price: 80$";
    food1.appendChild(food1Price);
    content.appendChild(food1);

    // food 2
    const food2 = document.createElement('div');
    const food2Name = document.createElement('h2');
    food2Name.textContent = "Lobster";
    food2.appendChild(food2Name);
    const food2Image = new Image();
    food2Image.src = food2ImgSrc;
    food2Image.style = 'width: 40vw';
    food2.appendChild(food2Image);
    const food2Price = document.createElement('h3');
    food2Price.textContent = "Price: 120$";
    food2.appendChild(food2Price);
    content.appendChild(food2);

    // food 3
    const food3 = document.createElement('div');
    const food3Name = document.createElement('h2');
    food3Name.textContent = "Ice Cream";
    food3.appendChild(food3Name);
    const food3Image = new Image();
    food3Image.src = food3ImgSrc;
    food3Image.style = 'width: 40vw';
    food3.appendChild(food3Image);
    const food3Price = document.createElement('h3');
    food3Price.textContent = "Price: 20$";
    food3.appendChild(food3Price);
    content.appendChild(food3);

    document.body.appendChild(content);
}

export default loadMenu