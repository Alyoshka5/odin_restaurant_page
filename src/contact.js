import contactImgSrc from './contact.jpg';

function loadContact() {
    const content = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent += "Contact Us";
    content.appendChild(header);
    
    // person 1
    const person1 = document.createElement('div');
    const name1 = document.createElement('h3');
    name1.textContent += "Manager";
    person1.appendChild(name1);
    const phone1 = document.createElement('h5');
    phone1.textContent += "Phone Number: 123-456-7890";
    person1.appendChild(phone1);
    const email1 = document.createElement('h5');
    email1.textContent += "Email: manager@email.com";
    person1.appendChild(email1);
    content.appendChild(person1);
    
    // person 2
    const person2 = document.createElement('div');
    const name2 = document.createElement('h3');
    name2.textContent += "Chef";
    person2.appendChild(name2);
    const phone2 = document.createElement('h5');
    phone2.textContent += "Phone Number: 0987-654-321";
    person2.appendChild(phone2);
    const email2 = document.createElement('h5');
    email2.textContent += "Email: chef@email.com";
    person2.appendChild(email2);
    content.appendChild(person2);

    const contactImage = new Image();
    contactImage.src = contactImgSrc;
    contactImage.style = 'width: 60vw';
    content.appendChild(contactImage);
    
    document.body.appendChild(content);
}

export default loadContact