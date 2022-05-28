var books = [{
    "author": "Douglas Crockford",
    "imageLink": "../assets/thegoodparts.png",
    "title": "JavaScript: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
  },
    {
      "author": "David Herman",
      "imageLink": "../effectivejs.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "author": "David Flanagan",
      "imageLink": "../jsthedefinitiveguide.png",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      "author": " Eric Elliott",
      "imageLink": "../jsapplications.jpg",
      "title": "Programming JavaScript Applications",
      "price": 19,
      "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      "author": "Addy Osmani",
      "imageLink": "../jsdesignpatterns.png",
      "title": "Learning JavaScript Design Patterns",
      "price": 32,
      "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      "author": "Boris Cherny",
      "imageLink": "../ts.jpg",
      "title": "Programming TypeScript",
      "price": 28,
      "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      "author": "Alex Banks, Eve Porcello",
      "imageLink": "../react2.jpg",
      "title": "Learning React, 2nd Edition",
      "price": 25,
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      "author": "Bradley Meck, Alex Young",
      "imageLink": "../node.jpg",
      "title": "Node.js in Action",
      "price": 38,
      "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      "author": "Kyle Simpson",
      "imageLink": "../jsgetstarted.jpg",
      "title": "You Don't Know JS Yet: Get Started",
      "price": 26,
      "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      "author": "John Resig, Bear Bibeault",
      "imageLink": "../jsninja.jpg",
      "title": "Secrets of the JavaScript Ninja",
      "price": 33,
      "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
  ]


// create fill out form 
const form = document.createElement("form");
form.setAttribute('id', 'form');
form.setAttribute('action', '/');
form.setAttribute('method', 'GET');

const yourinfo = document.createElement("h4");
yourinfo.textContent = "Your Information:";
form.appendChild(yourinfo);

const names = document.createElement("input");
names.setAttribute('type', 'text');
names.setAttribute('placeholder', 'Your Name');
names.setAttribute('required', '');
names.setAttribute('minlength', `${4}`);
names.setAttribute('pattern', "[a-zA-Z]+");
form.append(names);

const lastName = document.createElement("input");
lastName.setAttribute('type', 'text');
lastName.setAttribute('placeholder', 'Last Name');
lastName.setAttribute('required', '');
lastName.setAttribute('minlength', `${5}`);
lastName.setAttribute('pattern', "[a-zA-Z]+");
form.append(lastName);

const delDate = document.createElement("h4");
delDate.textContent = "Delivery Date:";
form.appendChild(delDate);

var today = new Date();
var dd = today.getDate() +1;
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd<10){
  dd = '0' + dd;
} else if (mm<10){
  mm= '0' + mm;
}
var tomorrow = yyyy + '-' + mm + '-' + dd;
console.log(tomorrow);

const date = document.createElement("input");
date.setAttribute('type', 'date');
date.setAttribute('required', '');
date.setAttribute('min', `${tomorrow}`);
form.append(date);

const address = document.createElement("h4");
address.textContent = "Delivery Address:";
form.appendChild(address);

const street = document.createElement("input");
street.setAttribute('type', 'text');
street.setAttribute('placeholder', 'Street');
street.setAttribute('required', '');
street.setAttribute('minlength', `${5}`);
form.append(street);

const housenum = document.createElement("input");
housenum.setAttribute('type', 'text');
housenum.setAttribute('placeholder', 'House Number');
housenum.setAttribute('required', '');
housenum.setAttribute('pattern', "[0-9]+");
form.append(housenum);

const flatnum = document.createElement("input");
flatnum.setAttribute('type', 'text');
flatnum.setAttribute('placeholder', 'Flat Number');
flatnum.setAttribute('required', '');
flatnum.setAttribute('pattern', "[0-9]+");
form.append(flatnum);

const payment = document.createElement("h4");
payment.textContent = "Choose Payment Type:";
form.appendChild(payment);

const cashText = document.createElement("h4");
cashText.textContent = "cash card";
cashText.setAttribute('id', 'cashText');
form.appendChild(cashText);

const radio = document.createElement("div");
radio.setAttribute('id', 'radio');
form.appendChild(radio);

const cash = document.createElement("input");
cash.setAttribute('type', 'radio');
cash.setAttribute('name', 'payment');
cash.setAttribute('required', '');
radio.appendChild(cash);

const card = document.createElement("input");
card.setAttribute('type', 'radio');
card.setAttribute('name', 'payment');
card.setAttribute('required', '');
radio.appendChild(card);

const gift = document.createElement("h4");
gift.textContent = "Choose Two Gifts:";
form.appendChild(gift);

const choosegifts = document.createElement("div");
choosegifts.setAttribute('id', 'choose-gifts');
form.appendChild(choosegifts);

const checkboxes = document.createElement("div");
checkboxes.setAttribute('class', 'checkbox');
choosegifts.appendChild(checkboxes);

const pack = document.createElement("input");
pack.setAttribute('type', 'checkbox');
pack.setAttribute('name', 'gifts');
checkboxes.appendChild(pack);

const postcard = document.createElement("input");
postcard.setAttribute('type', 'checkbox');
postcard.setAttribute('name', 'gifts');
checkboxes.appendChild(postcard);

const discount = document.createElement("input");
discount.setAttribute('type', 'checkbox');
discount.setAttribute('name', 'gifts');
checkboxes.appendChild(discount);

const pencil = document.createElement("input");
pencil.setAttribute('type', 'checkbox');
pencil.setAttribute('name', 'gifts');
checkboxes.appendChild(pencil);

const checkboxtxt = document.createElement("div");
checkboxtxt.setAttribute('id', 'checkboxtxt');
choosegifts.appendChild(checkboxtxt);

const packtxt = document.createElement("p");
packtxt.textContent = "pack as a gift";
packtxt.setAttribute('class', 'checkbox-texts');
checkboxtxt.appendChild(packtxt);

const postcardtxt = document.createElement("p");
postcardtxt.textContent = "add postcard";
postcardtxt.setAttribute('class', 'checkbox-texts');
checkboxtxt.appendChild(postcardtxt);

const discounttxt = document.createElement("p");
discounttxt.textContent = "provide 2% discount next time";
discounttxt.setAttribute('class', 'checkbox-texts');
checkboxtxt.appendChild(discounttxt);

const penciltxt = document.createElement("p");
penciltxt.textContent = "branded pen or pencil";
penciltxt.setAttribute('class', 'checkbox-texts');
checkboxtxt.appendChild(penciltxt);

var limit = 2;
var arrayCheck = [pack, postcard, discount, pencil];
for (var i=0; i < 4; i++){
  arrayCheck[i].onclick = function (){
    var checked = 0;
    for (var i=0; i<4; i++){
      checked += (arrayCheck[i].checked) ? 1 : 0;
    }
    if (checked > limit) {
      alert ("You can only choose 2 gifts");
    }
  }
}

const complete = document.createElement("button");
complete.setAttribute('type', 'submit');
complete.setAttribute('id', 'complete-button');
complete.textContent = "Confirm Order";
form.appendChild(complete);






// creates div with class "header" inside wrapper
const bigwrapper = document.getElementById("wrapper");
const insideWrapper = document.createElement("div");
//insideWrapper.textContent = "please notice me";
insideWrapper.setAttribute('id', 'header');
bigwrapper.appendChild(insideWrapper);

//create div with logo inside header
const header = document.getElementById("header");
const logo = document.createElement("div");
logo.setAttribute('id', 'logo');
header.appendChild(logo);

//create h1 tag and text inside logo
const getLogo = document.getElementById("logo");
const logoText = document.createElement("h1");
logoText.textContent = "Bookshop";
logoText.setAttribute('id', 'logoText');
getLogo.appendChild(logoText);

//create image tag in header
const headerImg = document.createElement("img");
headerImg.setAttribute('id', 'headerImg');
headerImg.setAttribute('src', '../headerImg.png');
header.appendChild(headerImg);

//create first row of books
const firstRow = document.createElement("div");
firstRow.setAttribute('id', 'firstRow');
bigwrapper.appendChild(firstRow);

//creates book images in first row
const getFirstRow = document.getElementById("firstRow");
const firstRowOne = document.createElement("img");
firstRowOne.setAttribute('class', 'book');
firstRowOne.setAttribute('width', '200px');
firstRowOne.setAttribute('height', '270px');
firstRowOne.setAttribute('src', books[0]['imageLink']);
getFirstRow.appendChild(firstRowOne);

const secondBook = document.createElement('img');
secondBook.setAttribute('width', '200px');
secondBook.setAttribute('height', '270px');
secondBook.setAttribute('class', 'book');
secondBook.setAttribute('src', books[1]['imageLink']);
getFirstRow.appendChild(secondBook);

const thirdBook = document.createElement('img');
thirdBook.setAttribute('class', 'book');
thirdBook.setAttribute('width', '200px');
thirdBook.setAttribute('height', '270px');
thirdBook.setAttribute('src', books[2]['imageLink']);
getFirstRow.appendChild(thirdBook);

const fourthBook = document.createElement('img');
fourthBook.setAttribute('class', 'book');
fourthBook.setAttribute('width', '200px');
fourthBook.setAttribute('height', '270px');
fourthBook.setAttribute('src', books[3]['imageLink']);
getFirstRow.appendChild(fourthBook);

const fifthBook = document.createElement('img');
fifthBook.setAttribute('class', 'book');
fifthBook.setAttribute('width', '200px');
fifthBook.setAttribute('height', '270px');
fifthBook.setAttribute('src', books[4]['imageLink']);
getFirstRow.appendChild(fifthBook);

//create first row of info
const firstRowInfo = document.createElement("div");
firstRowInfo.setAttribute('id', 'firstRowInfo');
bigwrapper.appendChild(firstRowInfo);

//create info and add prices
const firstInfo = document.createElement("div");
firstInfo.setAttribute('class', 'infoCard');
firstInfo.textContent = "Price: $" + books[0]['price'];
firstRowInfo.appendChild(firstInfo);

const secondInfo = document.createElement("div");
secondInfo.setAttribute('class', 'infoCard');
secondInfo.textContent = "Price: $" + books[1]['price'];
firstRowInfo.appendChild(secondInfo);

const thirdInfo = document.createElement("div");
thirdInfo.setAttribute('class', 'infoCard');
thirdInfo.textContent = "Price: $" + books[2]['price'];
firstRowInfo.appendChild(thirdInfo);

const fourthInfo = document.createElement("div");
fourthInfo.setAttribute('class', 'infoCard');
fourthInfo.textContent = "Price: $" + books[3]['price'];
firstRowInfo.appendChild(fourthInfo);

const fifthInfo = document.createElement("div");
fifthInfo.setAttribute('class', 'infoCard');
fifthInfo.textContent = "Price: $" + books[4]['price'];
firstRowInfo.appendChild(fifthInfo);

//create and add prices (edit: authors)
const firstPrice = document.createElement("p");
firstPrice.textContent = books[0]['author'];
firstPrice.setAttribute('class', 'price');
firstInfo.appendChild(firstPrice);

const secondPrice = document.createElement("p");
secondPrice.textContent = books[1]['author'];
secondPrice.setAttribute('class', 'price');
secondInfo.appendChild(secondPrice);

const thirdPrice = document.createElement("p");
thirdPrice.textContent = books[2]['author'];
thirdPrice.setAttribute('class', 'price');
thirdInfo.appendChild(thirdPrice);

const fourthPrice = document.createElement("p");
fourthPrice.textContent = books[3]['author'];
fourthPrice.setAttribute('class', 'price');
fourthInfo.appendChild(fourthPrice);

const fifthPrice = document.createElement("p");
fifthPrice.textContent = books[4]['author'];
fifthPrice.setAttribute('class', 'price');
fifthInfo.appendChild(fifthPrice);


//create and add titles
const firstTitle = document.createElement("p");
firstTitle.textContent = books[0]['title'];
firstTitle.setAttribute('class', 'title');
firstInfo.appendChild(firstTitle);

const secondTitle = document.createElement("p");
secondTitle.textContent = books[1]['title'];
secondTitle.setAttribute('class', 'title');
secondInfo.appendChild(secondTitle);

const thirdTitle = document.createElement("p");
thirdTitle.textContent = books[2]['title'];
thirdTitle.setAttribute('class', 'title');
thirdInfo.appendChild(thirdTitle);

const fourthTitle = document.createElement("p");
fourthTitle.textContent = books[3]['title'];
fourthTitle.setAttribute('class', 'title');
fourthInfo.appendChild(fourthTitle);

const fifthTitle = document.createElement("p");
fifthTitle.textContent = books[4]['title'];
fifthTitle.setAttribute('class', 'title');
fifthInfo.appendChild(fifthTitle);

// create div for buttons

const buttonDivOne = document.createElement("div");
buttonDivOne.setAttribute('class', 'button-div');

const buttonDivTwo = document.createElement("div");
buttonDivTwo.setAttribute('class', 'button-div');

const buttonDivThree = document.createElement("div");
buttonDivThree.setAttribute('class', 'button-div');

const buttonDivFour = document.createElement("div");
buttonDivFour.setAttribute('class', 'button-div');

const buttonDivFive = document.createElement("div");
buttonDivFive.setAttribute('class', 'button-div');


const infoCards = document.getElementsByClassName("infoCard");
var buttonDiv = [buttonDivOne, buttonDivTwo, buttonDivThree, buttonDivFour, buttonDivFive];

for (let i=0; i<infoCards.length; i++){
  infoCards[i].appendChild(buttonDiv[i]);
}

//create learn more button
const learnMoreOne = document.createElement("button");
learnMoreOne.setAttribute('class', 'learn-more-button');
learnMoreOne.setAttribute('type', 'button');
learnMoreOne.setAttribute('data-modal-target', '#modal');
learnMoreOne.textContent = "Learn More";
learnMoreOne.setAttribute('id', 'one');
buttonDivOne.appendChild(learnMoreOne);

const learnMoreTwo = document.createElement("button");
learnMoreTwo.setAttribute('class', 'learn-more-button');
learnMoreTwo.setAttribute('type', 'button');
learnMoreTwo.setAttribute('data-modal-target', '#modal');
learnMoreTwo.textContent = "Learn More";
learnMoreTwo.setAttribute('id', 'two');
buttonDivTwo.appendChild(learnMoreTwo);

const learnMoreThree = document.createElement("button");
learnMoreThree.setAttribute('class', 'learn-more-button');
learnMoreThree.setAttribute('type', 'button');
learnMoreThree.setAttribute('data-modal-target', '#modal');
learnMoreThree.textContent = "Learn More";
learnMoreThree.setAttribute('id', 'three');
buttonDivThree.appendChild(learnMoreThree);

const learnMoreFour = document.createElement("button");
learnMoreFour.setAttribute('class', 'learn-more-button');
learnMoreFour.setAttribute('type', 'button');
learnMoreFour.setAttribute('data-modal-target', '#modal');
learnMoreFour.textContent = "Learn More";
learnMoreFour.setAttribute('id', 'four');
buttonDivFour.appendChild(learnMoreFour);

const learnMoreFive = document.createElement("button");
learnMoreFive.setAttribute('class', 'learn-more-button');
learnMoreFive.setAttribute('type', 'button');
learnMoreFive.setAttribute('data-modal-target', '#modal');
learnMoreFive.textContent = "Learn More";
learnMoreFive.setAttribute('id', 'five');
buttonDivFive.appendChild(learnMoreFive);

// create add to bag button
const addToBagOne = document.createElement("a");
addToBagOne.setAttribute('href', '#');
addToBagOne.setAttribute('class', 'add-to-bag-button');
addToBagOne.textContent = "Add to Bag";


buttonDivOne.appendChild(addToBagOne);

const addToBagTwo = document.createElement("a");
addToBagTwo.setAttribute('href', '#');
addToBagTwo.setAttribute('class', 'add-to-bag-button');
addToBagTwo.textContent = "Add to Bag";
buttonDivTwo.appendChild(addToBagTwo);

const addToBagThree = document.createElement("a");
addToBagThree.setAttribute('href', '#');
addToBagThree.setAttribute('class', 'add-to-bag-button');
addToBagThree.textContent = "Add to Bag";
buttonDivThree.appendChild(addToBagThree);

const addToBagFour = document.createElement("a");
addToBagFour.setAttribute('href', '#');
addToBagFour.setAttribute('class', 'add-to-bag-button');
addToBagFour.textContent = "Add to Bag";
buttonDivFour.appendChild(addToBagFour);

const addToBagFive = document.createElement("a");
addToBagFive.setAttribute('href', '#');
addToBagFive.setAttribute('class', 'add-to-bag-button');
addToBagFive.textContent = "Add to Bag";
buttonDivFive.appendChild(addToBagFive);

//create second row of book images
const secondRow = document.createElement("div");
secondRow.setAttribute('id', 'second-row');
bigwrapper.appendChild(secondRow);

//put images in second row
const getSecondRow = document.getElementById("second-row");
var image;
for (var i=5; i<books.length; i++){
  image = document.createElement("img");
  image.setAttribute('class', 'book');
  image.setAttribute('width', '200px');
  image.setAttribute('height', '270px');
  image.setAttribute('src', books[i]['imageLink']);
  getSecondRow.appendChild(image);
}

//info divs for second row
const secondRowInfo = document.createElement("div");
secondRowInfo.setAttribute('id', 'secondRowInfo');
bigwrapper.appendChild(secondRowInfo);

//create seperete divs for second row book infos and fill in
var infoCard;
var author;
var secondRowTitles;
var buttonsDiv;
var secondRowLearnMore;
var secondRowAddToBag;
var arr = [];


for (let i=5; i<books.length; i++){
  infoCard = document.createElement("div");
  infoCard.setAttribute('class', 'infoCard');
  infoCard.textContent = "Price: $" + books[i]['price'];
  secondRowInfo.appendChild(infoCard);

  author = document.createElement("p");
  author.textContent = books[i]['author'];
  author.setAttribute('class', 'price');
  infoCard.appendChild(author);

  secondRowTitles = document.createElement("p");
  secondRowTitles.textContent = books[i]['title'];
  secondRowTitles.setAttribute('class', 'title');
  infoCard.appendChild(secondRowTitles);

  buttonsDiv = document.createElement("div");
  buttonsDiv.setAttribute('class', 'button-div');
  infoCard.appendChild(buttonsDiv);

  secondRowLearnMore = document.createElement("button");
  secondRowLearnMore.setAttribute('class', 'learn-more-button');
  secondRowLearnMore.setAttribute('type', 'button');
  secondRowLearnMore.setAttribute('data-modal-target', '#modal');
  secondRowLearnMore.textContent = "Learn More";
  arr.push(secondRowLearnMore);
  buttonsDiv.appendChild(secondRowLearnMore);

  secondRowAddToBag = document.createElement("a");
  secondRowAddToBag.setAttribute('href', '#');
  secondRowAddToBag.setAttribute('class', 'add-to-bag-button');
  secondRowAddToBag.textContent = "Add to Bag";
  buttonsDiv.appendChild(secondRowAddToBag);


}

//create title and order button for shopping cart
const cart = document.getElementById("shopping-cart");
const cartHeader = document.createElement("div");
cartHeader.setAttribute('id', 'cartHeader');
cartHeader.textContent = "Your Items";
cart.appendChild(cartHeader);


const orderButton = document.createElement("button");
orderButton.setAttribute('id', 'order-button');
orderButton.setAttribute('type', 'button');
orderButton.setAttribute('data-modal-target', '#modal');
orderButton.textContent = "Order";
cartHeader.appendChild(orderButton);


//create body for shopping cart
const cartBody = document.createElement("div");
cartBody.setAttribute('id', 'cartBody');
cart.appendChild(cartBody);



//create cart body structure
var totalPrice = 0;
const cartTitle = document.createElement("div");
cartTitle.setAttribute('id', 'inside-cart-body-title');
cartTitle.textContent = "";
cartBody.appendChild(cartTitle);

const total = document.createElement("div");
total.setAttribute('id', 'totalPrice');
total.textContent = "Your total: $" + totalPrice;
cartBody.appendChild(total);



//add event listeners to addToBag buttons
var orderedBooks = [];
var array = document.getElementsByClassName("add-to-bag-button");

array[0].addEventListener("click", function(){
  totalPrice += +(books[0]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[0]['title'].substring(0, 24) + "...";;
  orderedBooks.push(books[0]['title']);
})
array[1].addEventListener("click", function(){
  totalPrice += +(books[1]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[1]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[1]['title']);
})
array[2].addEventListener("click", function(){
  totalPrice += +(books[2]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[2]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[2]['title']);
})
array[3].addEventListener("click", function(){
  totalPrice += +(books[3]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[3]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[3]['title']);
})
array[4].addEventListener("click", function(){
  totalPrice += +(books[4]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[4]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[4]['title']);
})
array[5].addEventListener("click", function(){
  totalPrice += +(books[5]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[5]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[5]['title']);
})
array[6].addEventListener("click", function(){
  totalPrice += +(books[6]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[6]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[6]['title']);
})
array[7].addEventListener("click", function(){
  totalPrice += +(books[7]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[7]['title'];
  orderedBooks.push(books[7]['title']);
})
array[8].addEventListener("click", function(){
  totalPrice += +(books[8]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[8]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[8]['title']);
})
array[9].addEventListener("click", function(){
  totalPrice += +(books[9]['price']);
  total.textContent = "Your total: $" + totalPrice;
  cartTitle.textContent += "\r\n" + books[9]['title'].substring(0, 24) + "...";
  orderedBooks.push(books[9]['title']);
})


//creating modal window
const openModal = document.createElement("div");
openModal.setAttribute('class', 'modal');
openModal.setAttribute('id', 'modal');
bigwrapper.appendChild(openModal);

//modal header
const modalHeader = document.createElement("div");
modalHeader.setAttribute('class', 'modal-header');
openModal.appendChild(modalHeader);

//modal title
const modalTitle = document.createElement("div");
modalTitle.setAttribute('class', 'title');
learnMoreOne.addEventListener("click", function(){
  modalTitle.textContent = books[0]['title'];
  modalBody.textContent = books[0]['description'];
})
learnMoreTwo.addEventListener("click", function(){
  modalTitle.textContent = books[1]['title'];
  modalBody.textContent = books[1]['description'];
})
learnMoreThree.addEventListener("click", function(){
  modalTitle.textContent = books[2]['title'];
  modalBody.textContent = books[2]['description'];
})
learnMoreFour.addEventListener("click", function(){
  modalTitle.textContent = books[3]['title'];
  modalBody.textContent = books[3]['description'];
})
learnMoreFive.addEventListener("click", function(){
  modalTitle.textContent = books[4]['title'];
  modalBody.textContent = books[4]['description'];
})
var learnMoreSix = arr[0];
learnMoreSix.addEventListener("click", function(){
  modalTitle.textContent = books[5]['title'];
  modalBody.textContent = books[5]['description'];
})
arr[1].addEventListener("click", function(){
  modalTitle.textContent = books[6]['title'];
  modalBody.textContent = books[6]['description'];
})
arr[2].addEventListener("click", function(){
  modalTitle.textContent = books[7]['title'];
  modalBody.textContent = books[7]['description'];
})
arr[3].addEventListener("click", function(){
  modalTitle.textContent = books[8]['title'];
  modalBody.textContent = books[8]['description'];
})
arr[4].addEventListener("click", function(){
  modalTitle.textContent = books[9]['title'];
  modalBody.textContent = books[9]['description'];
})
orderButton.addEventListener("click", function(){
  modalTitle.textContent = "Please Proceed With Your Order";
  modalBody.textContent = "";
  modalBody.appendChild(form);
})
form.addEventListener("submit", function(){
  modalTitle.textContent = `Thank you for your order, ${names.value + " " + lastName.value}`;
  modalBody.textContent = `Delivery Date: ${date.value + " , Delivery Address: " + street.value + " Str " + housenum.value + " Apt " + flatnum.value + "."}`;
})



modalHeader.appendChild(modalTitle);

//close button
const closeButton = document.createElement("button");
closeButton.setAttribute('class', 'close-button');
closeButton.setAttribute('data-close-button', '');
closeButton.textContent = "X";
modalHeader.appendChild(closeButton);


//modal body
const modalBody = document.createElement("div");
modalBody.setAttribute('class', 'modal-body');
openModal.appendChild(modalBody);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlays = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModalWindow(modal);
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModalWindow(modal);
  })
})


function openModalWindow(modal){
  if (modal == null) return;
  modal.classList.add('active');
}

function closeModalWindow(modal){
  if (modal == null) return;
  modal.classList.remove('active');
  
}






















































