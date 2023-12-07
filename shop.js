const addItemButtons = document.querySelectorAll("#addItem");
const totalElement = document.querySelector(".cart-total span");

let total = 0;

function updateTotal() {
    totalElement.textContent = total;
}

function addItemToCart(price) {
    total += price;
    updateTotal()
    alert('Item added to the cart!');
}

function removeItem(price) {
    total -= price;
    updateTotal();
    alert('Item removed from the cart!');
}

addItemButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const itemContainer = button.parentElement.parentElement;
        const priceText = itemContainer.querySelector("p").textContent;
        const price = parseFloat(priceText.split("$")[1]);
        addItemToCart(price);
    });
});

const removeButtons = document.querySelectorAll("button");
removeButtons.forEach(function (button) {
    if (button.textContent === "Remove item") {
        button.addEventListener("click", function () {
            const itemContainer = button.parentElement.parentElement;
            const priceText = itemContainer.querySelector("p").textContent;
            const price = parseFloat(priceText.split("$")[1]);
            removeItem(price);
            itemContainer.style.display = 'none';
        });
    }
});



function toggleResponsiveClass() {
    const cartContainer = document.querySelector('.cart-container');
    if (window.innerWidth <= 768) {
        cartContainer.classList.add('responsive');
    } else {
        cartContainer.classList.remove('responsive');
    }
    alert('')
}


window.addEventListener('resize', toggleResponsiveClass);
toggleResponsiveClass();

