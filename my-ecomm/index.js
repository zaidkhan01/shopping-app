import { products } from "./db/products.js";
console.log(products)

const productContainer=document.getElementById("products");

for(let product of products){
    const cardContainer=document.createElement("div");
    cardContainer.classList.add(
        "card",
        "card-vertical",
        "d-flex",
        "direction-column",
        "relative",
        "shadow"
    );


    /*image container */
    const imageContainer=document.createElement("div");
    imageContainer.classList.add("card-image-container")
  
    const image=document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src",product.img);
    image.setAttribute("alt",product.name);
    imageContainer.appendChild(image);

    /** card details container */
    const cardDetailsContainer=document.createElement("div");
    cardDetailsContainer.classList.add("card-details");

    const brandContainer=document.createElement("div");
    brandContainer.classList.add("card-title");
    brandContainer.innerText=product.brand;
    cardDetailsContainer.appendChild(brandContainer)

// card description container
const descriptionContainer=document.createElement("div");
descriptionContainer.classList.add("card-description");

const name=document.createElement("p");
name.classList.add("card-des");
name.innerText=product.name;
descriptionContainer.appendChild(name);

// product price

const price=document.createElement("p");
price.classList.add("card-price");
price.innerText=`Rs. ${product.newPrice}`;

const oldPrice=document.createElement("span");
price.classList.add("price-strike-through");
price.innerText=`Rs. ${product.oldPrice}`;
price.appendChild(oldPrice);


const discount=document.createElement("span");
price.classList.add("discount");
price.innerText=`(${product.discount}% OFF`;
price.appendChild(discount);


// Rating Container
 const ratings=document.createElement("p");
 ratings.classList.add("d-flex","align-center")

const rating=document.createElement("span");
rating.innerText=product.rating;
ratings.appendChild(rating);

const star=document.createElement("span");
star.classList.add("material-icons-outlined");
star.innerText="star";
ratings.appendChild(star);

cardContainer.appendChild(imageContainer);
cardContainer.appendChild(cardDetailsContainer);
    // cardContainer.innerText="Product Card";
    productContainer.appendChild(cardContainer);
}