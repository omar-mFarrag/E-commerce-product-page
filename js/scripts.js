var cart = document.getElementById("cart");
var cartContent = document.getElementById("cart-content");
var count = document.getElementById("count");
var prodInCart = document.getElementById("prod-in-cart");
var cartNotic = document.getElementById("cart-notic");

var cartClickCounter = 1;
var counter = 0;

function cartContentShow(){
    cartClickCounter++;
    console.log(cartClickCounter);

    if( (cartClickCounter % 2) === 0){
        cartContent.style.opacity = 1;
        cartContent.style.transform = " translate(-28%, 33px)";
        cartContent.style.zIndex = "123";
    }else if( (cartClickCounter % 2) === 1 ){
        cartContent.style.opacity = 0;
        cartContent.style.transform = "translate(-28%, 50px)";
        cartContent.style.zIndex = "-1";
    }
    
}

function minusCounter(){
    counter--;
    if(counter < 0){
        counter = 0;
    }
    count.innerHTML = counter;
}
function plusCounter(){
    counter++;
    count.innerHTML = counter;
}

function addToCart(){
    if(counter > 0){
        cartNotic.style.opacity = 1;
        cartNotic.innerHTML = counter;

        prodInCart.innerHTML = 
        `
            <div class="prod-in-cart">
                <img src="./images/image-product-1-thumbnail.jpg" alt="">
                <div class="prod-in-cart-info">
                    <p>Fall Limited Edition Sneakers</p>
                    <div class="total-price">
                        <span>$125.00 x ${counter}</span>
                        <span>$${counter * 125}.00</span>
                    </div>
                </div>
                <img onclick="deletCart();" src="./images/icon-delete.svg" alt="">
            </div>
            <button>Checkout</button>
        `;
    }else if(counter === 0){
        prodInCart.innerHTML = `
        <p>Your cart is empty.</p>
        `;

        cartNotic.style.opacity = 0;
        cartNotic.innerHTML = counter;
    }


}

function deletCart(){
    prodInCart.innerHTML = `<p>Your cart is empty.</p>`;
    counter = 0;
    count.innerHTML = counter;
    cartNotic.style.opacity = 0;
    cartNotic.innerHTML = counter;
}

var mainProd = document.getElementById("main-prod");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");

var ph1 = document.getElementById("ph1");
var ph2 = document.getElementById("ph2");
var ph3 = document.getElementById("ph3");
var ph4 = document.getElementById("ph4");

function photo1(){
    mainProd.src = "./images/image-product-1.jpg";
    p1.style.border = "solid 4px #fe801f";
    ph1.style.opacity = ".5";
    p2.style.border = "none";
    ph2.style.opacity = "1";
    p3.style.border = "none";
    ph3.style.opacity = "1";
    p4.style.border = "none";
    ph4.style.opacity = "1"; 
}
function photo2(){
    mainProd.src = "./images/image-product-2.jpg";

    p1.style.border = "none";
    ph1.style.opacity = "1";
    p2.style.border = "solid 4px #fe801f";
    ph2.style.opacity = ".5";
    p3.style.border = "none";
    ph3.style.opacity = "1";
    p4.style.border = "none";
    ph4.style.opacity = "1";   
}
function photo3(){
    mainProd.src = "./images/image-product-3.jpg";

    p1.style.border = "none";
    ph1.style.opacity = "1";
    p3.style.border = "solid 4px #fe801f";
    ph3.style.opacity = ".5";
    p2.style.border = "none";
    ph2.style.opacity = "1";
    p4.style.border = "none";
    ph4.style.opacity = "1";
}
function photo4(){
    mainProd.src = "./images/image-product-4.jpg";

    p1.style.border = "none";
    ph1.style.opacity = "1";
    p4.style.border = "solid 4px #fe801f";
    ph4.style.opacity = ".5";
    p3.style.border = "none";
    ph3.style.opacity = "1";
    p1.style.border = "none";
    ph1.style.opacity = "1";
}

var migaMenu = document.getElementById("miga-menu");

function closeMenu(){
    migaMenu.style.transform = "translateX(-120%)";
}
function showMenu(){
    migaMenu.style.transform = "translateX(0%)";
}

var changePhotoCounter = 1;
var next = document.getElementById("next");
var prev = document.getElementById("prev");


prev.style.opacity = 0;


function chagePhotoNext(){
    changePhotoCounter++;
    if(changePhotoCounter > 4){
        changePhotoCounter = 4;
    }
    mainProd.src = `./images/image-product-${changePhotoCounter}.jpg`;

    if( changePhotoCounter === 1 ){
        prev.style.opacity = 0;
    }else if(changePhotoCounter === 4){
        next.style.opacity = 0;
    }else{
        next.style.opacity = 1;
        prev.style.opacity = 1;
    }

    console.log(chagePhotoCounter);
}
function chagePhotoPrev(){
    changePhotoCounter--;
    if(changePhotoCounter < 1){
        changePhotoCounter = 1;
    }
    mainProd.src = `./images/image-product-${changePhotoCounter}.jpg`;

    if( changePhotoCounter === 1 ){
        prev.style.opacity = 0;
    }else if(changePhotoCounter === 4){
        next.style.opacity = 0;
    }else{
        next.style.opacity = 1;
        prev.style.opacity = 1;
    }

    console.log(chagePhotoCounter);
}