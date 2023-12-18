// Add this to your existing script.js or create a new one

const prices = {
    ChickenBucket: 12.99,
    SpicyWings: 8.99,
    // Add more menu items and prices as needed
};

function showPrice(menuItem) {
    const priceDisplay = document.getElementById("price-display");

    if (prices[menuItem]) {
        priceDisplay.textContent = `Price: $${prices[menuItem].toFixed(2)}`;
    } else {
        priceDisplay.textContent = "Price information not available.";
    }
}
