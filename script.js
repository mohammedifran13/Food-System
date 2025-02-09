const foodItems = [
  {
      id: 1,
      name: 'Home made pizza',
      price: 190,
      rating: 4.7,
      time: '50-79 min',
      image: './image/food/h1-1.png'
  },
  {
      id: 2,
      name: 'Home made pizza',
      price: 180,
      rating: 4.8,
      time: '45-60 min',
      image: './image/food/h3-2.png'
  },
  {
    id: 3,
    name: 'Home made pizza',
    price: 220,
    rating: 4.6,
    time: '40-55 min',
    image: './image/food/h1-3.png'
},
{
  id: 4,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h1-4.png'
},
{
  id: 5,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h2-1.png'
},
{
  id: 6,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h2-2.png'
},
{
  id: 7,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h2-3.png'
},
{
  id: 8,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h2-4.png'
},
{
  id: 9,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h1-1.png'
},
{
  id: 10,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h3-2.png'
},
{
  id: 11,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h1-3.png'
},
{
  id: 12,
  name: 'Home made pizza',
  price: 220,
  rating: 4.6,
  time: '40-55 min',
  image: './image/food/h1-4.png'
},
];


const popularItems = [
{
    id: 1,
    name: 'Home made pizza',
    price: 164,
    rating: 4.3,
    time: '50-79 min',
    image: './image/food/h1-1.png'
},
{
    id: 2,
    name: 'Tandoori Chicken',
    price: 210,
    rating: 4.5,
    time: '55-70 min',
    image: './image/food/p2.png'
},
{
    id: 3,
    name: 'Chilli Chicken',
    price: 180,
    rating: 4.4,
    time: '45-60 min',
    image: './image/food/p3.png'
}
];


let cart = [];


const foodGrid = document.getElementById('foodGrid');
const carouselItems = document.getElementById('carouselItems');
const cartModal = document.getElementById('cartModal');
const cartBtn = document.querySelector('.cart-btn');
const backToMenuBtn = document.querySelector('.back-to-menu');


function renderFoodItems() {
    foodGrid.innerHTML = foodItems.map(item => `
        <div class="food-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="food-item-content">
                <h3>${item.name}</h3>
                <div class="food-item-footer">
                    <div class="rating">⭐ ${item.rating} (${item.time})</div>
                     <div class="price">₹${item.price}</div>
                    <button onclick="addToCart(${item.id})" style="background-color:orange;color : white;  border: none; padding: 5px 5px; font-size: 16px; cursor: pointer; border-radius: 5px;">+</button>
                </div>
            </div>
        </div>
    `).join('');
}


function renderPopularItems() {
    carouselItems.innerHTML = popularItems.map(item => `
        <div class="food-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="food-item-content">
                <h3>${item.name}</h3>
                <div class="food-item-footer">
                    <div class="rating">⭐ ${item.rating} (${item.time})</div>
                    <div class="price">₹${item.price}</div>
                    <button onclick="addToCart(${item.id})" style="background-color:orange; color: white; border: none; padding: 5px 10px; font-size: 16px; cursor: pointer; border-radius: 5px;">+</button>
 </div>
                   </div>
        </div>
    `).join('');
}


function addToCart(itemId) {
    const item = [...foodItems, ...popularItems].find(item => item.id === itemId);
    if (item) {
        cart.push(item);
        updateCart();
      }
  }
  
  function updateCart() {
      const cartItems = document.querySelector('.cart-items');
      const cartEmpty = document.querySelector('.cart-empty');
  
      if (cart.length === 0) {
          cartItems.style.display = 'none';
          cartEmpty.style.display = 'block';
      } else {
          cartItems.style.display = 'block';
          cartEmpty.style.display = 'none';
          cartItems.innerHTML = cart.map(item => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCart();
}


function openRequestDishModal() {
  const modal = document.getElementById('requestDishModal');
  modal.style.display = 'block';
}

function closeRequestDishModal() {
  const modal = document.getElementById('requestDishModal');
  modal.style.display = 'none';
}


cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

backToMenuBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === cartModal) {
      cartModal.style.display = 'none';
  }
  if (e.target === document.getElementById('requestDishModal')) {
    closeRequestDishModal();
}
});


const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

prevBtn.addEventListener('click', () => {
carouselItems.scrollBy({
    left: -300,
    behavior: 'smooth'
});
});

nextBtn.addEventListener('click', () => {
    carouselItems.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
});

const requestDishForm = document.getElementById('requestDishForm');
requestDishForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const dishName = document.getElementById('dishName').value;
    const dishImage = document.getElementById('dishImage').files[0];
    
    
    console.log('Dish requested:', { dishName, dishImage });

    
    this.reset();
    closeRequestDishModal();
    alert('Thank you for your request! We will review it shortly.');
});


document.querySelector('.request-dish-btn').addEventListener('click', openRequestDishModal);


renderFoodItems();
renderPopularItems();
updateCart();

const video = document.getElementById('promoVideo');
const playBtn = document.getElementById('playPauseBtn');


video.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);

function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.classList.add('hidden'); 
    } else {
        video.pause();
        playBtn.classList.remove('hidden'); 
    }
}