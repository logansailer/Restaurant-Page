import './styles.css';
import wcDonaldsPromo from './wcdonalds.jpg';
import hamburglerPromo from './hamburgler.jpg'
import logo from './logo.jpg';

//header and page selection document queries
const logoDiv = document.querySelector('#logo')
const homeBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')
const contentDiv = document.querySelector('#content')
const mcLogo = new Image()
mcLogo.src = logo;
logoDiv.appendChild(mcLogo);

//text for add campaigns
const wcDonaldsHeading = "Try New Savory Chili WcDonald's Sauce";
const wcDonaldsText = "Discover the new Savory Chili WcDonald's Sauce,* straight from the WcDonald's universe. So savory and bold! It's the special move you'll shout Shounen-style when you activate and unlock 2x bonus points on your next 10 piece Chicken McNuggets® order in the app.^ Plus, enjoy four weekly, unique anime and manga exclusives.";
const hamburglerHeading = `McD's Best Burgers Ever.” - Hamburglar`;
const hamburglerText = `You're gonna love the hotter, juicier, tastier upgrades we've made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet. Ask the Hamburglar, he can't keep his hands off of 'em. Robble, robble.`;

function loadHome(adImg, adHeading, adText) {
    //adds promo image to home page
    const myPromo = new Image()
    myPromo.src = adImg;
    myPromo.classList.add('promo');
    contentDiv.appendChild(myPromo);

    //adds caption under promo image
    const textField = document.createElement('div')
    textField.classList.add('textDiv')
    const advert = document.createElement("h2");
    const adCaption = document.createTextNode(adHeading);
    const advertTextElement = document.createElement("p");
    const adSubText = document.createTextNode(adText)
    advertTextElement.appendChild(adSubText);
    advert.appendChild(adCaption);
    textField.appendChild(advert);
    textField.appendChild(advertTextElement);
    contentDiv.appendChild(textField)
}

//loads home page
function home() {
    loadHome(wcDonaldsPromo, wcDonaldsHeading, wcDonaldsText)
    loadHome(hamburglerPromo, hamburglerHeading, hamburglerText)
}

function menu(){
    contentDiv.innerHTML = "";
    
}

//loads home on page load, other pages on click
home()
homeBtn.addEventListener('click', home);
menuBtn.addEventListener('click', menu);
