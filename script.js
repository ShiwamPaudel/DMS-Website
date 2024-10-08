const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Cart Feature 
// Sample data for cart items
const cartItems = [
    {
        id: 1,
        image: 'images/products/AlexStar.png',
        name: 'AlexStar Red Edition',
        quantity: 1
    },
    {
        id: 2,
        image: 'images/products/BA200.png',
        name: 'BA 200',
        quantity: 1
    },
    {
        id: 3,
        image: 'images/products/CryoCube.png',
        name: 'CryoCube',
        quantity: 1
    }
];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><a href="#" onclick="removeItem(${item.id})"><i class="fas fa-times-circle" style="color:black"></i></a></td>
            <td><img src="${item.image}" alt=""></td>
            <td>${item.name}</td>
            <td><input type="number" value="${item.quantity}" style="text-align:center"onchange="updateQuantity(${item.id}, this.value)"></td>
        `;

        cartItemsContainer.appendChild(row);
    });
}

// Function to remove an item from the cart
function removeItem(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        cartItems.splice(index, 1);
        renderCartItems();
    }
}

// Function to update item quantity
function updateQuantity(id, quantity) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
        renderCartItems();
    }
}


window.onload = function() {
    renderCartItems();
}
