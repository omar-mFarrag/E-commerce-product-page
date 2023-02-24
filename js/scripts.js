var cart = document.getElementById("cart");
var cartContent = document.getElementById("cart-content");
var count = document.getElementById("count");

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