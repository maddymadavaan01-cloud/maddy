
    // let count = 0;

    // function addToCart() {
    //     count++;
    //     document.getElementById("cart-count").textContent = count;
    // }


// function addToCart(btn) {

//     let gameName =
//         btn.parentElement.querySelector("h2").innerText;

//     let li = document.createElement("li");

//     li.innerText = gameName;

//     document.getElementById("cart-list").appendChild(li);
// }
let count = 0;

// function addToCart(btn) {

//     count++;
//     document.getElementById("cart-count").textContent = count;

//     let gameName =
//         btn.parentElement.querySelector("h2").innerText;

//     let li = document.createElement("li");

//     li.innerText = gameName;

//     document.getElementById("cart-list").appendChild(li);
// }
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(gameName){

    cart.push(gameName);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(gameName + " Added to Cart!");
}