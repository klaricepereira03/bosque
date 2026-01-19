// ===================================
// Bosque dos Fios - Professional JavaScript
// ===================================

// Product Data with Categories
const products = [
  {
    id: 1,
    title: "Tartaruga",
    image: "images/tartaruga.jpeg",
    price: 62.50,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 25 cm.</p><p>🐢 Macia e delicada, traz um toque de fofura e tranquilidade a qualquer ambiente.</p>"
  },
  {
    id: 2,
    title: "Vaquinhas",
    image: "images/vacas.jpeg",
    price: 54.90,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 18 cm.</p><p>🐮 Cheias de charme e personalidade, uma companhia fofa que conquista corações.</p>"
  },
  {
    id: 3,
    title: "Coelhos",
    image: "images/coelhos.jpeg",
    price: 54.90,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p><p>🐰 Um mimo irresistível, perfeito para quem ama delicadeza e carinho.</p>"
  },
  {
    id: 4,
    title: "Capivara de Mochilinha",
    image: "images/capivara1.jpeg",
    price: 54.90,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 15 cm.</p><p>🦫 Uma capivara encantadora, carregando uma mochilinha de tartaruga nas costas.</p>"
  },
  {
    id: 5,
    title: "Raposa",
    image: "images/raposa.jpeg",
    price: 54.90,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 17 cm.</p><p>🦊 Com um olhar doce e traços delicados, a raposa é uma peça cheia de encanto e personalidade.</p>"
  },
  {
    id: 6,
    title: "Groot",
    image: "images/groot.jpeg",
    price: 36.90,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 12 cm.</p><p>🌱 Inspirado no personagem mais carismático das galáxias, o Baby Groot é cheio de personalidade e fofura.</p>"
  },
  {
    id: 7,
    title: "Gatos",
    image: "images/gatos.jpeg",
    price: 54.90,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 18 cm.</p><p>🐱 Gatinhos adoráveis e cheios de charme, perfeitos para alegrar qualquer ambiente.</p>"
  },
  {
    id: 8,
    title: "Calopsita",
    image: "images/calopsita.jpeg",
    price: 54.90,
    category: "amigurumi",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 16 cm.</p><p>🦜 Uma calopsita encantadora com cores vibrantes e detalhes delicados.</p>"
  },
  {
    id: 9,
    title: "Chaveiro de Baleia",
    image: "images/chaveiro_baleia1.jpeg",
    price: 22.90,
    category: "chaveiro",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 6 cm.</p><p>🐋 Pequeno no tamanho, grande no charme, um acessório fofo para colocar na bolsa ou mochila.</p>"
  },
  {
    id: 10,
    title: "Chaveiro de Tartaruga",
    image: "images/chaveiro_tartaruga.jpeg",
    price: 22.90,
    category: "chaveiro",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 9 cm.</p><p>🐢 Detalhes encantadores e cheios de personalidade, ideal para quem ama o mar e a natureza.</p>"
  },
  {
    id: 11,
    title: "Chaveiro de Patinhos",
    image: "images/patos.jpeg",
    price: 24.90,
    category: "chaveiro",
    desc: "<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 8 cm.</p><p>🦆 Um chaveiro de patinho super fofo, perfeito para decorar bolsas, mochilas ou chaves.</p>"
  },
];

// ===================================
// State Management
// ===================================
let currentFilter = 'all';

// ===================================
// DOM Elements
// ===================================
const produtosGrid = document.getElementById('produtosGrid');
const modal = document.getElementById('productModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalClose = document.getElementById('modalClose');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const filterButtons = document.querySelectorAll('.filter-btn');

// ===================================
// Utility Functions
// ===================================
function formatPrice(price) {
  return price ? price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "Preço a combinar";
}

function getFilteredProducts() {
  if (currentFilter === 'all') {
    return products;
  }
  return products.filter(prod => prod.category === currentFilter);
}

function stripHtml(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

// ===================================
// Render Products
// ===================================
function renderProducts() {
  const filteredProducts = getFilteredProducts();

  produtosGrid.innerHTML = '';

  if (filteredProducts.length === 0) {
    produtosGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">Nenhum produto encontrado nesta categoria.</p>';
  } else {
    filteredProducts.forEach((prod) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-duration', '600');

      const shortDesc = stripHtml(prod.desc).substring(0, 100);

      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${prod.image}" alt="${prod.title}" class="product-image" loading="lazy" />
        </div>
        <div class="product-info">
          <h4 class="product-title">${prod.title}</h4>
          <p class="product-description">${shortDesc}...</p>
          <div class="product-footer">
            <span class="product-price">${formatPrice(prod.price)}</span>
            <button class="btn-details" data-id="${prod.id}">Ver detalhes</button>
          </div>
        </div>
      `;

      produtosGrid.appendChild(card);
    });
  }

  // Reinitialize AOS for new elements
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }

  // Add event listeners to detail buttons
  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.currentTarget.getAttribute('data-id'));
      openModal(id);
    });
  });
}

// ===================================
// Filter Functionality
// ===================================
function setupFilters() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.getAttribute('data-category');

      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      // Update current filter and re-render
      currentFilter = category;
      renderProducts();
    });
  });
}

// ===================================
// Modal Functions
// ===================================
function openModal(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  modalImage.src = prod.image;
  modalImage.alt = prod.title;
  modalTitle.textContent = prod.title;
  modalDesc.innerHTML = prod.desc;
  modalPrice.textContent = formatPrice(prod.price);
  modal.setAttribute('aria-hidden', 'false');

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Modal event listeners
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

// ===================================
// Hamburger Menu
// ===================================
hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburgerBtn.classList.remove('active');
  });
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Header Scroll Effect
// ===================================
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
  }

  lastScroll = currentScroll;
});

// ===================================
// Initialize Application
// ===================================
function init() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Setup filters
  setupFilters();

  // Render initial products
  renderProducts();

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ===================================
// Performance Optimization
// ===================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  // Observe images after render
  setTimeout(() => {
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }, 100);
}
