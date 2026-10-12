const starterProducts = [
  {
    id: 1,
    name: 'Kampala Graphic Print T-Shirt',
    category: 'clothes',
    tag: 'Featured',
    price: 65000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: 'Kampala Signature Print Jacket',
    category: 'clothes',
    tag: 'Designer label',
    price: 180000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Kampala Statement Skirt Set',
    category: 'clothes',
    tag: 'Kampala collection',
    price: 145000,
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Prints_over_Kampala.jpg'
  },
  {
    id: 4,
    name: 'Kitenge Dress from a Kampala Shop',
    category: 'clothes',
    tag: 'Kitenge edit',
    price: 125000,
    rating: 4.9,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Kitengi_dress_on_display_in_a_shop.JPG/960px-Kitengi_dress_on_display_in_a_shop.JPG'
  },
  {
    id: 5,
    name: 'Oversized Kampala Streetwear T-Shirt',
    category: 'clothes',
    tag: 'Teen pick',
    price: 68000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Kitenge Evening Dress',
    category: 'clothes',
    tag: 'Ugandan style',
    price: 175000,
    rating: 4.9,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Kitengi_dress_on_display.JPG/960px-Kitengi_dress_on_display.JPG'
  },
  {
    id: 9,
    name: 'Campus Crossbody Bag',
    category: 'bags',
    tag: 'Teen pick',
    price: 55000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 10,
    name: 'Kampala Daypack',
    category: 'bags',
    tag: 'Campus pick',
    price: 85000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 11,
    name: 'Wireless Studio Headphones',
    category: 'electronics',
    tag: 'Teen pick',
    price: 65000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 12,
    name: 'Pocket Bluetooth Speaker',
    category: 'electronics',
    tag: 'Campus pick',
    price: 45000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 13,
    name: 'Everyday Smartwatch',
    category: 'electronics',
    tag: 'Teen pick',
    price: 75000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 14,
    name: 'Wireless Earbuds',
    category: 'electronics',
    tag: 'Campus pick',
    price: 48000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 15,
    name: 'Kampala Street Sneakers',
    category: 'clothes',
    tag: 'Teen pick',
    price: 95000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 27,
    name: 'Armani-Inspired Two-Piece Suit',
    category: 'clothes',
    tag: 'Designer-inspired',
    price: 195000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 28,
    name: 'Gucci-Inspired Signature Tee',
    category: 'clothes',
    tag: 'Campus pick',
    price: 55000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 29,
    name: 'Louis Vuitton-Inspired Print Jacket',
    category: 'clothes',
    tag: 'Designer-inspired',
    price: 110000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 30,
    name: 'Calvin Klein-Inspired Minimal Hoodie',
    category: 'clothes',
    tag: 'Teen pick',
    price: 75000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 31,
    name: 'Straight-Leg Denim Jeans',
    category: 'clothes',
    tag: 'Campus pick',
    price: 65000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 32,
    name: "Women's Kampala Occasion Dress",
    category: 'clothes',
    tag: "Ladies' edit",
    price: 105000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 33,
    name: "Women's Tailored Blazer Set",
    category: 'clothes',
    tag: 'Workwear',
    price: 145000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    name: 'Masaka Barkcloth Artisan Craft',
    category: 'crafts',
    tag: 'Made in Uganda',
    price: 48000,
    rating: 4.7,
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Back_cloth_preparation_from_a_fig_tree_in_Uganda_09.jpg/960px-Back_cloth_preparation_from_a_fig_tree_in_Uganda_09.jpg'
  },
  {
    id: 8,
    name: 'Uganda Arabica Coffee, 250 g',
    category: 'food',
    tag: 'Farm fresh',
    price: 25000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 16,
    name: 'KFC-Style Crispy Chicken & Chips',
    category: 'food',
    tag: 'Restaurant-inspired',
    price: 25000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 17,
    name: 'Cafe Javas-Style Chicken Club Sandwich',
    category: 'food',
    tag: 'Restaurant-inspired',
    price: 28000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 18,
    name: 'Loaded Beef Burger & Chips',
    category: 'food',
    tag: 'Kampala favourite',
    price: 30000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 19,
    name: 'Kampala Rolex Combo',
    category: 'food',
    tag: 'Local favourite',
    price: 25000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 20,
    name: 'Cafe Javas-Style Iced Coffee',
    category: 'food',
    tag: 'Cold brew',
    price: 25000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 21,
    name: 'Fresh Passion Fruit Juice',
    category: 'food',
    tag: 'Fresh drink',
    price: 25000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 22,
    name: 'Kampala Six-Panel Cap',
    category: 'accessories',
    tag: 'Campus pick',
    price: 30000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 23,
    name: 'Everyday UV Sunglasses',
    category: 'accessories',
    tag: 'Teen pick',
    price: 45000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 24,
    name: 'Campus Reusable Bottle',
    category: 'accessories',
    tag: 'Everyday pick',
    price: 35000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 34,
    name: 'Classic Leather Belt',
    category: 'accessories',
    tag: 'Everyday accessory',
    price: 45000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1664286074176-5206ee5dc878?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 25,
    name: 'Wireless Gaming Controller',
    category: 'electronics',
    tag: 'Gaming pick',
    price: 90000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 26,
    name: 'Refurbished Android Smartphone',
    category: 'electronics',
    tag: 'Budget tech',
    price: 250000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
  }
];

const listingStorageKey = 'luxecart-listings';
const favoriteStorageKey = 'luxecart-favorites';
const accountStorageKey = 'luxecart-accounts';
const sessionStorageKey = 'luxecart-session';
const messagesStorageKey = 'luxecart-messages';
const legacyUsdToUgxRate = 4027.13515;
const deliveryFeeAmount = 8000;
const freeDeliveryThreshold = 100000;
let sellerProducts = loadSellerProducts();
let products = [...starterProducts, ...sellerProducts];
let cart = [];
let activeFilter = 'all';
let searchTerm = '';
let favoritesOnly = false;
let favorites = new Set(JSON.parse(localStorage.getItem(favoriteStorageKey) || '[]').map(String));
let currentUser = loadCurrentUser();
let accountMode = 'register';
let conversations = loadConversations();
let activeConversationId = null;
const filters = document.querySelectorAll('.category');
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const totalEl = document.getElementById('total');
const cartPanel = document.getElementById('cartPanel');
const resultCount = document.getElementById('resultCount');
const listingDialog = document.getElementById('listingDialog');
const listingForm = document.getElementById('listingForm');
const listingCategory = listingForm.elements.category;
const listingPrice = listingForm.elements.price;
const toast = document.getElementById('toast');
const accountDialog = document.getElementById('accountDialog');
const accountForm = document.getElementById('accountForm');
const messagesPanel = document.getElementById('messagesPanel');

function loadCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(sessionStorageKey) || 'null');
  } catch {
    return null;
  }
}

function loadConversations() {
  try {
    const saved = JSON.parse(localStorage.getItem(messagesStorageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function loadAccounts() {
  try {
    const saved = JSON.parse(localStorage.getItem(accountStorageKey) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

async function hashPassword(password, salt) {
  const bytes = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function updateAccountButton() {
  const button = document.getElementById('openAccount');
  button.textContent = currentUser ? `${currentUser.name} · Sign out` : 'Create account';
  button.setAttribute('aria-label', currentUser ? `Sign out ${currentUser.name}` : 'Create account or sign in');
}

function openAccountDialog() {
  if (!accountDialog.open) accountDialog.showModal();
}

function requireAccount(action) {
  if (currentUser) return true;
  showToast(`Create an account or sign in to ${action}`);
  openAccountDialog();
  return false;
}

function saveConversations() {
  try {
    localStorage.setItem(messagesStorageKey, JSON.stringify(conversations));
  } catch {
    showToast('Could not save this conversation in browser storage');
  }
}

function loadSellerProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem(listingStorageKey) || '[]');
    if (!Array.isArray(saved)) return [];
    const migrated = saved.map((product) => {
      const price = product.currency === 'UGX'
        ? Number(product.price)
        : Math.round((Number(product.price) * legacyUsdToUgxRate) / 500) * 500;
      const localizedPrice = product.category === 'food' ? Math.max(25000, price) : price;
      if (product.currency === 'UGX' && localizedPrice === Number(product.price)) return product;
      return {
        ...product,
        price: localizedPrice,
        currency: 'UGX'
      };
    });
    if (migrated.some((product, index) => product !== saved[index])) {
      localStorage.setItem(listingStorageKey, JSON.stringify(migrated));
    }
    return migrated;
  } catch {
    return [];
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function validImageSource(value) {
  return /^https?:\/\//i.test(value) || /^data:image\//i.test(value);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('visible'), 2800);
}

function currency(value) {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    maximumFractionDigits: 0
  }).format(value);
}

function renderProducts() {
  const filtered = products.filter((product) => {
    const matchesFilter = activeFilter === 'all'
      || (activeFilter === 'featured'
        ? product.tag === 'Featured' || product.tag === 'Trending' || product.tag === 'Teen pick' || product.tag === 'Campus pick'
        : product.category === activeFilter);
    const matchesSearch = !searchTerm
      || `${product.name} ${product.seller || ''} ${product.category}`.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch && (!favoritesOnly || favorites.has(String(product.id)));
  });

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'item' : 'items'}`;

  if (!filtered.length) {
    productGrid.innerHTML = '<p class="empty-results">No products found. Try another search or category.</p>';
    return;
  }

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <button class="favorite-btn ${favorites.has(String(product.id)) ? 'saved' : ''}" data-favorite-id="${escapeHTML(product.id)}" aria-label="${favorites.has(String(product.id)) ? 'Remove from' : 'Add to'} favorites">♡</button>
            <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" />
          </div>
          <div class="product-body">
            <span class="product-tag">${product.tag}</span>
            <h3>${escapeHTML(product.name)}</h3>
            <p class="seller-name">${escapeHTML(product.seller || 'LuxeCart edit')}</p>
            <div class="product-meta">
              <div>
                <div class="price">${currency(product.price)}</div>
                <div class="rating">★ ${product.rating}</div>
              </div>
              <div class="product-actions">
                <button class="add-btn" data-id="${escapeHTML(product.id)}">Add to bag</button>
                ${product.seller && currentUser && product.seller.toLowerCase() === currentUser.name.toLowerCase() ? '' : `<button class="message-seller" data-message-id="${escapeHTML(product.id)}" aria-label="Message ${escapeHTML(product.seller || 'seller')} about ${escapeHTML(product.name)}">Message seller</button>`}
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join('');

}

function addToCart(productId) {
  const product = products.find((item) => String(item.id) === String(productId));
  if (!product) return;

  const existingItem = cart.find((item) => String(item.id) === String(productId));

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => String(item.id) === String(productId));
  if (index === -1) return;

  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    subtotalEl.textContent = currency(0);
    document.getElementById('deliveryFee').textContent = currency(deliveryFeeAmount);
    totalEl.textContent = currency(deliveryFeeAmount);
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" />
          <div>
            <h4>${escapeHTML(item.name)}</h4>
            <p>Qty: ${item.quantity}</p>
            <strong>${currency(item.price * item.quantity)}</strong>
          </div>
          <button data-remove-id="${escapeHTML(item.id)}">Remove</button>
        </div>
      `
    )
    .join('');

  document.querySelectorAll('[data-remove-id]').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(button.dataset.removeId));
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const foodOnlyOrder = cart.every((item) => item.category === 'food');
  const delivery = foodOnlyOrder || subtotal >= freeDeliveryThreshold ? 0 : deliveryFeeAmount;
  const total = subtotal + delivery;
  subtotalEl.textContent = currency(subtotal);
  document.getElementById('deliveryFee').textContent = currency(delivery);
  totalEl.textContent = currency(total);
}

function setActiveCategoryTab(selectedTab) {
  activeFilter = selectedTab.dataset.filter;
  filters.forEach((tab) => {
    const selected = tab === selectedTab;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  productGrid.setAttribute('aria-labelledby', selectedTab.id);
  document.getElementById('foodMenuNote').hidden = selectedTab.dataset.filter !== 'food';
  document.getElementById('clothingMenuNote').hidden = selectedTab.dataset.filter !== 'clothes';
}

function activateCategoryTab(selectedTab) {
  setActiveCategoryTab(selectedTab);
  favoritesOnly = false;
  const favoritesToggle = document.getElementById('favoritesToggle');
  favoritesToggle.classList.remove('active');
  favoritesToggle.setAttribute('aria-pressed', 'false');
  renderProducts();
}

filters.forEach((button, index) => {
  button.addEventListener('click', () => activateCategoryTab(button));
  button.addEventListener('keydown', (event) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % filters.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + filters.length) % filters.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = filters.length - 1;
    else return;

    event.preventDefault();
    filters[nextIndex].focus();
    activateCategoryTab(filters[nextIndex]);
  });
});

document.querySelectorAll('[data-nav-filter]').forEach((link) => {
  link.addEventListener('click', () => {
    const selectedTab = [...filters].find((button) => button.dataset.filter === link.dataset.navFilter);
    if (selectedTab) activateCategoryTab(selectedTab);
  });
});

document.getElementById('searchInput').addEventListener('input', (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProducts();
});

document.getElementById('favoritesToggle').addEventListener('click', (event) => {
  favoritesOnly = !favoritesOnly;
  event.currentTarget.classList.toggle('active', favoritesOnly);
  event.currentTarget.setAttribute('aria-pressed', String(favoritesOnly));
  renderProducts();
});

productGrid.addEventListener('click', (event) => {
  const addButton = event.target.closest('.add-btn');
  if (addButton) {
    addToCart(addButton.dataset.id);
    showToast('Added to your bag');
    return;
  }

  const messageButton = event.target.closest('[data-message-id]');
  if (messageButton) {
    const product = products.find((item) => String(item.id) === messageButton.dataset.messageId);
    if (product) openConversation(product);
    return;
  }

  const favoriteButton = event.target.closest('[data-favorite-id]');
  if (!favoriteButton) return;
  const productId = favoriteButton.dataset.favoriteId;
  favorites.has(productId) ? favorites.delete(productId) : favorites.add(productId);
  localStorage.setItem(favoriteStorageKey, JSON.stringify([...favorites]));
  renderProducts();
});

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = cartPanel.querySelector('.close-btn');

cartBtn.addEventListener('click', () => cartPanel.classList.remove('hidden'));
closeCartBtn.addEventListener('click', () => cartPanel.classList.add('hidden'));

const openListing = () => {
  if (!requireAccount('sell an item')) return;
  listingForm.elements.seller.value = currentUser.name;
  listingForm.elements.seller.readOnly = true;
  listingDialog.showModal();
};

function updateListingPriceMinimum() {
  const foodListing = listingCategory.value === 'food';
  listingPrice.min = foodListing ? '25000' : '1000';
  listingPrice.placeholder = foodListing ? '25000' : '85000';
}

listingCategory.addEventListener('change', updateListingPriceMinimum);
updateListingPriceMinimum();

document.getElementById('openListing').addEventListener('click', openListing);
document.getElementById('heroSell').addEventListener('click', openListing);
document.getElementById('closeListing').addEventListener('click', () => listingDialog.close());
listingDialog.addEventListener('click', (event) => {
  if (event.target === listingDialog) listingDialog.close();
});

function setAccountMode(mode) {
  accountMode = mode;
  const registration = mode === 'register';
  const nameField = document.getElementById('accountNameField');
  nameField.hidden = !registration;
  accountForm.elements.name.required = registration;
  accountForm.elements.password.autocomplete = registration ? 'new-password' : 'current-password';
  document.getElementById('accountTitle').textContent = registration ? 'Join LuxeCart' : 'Welcome back';
  document.getElementById('accountSubmit').innerHTML = registration
    ? 'Create my account <span aria-hidden="true">↗</span>'
    : 'Sign in <span aria-hidden="true">↗</span>';
  document.querySelectorAll('[data-account-mode]').forEach((button) => {
    const selected = button.dataset.accountMode === mode;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
  });
}

document.getElementById('openAccount').addEventListener('click', () => {
  if (currentUser) {
    currentUser = null;
    localStorage.removeItem(sessionStorageKey);
    updateAccountButton();
    renderProducts();
    showToast('You have signed out');
    return;
  }
  openAccountDialog();
});

document.getElementById('closeAccount').addEventListener('click', () => accountDialog.close());
accountDialog.addEventListener('click', (event) => {
  if (event.target === accountDialog) accountDialog.close();
});
document.querySelectorAll('[data-account-mode]').forEach((button) => {
  button.addEventListener('click', () => setAccountMode(button.dataset.accountMode));
});

accountForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(accountForm);
  const email = String(formData.get('email')).trim().toLowerCase();
  const password = String(formData.get('password'));
  const accounts = loadAccounts();

  try {
    let account;
    if (accountMode === 'register') {
      if (accounts.some((item) => item.email === email)) {
        showToast('An account with that email already exists. Sign in instead.');
        return;
      }
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const saltHex = Array.from(salt, (byte) => byte.toString(16).padStart(2, '0')).join('');
      account = {
        name: String(formData.get('name')).trim(),
        email,
        salt: saltHex,
        passwordHash: await hashPassword(password, saltHex)
      };
      localStorage.setItem(accountStorageKey, JSON.stringify([...accounts, account]));
    } else {
      account = accounts.find((item) => item.email === email);
      if (!account || account.passwordHash !== await hashPassword(password, account.salt)) {
        showToast('Email or password did not match');
        return;
      }
    }

    currentUser = { name: account.name, email: account.email };
    localStorage.setItem(sessionStorageKey, JSON.stringify(currentUser));
    updateAccountButton();
    renderProducts();
    accountForm.reset();
    accountDialog.close();
    showToast(`Welcome${accountMode === 'register' ? ' to LuxeCart' : ' back'}, ${currentUser.name}`);
  } catch {
    showToast('Account storage is unavailable in this browser');
  }
});

function openConversation(product) {
  if (!requireAccount('message a seller')) return;
    const conversationId = `${product.id}:${currentUser.email}`;
  let conversation = conversations.find((item) => item.id === conversationId);
  if (!conversation) {
    conversation = {
      id: conversationId,
        productId: String(product.id),
      productName: product.name,
      seller: product.seller || 'LuxeCart edit',
        sellerEmail: product.sellerEmail || loadAccounts().find((item) => item.name.toLowerCase() === (product.seller || '').toLowerCase())?.email || '',
      buyerEmail: currentUser.email,
        buyerName: currentUser.name,
      messages: [],
      updatedAt: Date.now()
    };
    conversations.unshift(conversation);
    saveConversations();
  }
  activeConversationId = conversationId;
  renderConversations();
  renderActiveConversation();
  messagesPanel.classList.remove('hidden');
}

function renderConversations() {
  const list = document.getElementById('conversationList');
    const visible = conversations.filter((item) => item.buyerEmail === currentUser?.email || item.sellerEmail === currentUser?.email);
  if (!visible.length) {
    list.innerHTML = '<p class="conversation-empty">No conversations yet.</p>';
    return;
  }
  list.innerHTML = [...visible]
    .sort((first, second) => second.updatedAt - first.updatedAt)
    .map((item) => `
      <button class="conversation-item ${item.id === activeConversationId ? 'active' : ''}" type="button" data-conversation-id="${escapeHTML(item.id)}">
          <strong>${escapeHTML(item.buyerEmail === currentUser.email ? item.seller : item.buyerName)}</strong>
        <span>${escapeHTML(item.productName)}</span>
        <small>${escapeHTML(item.messages.at(-1)?.text || 'Start a conversation')}</small>
      </button>
    `)
    .join('');
}

function renderActiveConversation() {
  const conversation = conversations.find((item) => item.id === activeConversationId
    && (item.buyerEmail === currentUser?.email || item.sellerEmail === currentUser?.email));
  const empty = document.getElementById('conversationEmpty');
  const active = document.getElementById('conversationActive');
  empty.classList.toggle('hidden', Boolean(conversation));
  active.classList.toggle('hidden', !conversation);
  if (!conversation) return;

  const partner = conversation.buyerEmail === currentUser.email ? conversation.seller : conversation.buyerName;
  document.getElementById('conversationTitle').textContent = `${partner} · ${conversation.productName}`;
  document.getElementById('messageThread').innerHTML = conversation.messages
    .map((message) => `<p class="message-bubble ${message.senderEmail === currentUser.email ? 'sent' : 'received'}"><strong>${escapeHTML(message.senderName)}</strong>${escapeHTML(message.text)}<time>${escapeHTML(new Date(message.time).toLocaleString())}</time></p>`)
    .join('');
  document.getElementById('messageThread').scrollTop = document.getElementById('messageThread').scrollHeight;
}

document.getElementById('openInbox').addEventListener('click', () => {
  if (!requireAccount('open messages')) return;
  activeConversationId = null;
  renderConversations();
  renderActiveConversation();
  messagesPanel.classList.remove('hidden');
});
document.getElementById('closeInbox').addEventListener('click', () => messagesPanel.classList.add('hidden'));
document.getElementById('conversationList').addEventListener('click', (event) => {
  const item = event.target.closest('[data-conversation-id]');
  if (!item) return;
  activeConversationId = item.dataset.conversationId;
  renderConversations();
  renderActiveConversation();
});
document.getElementById('messageForm').addEventListener('submit', (event) => {
  event.preventDefault();
    const conversation = conversations.find((item) => item.id === activeConversationId
      && (item.buyerEmail === currentUser?.email || item.sellerEmail === currentUser?.email));
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  if (!conversation || !text) return;
    conversation.messages.push({ text, senderEmail: currentUser.email, senderName: currentUser.name, time: Date.now() });
  conversation.updatedAt = Date.now();
  saveConversations();
  input.value = '';
  renderConversations();
  renderActiveConversation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    cartPanel.classList.add('hidden');
    messagesPanel.classList.add('hidden');
  }
});

listingForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(listingForm);
  const category = String(formData.get('category'));
  if (category === 'food' && Number(formData.get('price')) < 25000) {
    showToast('Food listings start at UGX 25,000');
    return;
  }
  const photo = formData.get('photo');
  let image = String(formData.get('image') || '').trim();

  if (photo.size) {
    if (photo.size > 1024 * 1024) {
      showToast('Please choose an image smaller than 1 MB');
      return;
    }
    image = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(photo);
    }).catch(() => '');
  }

  if (!validImageSource(image)) {
    showToast('Add a valid photo URL or choose an image');
    return;
  }

  const product = {
    id: `seller-${Date.now()}`,
    name: String(formData.get('name')).trim(),
    category: String(formData.get('category')),
    tag: 'Just listed',
    price: Number(formData.get('price')),
    currency: 'UGX',
    rating: 5,
    image,
    seller: String(formData.get('seller')).trim()
  };

  sellerProducts = [product, ...sellerProducts];
  try {
    localStorage.setItem(listingStorageKey, JSON.stringify(sellerProducts));
  } catch {
    sellerProducts.shift();
    showToast('Could not save this listing. Try a smaller photo.');
    return;
  }

  products = [...starterProducts, ...sellerProducts];
  listingForm.reset();
  listingDialog.close();
  setActiveCategoryTab(document.getElementById('tab-everything'));
  favoritesOnly = false;
  document.getElementById('favoritesToggle').classList.remove('active');
  document.getElementById('favoritesToggle').setAttribute('aria-pressed', 'false');
  renderProducts();
  showToast('Your product is now listed');
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.checkout-btn').addEventListener('click', () => {
  if (!cart.length) {
    showToast('Your bag is empty');
    return;
  }
  if (!requireAccount('complete checkout')) return;
  showToast('Checkout is a demo. Connect a payment provider to accept orders.');
});

setAccountMode('register');
updateAccountButton();
renderProducts();
renderCart();
