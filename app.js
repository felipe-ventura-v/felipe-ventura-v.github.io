// Datos de la tienda
const categories = [
    { id: 'all', name: 'Todos los Productos', icon: 'grid' },
    { id: 'movilidad-infantil', name: 'Movilidad Infantil', icon: 'bike' },
    { id: 'juguetes', name: 'Juguetes', icon: 'gamepad' },
    { id: 'deportes', name: 'Deportes y Outdoor', icon: 'trophy' },
    { id: 'bebes', name: 'Bebés y Maternidad', icon: 'baby' },
    { id: 'educativos', name: 'Juegos Educativos', icon: 'book' },
    { id: 'all', name: 'Todos los Productos', icon: 'grid' },
    { id: 'movilidad-infantil', name: 'Movilidad Infantil', icon: 'bike' }
];

const products = [
    {
        id: 1,
        name: 'Scooter azul naranja',
        description: 'Scooter con ruedas luminosas LED, manillar ajustable en altura, base antideslizante. Ideal para niños de 3 a 10 años.',
        price: 85.00,
        image: 'scooter_azul_naranja.png',
        category: 'movilidad-infantil',
        stock: 15
    },
    {
        id: 2,
        name: 'Scooter rojo celeste',
        description: 'Scooter profesional con sistema de plegado rápido, rodamientos ABEC-7, perfecto para niños y adolescentes.',
        price: 85.00,
        image: 'scooter_rojo_celeste.png',
        category: 'movilidad-infantil',
        stock: 10
    },
    {
        id: 3,
        name: 'Scooter rosa amarillo',
        description: 'Triciclo resistente con pedales antideslizantes, asiento ergonómico y canasta trasera.',
        price: 85.00,
        image: 'scooter_rosa_amarillo.png',
        category: 'movilidad-infantil',
        stock: 1
    },
        {
        id: 4,
        name: 'Scooter verde celeste',
        description: 'Triciclo resistente con pedales antideslizantes, asiento ergonómico y canasta trasera.',
        price: 85.00,
        image: 'scooter_verde_celeste.png',
        category: 'movilidad-infantil',
        stock: 10
    }
];

// Estado de la aplicación
let cart = [];
let selectedCategory = 'all';
let searchQuery = '';

// Iconos SVG
const icons = {
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>',
    gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><path d="M12 17h.01"/><path d="M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    baby: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>'
};

// Funciones de utilidad
const formatPrice = (price) => {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN'
    }).format(price);
};

const getCategoryName = (categoryId) => {
    const names = {
        'movilidad-infantil': 'Movilidad Infantil',
        'juguetes': 'Juguetes',
        'deportes': 'Deportes y Outdoor',
        'bebes': 'Bebés y Maternidad',
        'educativos': 'Juegos Educativos'
    };
    return names[categoryId] || categoryId;
};

// Renderizar categorías
const renderCategories = () => {
    const nav = document.getElementById('categoriesNav');
    nav.innerHTML = categories.map(cat => `
        <button 
            class="category-btn ${selectedCategory === cat.id ? 'active' : ''}" 
            data-category="${cat.id}"
        >
            ${icons[cat.icon]}
            ${cat.name}
        </button>
    `).join('');

    // Agregar event listeners
    nav.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedCategory = btn.dataset.category;
            renderCategories();
            renderProducts();
            
            // Ocultar menú en pantallas pequeñas después de seleccionar
            const categoriesNav = document.getElementById('categoriesNav');
            if (window.innerWidth < 640) {
                categoriesNav.classList.remove('active');
            }
        });
    });
};

// Renderizar productos
const renderProducts = () => {
    const grid = document.getElementById('productsGrid');
    const noProducts = document.getElementById('noProducts');
    const categoryTitle = document.getElementById('categoryTitle');
    const productCount = document.getElementById('productCount');

    // Filtrar productos
    const filtered = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = searchQuery === '' || 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Actualizar título y contador
    const catName = categories.find(c => c.id === selectedCategory)?.name || 'Productos';
    categoryTitle.textContent = catName;
    productCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'producto' : 'productos'} disponibles`;

    // Mostrar u ocultar mensaje de no productos
    if (filtered.length === 0) {
        grid.style.display = 'none';
        noProducts.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noProducts.style.display = 'none';

    // Renderizar productos
    grid.innerHTML = filtered.map(product => {
        const inCart = cart.find(item => item.product.id === product.id);
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.stock < 5 ? '<span class="product-badge">¡Últimas unidades!</span>' : ''}
                </div>
                <div class="product-info">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price-row">
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <span class="product-stock">Stock: ${product.stock}</span>
                    </div>
                    <button class="btn-add-cart ${inCart ? 'added' : ''}" onclick="addToCart(${product.id})">
                        ${inCart ? icons.check + ' En el carrito' : icons.plus + ' Agregar al carrito'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
};

// Agregar al carrito
const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCartUI();
    renderProducts();
    showToast('Producto agregado al carrito');
};

// Actualizar cantidad en el carrito
const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.product.id === productId);
    if (item) {
        item.quantity = quantity;
    }

    updateCartUI();
    renderProducts();
};

// Eliminar del carrito
const removeFromCart = (productId) => {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartUI();
    renderProducts();
};

// Calcular totales
const getCartTotals = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    return { totalItems, totalPrice };
};

// Actualizar UI del carrito
const updateCartUI = () => {
    const { totalItems, totalPrice } = getCartTotals();

    // Actualizar contador en el header
    document.getElementById('cartCount').textContent = totalItems;

    // Actualizar contador en el modal
    document.getElementById('cartItemsCount').textContent = 
        `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en tu carrito`;

    // Renderizar items del carrito
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                </div>
                <h3>Tu carrito está vacío</h3>
                <p>Agrega algunos productos para comenzar</p>
                <button class="btn-shop" onclick="closeCartModal()">Seguir comprando</button>
            </div>
        `;
        document.getElementById('cartFooter').style.display = 'none';
    } else {
        cartContent.innerHTML = `
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.product.image}" alt="${item.product.name}">
                        </div>
                        <div class="cart-item-info">
                            <h4 class="cart-item-name">${item.product.name}</h4>
                            <p class="cart-item-price">${formatPrice(item.product.price)}</p>
                            <div class="cart-item-controls">
                                <div class="quantity-controls">
                                    <button class="btn-quantity" onclick="updateQuantity(${item.product.id}, ${item.quantity - 1})">
                                        ${icons.minus}
                                    </button>
                                    <span class="quantity-value">${item.quantity}</span>
                                    <button class="btn-quantity" onclick="updateQuantity(${item.product.id}, ${item.quantity + 1})">
                                        ${icons.plus}
                                    </button>
                                </div>
                                <button class="btn-remove" onclick="removeFromCart(${item.product.id})">
                                    ${icons.trash}
                                </button>
                            </div>
                        </div>
                        <div class="cart-item-subtotal">
                            ${formatPrice(item.product.price * item.quantity)}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('cartFooter').style.display = 'block';
    }

    // Actualizar totales
    document.getElementById('cartSubtotal').textContent = formatPrice(totalPrice);
    document.getElementById('cartTotal').textContent = formatPrice(totalPrice);

    // Actualizar checkout
    document.getElementById('checkoutProductCount').textContent = totalItems;
    document.getElementById('checkoutTotal').textContent = formatPrice(totalPrice);
};

// Modal del carrito
const openCartModal = () => {
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeCartModal = () => {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = '';
};

// Modal de checkout
const openCheckoutModal = () => {
    closeCartModal();
    document.getElementById('checkoutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeCheckoutModal = () => {
    document.getElementById('checkoutModal').classList.remove('active');
    document.body.style.overflow = '';
};

// Toast notification
const showToast = (message) => {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
};

// Validación del formulario
const validateForm = () => {
    const fields = {
        name: document.getElementById('customerName'),
        dni: document.getElementById('customerDni'),
        phone: document.getElementById('customerPhone'),
        region: document.getElementById('customerRegion'),
        province: document.getElementById('customerProvince'),
        district: document.getElementById('customerDistrict'),
        address: document.getElementById('customerAddress'),
        email: document.getElementById('customerEmail')
    };

    const errors = {};

    // Validar nombre
    if (!fields.name.value.trim()) {
        errors.name = 'El nombre es requerido';
    }

    // Validar DNI
    if (!fields.dni.value.trim()) {
        errors.dni = 'El DNI es requerido';
    } else if (!/^\d{8}$/.test(fields.dni.value)) {
        errors.dni = 'El DNI debe tener 8 dígitos';
    }

    // Validar teléfono
    if (!fields.phone.value.trim()) {
        errors.phone = 'El teléfono es requerido';
    } else if (!/^\d{9}$/.test(fields.phone.value)) {
        errors.phone = 'El teléfono debe tener 9 dígitos';
    }

    // Validar región
    if (!fields.region.value.trim()) {
        errors.region = 'La región es requerida';
    }

    // Validar provincia
    if (!fields.province.value.trim()) {
        errors.province = 'La provincia es requerida';
    }

    // Validar distrito
    if (!fields.district.value.trim()) {
        errors.district = 'El distrito es requerido';
    }

    // Validar dirección
    if (!fields.address.value.trim()) {
        errors.address = 'La dirección es requerida';
    }

    // Validar email
    if (!fields.email.value.trim()) {
        errors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) {
        errors.email = 'El correo no es válido';
    }

    // Mostrar errores
    Object.keys(fields).forEach(key => {
        const errorEl = document.getElementById(`error${key.charAt(0).toUpperCase() + key.slice(1)}`);
        const inputEl = fields[key];
        
        if (errors[key]) {
            errorEl.textContent = errors[key];
            inputEl.classList.add('error');
        } else {
            errorEl.textContent = '';
            inputEl.classList.remove('error');
        }
    });

    return Object.keys(errors).length === 0;
};

// Construir mensaje de WhatsApp
const buildWhatsAppMessage = () => {
    const { totalPrice } = getCartTotals();
    const fields = {
        name: document.getElementById('customerName').value,
        dni: document.getElementById('customerDni').value,
        phone: document.getElementById('customerPhone').value,
        email: document.getElementById('customerEmail').value,
        region: document.getElementById('customerRegion').value,
        province: document.getElementById('customerProvince').value,
        district: document.getElementById('customerDistrict').value,
        address: document.getElementById('customerAddress').value
    };

    let message = '🛒 *NUEVO PEDIDO - FunKids*\n';
    message += '═══════════════════\n\n';

    message += '*📦 PRODUCTOS:*\n';
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.product.name}\n`;
        message += `   Cantidad: ${item.quantity}\n`;
        message += `   Precio unitario: ${formatPrice(item.product.price)}\n`;
        message += `   Subtotal: ${formatPrice(item.product.price * item.quantity)}\n\n`;
    });

    message += '═══════════════════\n';
    message += `*💰 TOTAL: ${formatPrice(totalPrice)}*\n\n`;

    message += '*👤 DATOS DEL CLIENTE:*\n';
    message += `Nombre: ${fields.name}\n`;
    message += `DNI: ${fields.dni}\n`;
    message += `Teléfono: ${fields.phone}\n`;
    message += `Correo: ${fields.email}\n\n`;

    message += '*📍 DIRECCIÓN DE ENVÍO:*\n';
    message += `Región: ${fields.region}\n`;
    message += `Provincia: ${fields.province}\n`;
    message += `Distrito: ${fields.district}\n`;
    message += `Dirección: ${fields.address}\n\n`;

    message += '═══════════════════\n';
    message += '✅ Pedido realizado desde la tienda online\n';
    message += `📅 Fecha: ${new Date().toLocaleDateString('es-PE')}`;

    return message;
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar categorías y productos
    renderCategories();
    renderProducts();

    // Buscador
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Botón del carrito
    document.getElementById('cartBtn').addEventListener('click', openCartModal);

    // Botón de menú móvil
    document.getElementById('menuToggle').addEventListener('click', () => {
        const categoriesNav = document.getElementById('categoriesNav');
        categoriesNav.classList.toggle('active');
    });

    // Cerrar modal del carrito
    document.getElementById('closeCartModal').addEventListener('click', closeCartModal);

    // Continuar al checkout
    document.getElementById('btnContinue').addEventListener('click', openCheckoutModal);

    // Volver al carrito
    document.getElementById('btnBackToCart').addEventListener('click', () => {
        closeCheckoutModal();
        openCartModal();
    });

    // Cerrar modales al hacer clic fuera
    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeCartModal();
    });

    document.getElementById('checkoutModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeCheckoutModal();
    });

    // Solo permitir números en DNI y teléfono
    document.getElementById('customerDni').addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    document.getElementById('customerPhone').addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Enviar pedido por WhatsApp
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const message = buildWhatsAppMessage();
        const phoneNumber = '970263125';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Limpiar carrito y formulario
        cart = [];
        updateCartUI();
        document.getElementById('checkoutForm').reset();
        closeCheckoutModal();

        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
    });
});

// Hacer funciones globales para los onclick en HTML
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.closeCartModal = closeCartModal;
