let cartCount = 0;  // Initialize the cart count

// Function to add items to the cart
function addToCart(productName, price) {
    cartCount++;  // Increment cart count when an item is added
    updateCartCount();
    alert(`${productName} added to cart for $${price}`);
}

// Function to update the cart count display
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
}

// Function to scroll to the selected category section
function scrollToCategory(category) {
    // Ensure the category ID exists and scroll smoothly
    const section = document.getElementById(category);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


