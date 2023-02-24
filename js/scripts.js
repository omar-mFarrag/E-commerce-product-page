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
        cartContent.style.transform = "translate(-28%, 17px)";
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

