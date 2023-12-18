// Add JavaScript code here for any interactive features

function showMenu() {
    // You can implement functionality to navigate to the menu page
    window.location.href = "listing.html";
}
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
// script.js

const order = [];

function addToOrder(itemName, price) {
    const orderList = document.getElementById("order-list");
    const totalDisplay = document.getElementById("total-price");

    // Check if the item is already in the order
    const existingItem = order.find(item => item.name === itemName);

    if (existingItem) {
        // Increment quantity if the item is already in the order
        existingItem.quantity++;
    } else {
        // Add the item to the order
        order.push({ name: itemName, price: price, quantity: 1 });
    }

    // Update the order list
    renderOrder(orderList);

    // Update the total price
    const totalPrice = calculateTotalPrice();
    totalDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function renderOrder(orderList) {
    // Clear the order list
    orderList.innerHTML = "";

    // Render each item in the order
    order.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.price} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        orderList.appendChild(listItem);
    });
}

function calculateTotalPrice() {
    // Calculate the total price of the order
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
}
// script.js

const order = [];

function addToOrder(itemName, price) {
    const orderList = document.getElementById("order-list");
    const totalDisplay = document.getElementById("total-price");

    // Check if the item is already in the order
    const existingItem = order.find(item => item.name === itemName);

    if (existingItem) {
        // Increment quantity if the item is already in the order
        existingItem.quantity++;
    } else {
        // Add the item to the order
        order.push({ name: itemName, price: price, quantity: 1 });
    }

    // Update the order list
    renderOrder(orderList);

    // Update the total price
    const totalPrice = calculateTotalPrice();
    totalDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function renderOrder(orderList) {
    // Clear the order list
    orderList.innerHTML = "";

    // Render each item in the order
    order.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        orderList.appendChild(listItem);
    });
}

function calculateTotalPrice() {
    // Calculate the total price of the order
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
}
// script.js

const order = [];

function addToOrder(itemName, price) {
    const orderList = document.getElementById("order-list");
    const totalDisplay = document.getElementById("total-price");

    // Check if the item is already in the order
    const existingItem = order.find(item => item.name === itemName);

    if (existingItem) {
        // Increment quantity if the item is already in the order
        existingItem.quantity++;
    } else {
        // Add the item to the order
        order.push({ name: itemName, price: price, quantity: 1 });
    }

    // Update the order list
    renderOrder(orderList);

    // Update the total price
    const totalPrice = calculateTotalPrice();
    totalDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function renderOrder(orderList) {
    // Clear the order list
    orderList.innerHTML = "";

    // Render each item in the order
    order.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        orderList.appendChild(listItem);
    });
}

function calculateTotalPrice() {
    // Calculate the total price of the order
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
}
function showOrderSummary() {
    // Your code to display the order summary goes here
    alert("Order summary will be displayed here.");
}
// script.js

const order = [];

function addToOrder(itemName, price) {
    // Add the selected item to the order
    order.push({ name: itemName, price: price });

    // Update the order details display
    updateOrderDetails();
}

function updateOrderDetails() {
    const orderDetails = document.getElementById("





