//load home on site open
//each button deletes home and loads another page
import './styles.css';
import promo from './wcdonalds.jpg'

const contentDiv = document.querySelector('#content')

function home() {
    //adds image to home page
    const myPromo = new Image()
    myPromo.src = promo;
    myPromo.classList.add('promo');
    contentDiv.appendChild(myPromo);

    //adds image caption under
    const advert = document.createElement("h2");
    const adCaption = document.createTextNode("Try New Savory Chili WcDonald's Sauce");
    const advertText = document.createElement("p");
    const text = document.createTextNode("Discover the new Savory Chili WcDonald’s Sauce,* straight from the WcDonald’s universe. So savory and bold! It’s the special move you’ll shout Shounen-style when you activate and unlock 2x bonus points on your next 10 piece Chicken McNuggets® order in the app.^ Plus, enjoy four weekly, unique anime and manga exclusives.")
    advertText.appendChild(text);
    advert.appendChild(adCaption);
    contentDiv.appendChild(advert);
    contentDiv.appendChild(advertText);
    
}

home()