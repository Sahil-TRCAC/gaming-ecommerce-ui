// ============================================
// PRODUCTS DATA
// ============================================
const products = [
    {
        id: 1,
        title: "Cyber Legends 2077",
        category: "action",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        rating: 4.8,
        reviews: 2453,
        badge: "hot",
        description: "Immerse yourself in a dystopian future where technology and humanity collide. Experience breathtaking visuals and intense gameplay."
    },
    {
        id: 2,
        title: "Dragon's Quest XI",
        category: "rpg",
        price: 49.99,
        originalPrice: null,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1295510/header.jpg",
        rating: 4.9,
        reviews: 3892,
        badge: "new",
        description: "Embark on an epic journey through mystical lands. Battle legendary creatures and uncover ancient secrets."
    },
    {
        id: 3,
        title: "FIFA Ultimate 24",
        category: "sports",
        price: 69.99,
        originalPrice: null,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
        rating: 4.5,
        reviews: 8721,
        badge: null,
        description: "The most realistic football simulation ever created. Build your ultimate team and dominate the pitch."
    },
    {
        id: 4,
        title: "Speed Racer GT",
        category: "racing",
        price: 39.99,
        originalPrice: 54.99,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
        rating: 4.6,
        reviews: 1567,
        badge: "sale",
        description: "Feel the adrenaline rush as you race through stunning tracks. Customize your cars and become the ultimate champion."
    },
    {
        id: 5,
        title: "Lost Horizon",
        category: "adventure",
        price: 44.99,
        originalPrice: null,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg",
        rating: 4.7,
        reviews: 2134,
        badge: "new",
        description: "Explore uncharted territories and solve ancient mysteries. A breathtaking adventure awaits."
    },
    {
        id: 6,
        title: "Battlefield Elite",
        category: "action",
        price: 54.99,
        originalPrice: 69.99,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg",
        rating: 4.4,
        reviews: 5643,
        badge: "sale",
        description: "Experience the most intense warfare simulation. Command your troops and conquer the battlefield."
    },
    {
        id: 7,
        title: "Mystic Realms Online",
        category: "rpg",
        price: 29.99,
        originalPrice: null,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
        rating: 4.3,
        reviews: 12453,
        badge: null,
        description: "Join millions of players in this massive multiplayer RPG. Create your legend in a vast magical world."
    },
    {
        id: 8,
        title: "NBA Champions 2024",
        category: "sports",
        price: 59.99,
        originalPrice: null,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg",
        rating: 4.6,
        reviews: 3421,
        badge: "new",
        description: "Take to the court with the most authentic basketball experience. Build your dynasty and win championships."
    },
    {
        id: 9,
        title: "Need for Velocity",
        category: "racing",
        price: 49.99,
        originalPrice: 64.99,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1262540/header.jpg",
        rating: 4.5,
        reviews: 2876,
        badge: "hot",
        description: "Push the limits of speed in this high-octane racing experience. Outrun the law and claim victory."
    },
    {
        id: 10,
        title: "Assassin's Legacy",
        category: "action",
        price: 59.99,
        originalPrice: null,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/812140/header.jpg",
        rating: 4.8,
        reviews: 7832,
        badge: null,
        description: "Step into the shadows and become the ultimate assassin. A story of revenge and redemption awaits."
    },
    {
        id: 11,
        title: "Wilderness Explorer",
        category: "adventure",
        price: 34.99,
        originalPrice: 44.99,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
        rating: 4.4,
        reviews: 1923,
        badge: "sale",
        description: "Survive the wild and discover hidden treasures. Nature is beautiful but deadly."
    },
    {
        id: 12,
        title: "Empire Builders",
        category: "strategy",
        price: 39.99,
        originalPrice: null,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/594570/header.jpg",
        rating: 4.7,
        reviews: 4521,
        badge: null,
        description: "Build your civilization from the ground up. Conquer enemies and write your own history."
    }
];

// ============================================
// STATE
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let displayedProducts = 8;
let currentFilter = 'all';

// ============================================
// DOM ELEMENTS
// ============================================
const loader = document.getElementById('loader');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const productsGrid = document.getElementById('productsGrid');
const dealsGrid = document.getElementById('dealsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const cartItems = document.getElementById('cartItems');
const wishlistItems = document.getElementById('wishlistItems');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const cartTotal = document.getElementById('cartTotal');
const overlay = document.getElementById('overlay');
const productModal = document.getElementById('productModal');
const authModal = document.getElementById('authModal');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMore');
const newsletterForm = document.getElementById('newsletterForm');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);

    // Initialize
    renderProducts();
    renderDeals();
    updateCartUI();
    updateWishlistUI();
    initCountdown();
    initParticles();
    initScrollAnimations();
    initCounterAnimations();
});

// ============================================
// HEADER SCROLL
// ============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE MENU
// ============================================
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts() {
    let filteredProducts = products;
    
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(p => p.category === currentFilter);
    }
    
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }
    
    const productsToShow = filteredProducts.slice(0, displayedProducts);
    
    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Show/hide load more button
    if (displayedProducts >= filteredProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
    
    // Add event listeners
    addProductEventListeners();
}

function createProductCard(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-badges">
                    ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="product-action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="product-action-btn quick-view-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-content">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <span class="product-stars">${stars}</span>
                    <span>${product.rating} (${product.reviews.toLocaleString()})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="current">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function addProductEventListeners() {
    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            addToCart(productId);
        });
    });
    
    // Wishlist
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            toggleWishlist(productId);
        });
    });
    
    // Quick view
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            openProductModal(productId);
        });
    });
}

// ============================================
// RENDER DEALS
// ============================================
function renderDeals() {
    const dealProducts = products.filter(p => p.originalPrice).slice(0, 3);
    
    dealsGrid.innerHTML = dealProducts.map(product => {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        return `
            <div class="deal-card product-card">
                <div class="deal-discount">-${discount}%</div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-content">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-footer">
                        <div class="product-price">
                            <span class="current">$${product.price.toFixed(2)}</span>
                            <span class="original">$${product.originalPrice.toFixed(2)}</span>
                        </div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Re-add event listeners for deals
    dealsGrid.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            addToCart(productId);
        });
    });
}

// ============================================
// FILTER PRODUCTS
// ============================================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        displayedProducts = 8;
        renderProducts();
    });
});

// Category cards
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            }
        });
        currentFilter = category;
        displayedProducts = 8;
        renderProducts();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================================
// SEARCH
// ============================================
searchInput.addEventListener('input', () => {
    displayedProducts = 8;
    renderProducts();
});

// ============================================
// LOAD MORE
// ============================================
loadMoreBtn.addEventListener('click', () => {
    displayedProducts += 4;
    renderProducts();
});

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showToast('Item added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ============================================
// WISHLIST FUNCTIONS
// ============================================
function toggleWishlist(productId) {
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showToast('Removed from wishlist');
    } else {
        const product = products.find(p => p.id === productId);
        wishlist.push(product);
        showToast('Added to wishlist!');
    }
    
    saveWishlist();
    updateWishlistUI();
    renderProducts(); // Re-render to update heart icons
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlist();
    updateWishlistUI();
    renderProducts();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
    wishlistCount.textContent = wishlist.length;
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-heart"></i>
                <p>Your wishlist is empty</p>
            </div>
        `;
    } else {
        wishlistItems.innerHTML = wishlist.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="btn btn-sm btn-primary" onclick="addToCart(${item.id}); removeFromWishlist(${item.id});">
                            Add to Cart
                        </button>
                        <button class="remove-btn" onclick="removeFromWishlist(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ============================================
// SIDEBAR TOGGLES
// ============================================
document.getElementById('cartBtn').addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
});

document.getElementById('closeCart').addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

document.getElementById('wishlistBtn').addEventListener('click', () => {
    wishlistSidebar.classList.add('active');
    overlay.classList.add('active');
});

document.getElementById('closeWishlist').addEventListener('click', () => {
    wishlistSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    wishlistSidebar.classList.remove('active');
    nav.classList.remove('active');
    productModal.classList.remove('active');
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

// ============================================
// PRODUCT MODAL
// ============================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="modal-info">
            <span class="product-category">${product.category}</span>
            <h2>${product.title}</h2>
            <div class="product-rating">
                <span class="product-stars">${stars}</span>
                <span>${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
            </div>
            <p class="description">${product.description}</p>
            <div class="modal-price">
                <span class="current">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}); productModal.classList.remove('active'); overlay.classList.remove('active');">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Add to Cart</span>
                </button>
                <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                    <span>Wishlist</span>
                </button>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    overlay.classList.add('active');
}

document.getElementById('closeModal').addEventListener('click', () => {
    productModal.classList.remove('active');
    overlay.classList.remove('active');
});

// ============================================
// AUTH MODAL
// ============================================
document.getElementById('userBtn').addEventListener('click', () => {
    authModal.classList.add('active');
    overlay.classList.add('active');
});

document.getElementById('closeAuthModal').addEventListener('click', () => {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        
        tab.classList.add('active');
        const formId = tab.dataset.tab === 'login' ? 'loginForm' : 'registerForm';
        document.getElementById(formId).classList.add('active');
    });
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Login successful!');
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Account created successfully!');
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

// ============================================
// CHECKOUT
// ============================================
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    showToast('Redirecting to checkout...');
    // In a real app, this would redirect to a checkout page
});

// ============================================
// NEWSLETTER
// ============================================
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    newsletterForm.reset();
});

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function initCountdown() {
    // Set deal end date (7 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    function updateTimer() {
        const now = new Date();
        const diff = endDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ============================================
// PARTICLES
// ============================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(0, 240, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.category-card, .product-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ============================================
// COUNTER ANIMATIONS
// ============================================
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, stepTime);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            nav.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
