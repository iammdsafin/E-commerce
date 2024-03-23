// Click on the button to zoom in the image
var btn = document.getElementsByClassName("quick-view-button");
var img = document.getElementsByClassName("product-image");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        for (var j = 0; j < img.length; j++) {
            img[j].classList.remove("zoom");
        }

        var image = this.previousElementSibling;
        image.classList.add("zoom");
    });
}

// Close quick view when clicking outside the image
document.body.addEventListener("click", function (event) {
    if (!event.target.classList.contains("quick-view-button")) {
        for (var i = 0; i < img.length; i++) {
            img[i].classList.remove("zoom");
        }
    }
});

// Redirect to product page when clicking on shop now button
var urlParams = new URLSearchParams(window.location.search);
var imgSrc = urlParams.get("image");
var imageElement = document.getElementById("product-image");
imageElement.src = imgSrc;

function goToProductPage(imgSrc) {
    window.location.href =
        "product-page.html?image=" + encodeURIComponent(imgSrc);
}

// Increment and decrement add to cart quantity
var quantity = document.getElementById("quantity");

function updateQuantity(value) {
    var currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity + value >= 1) {
        quantity.textContent = currentQuantity + value;
    }
}

document.getElementById("increment").addEventListener("click", function () {
    updateQuantity(1);
});

document.getElementById("decrement").addEventListener("click", function () {
    updateQuantity(-1);
});
