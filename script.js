const products = [
  { id:1, title:"Urso com Macacão Azul", image:"images/urso_macacao_azul.jpeg", price:80.00, desc:"Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p>"},
  { id:2, title:"Urso com Macacão Bege", image:"images/urso_macacao_bege.jpeg", price:80.00, desc:"Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p>"},
  { id:3, title:"Tartaruga", image:"images/tartaruga.jpeg", price:60.00, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 25 cm.</p>"},
  { id:4, title:"Vaquinha", image:"images/vaca.jpeg", price:50.00, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 18 cm.</p>"},
  { id:5, title:"Coelho com Macacão Azul", image:"images/coelho_macacao_azul.jpeg", price:80.00, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p>"},
  { id:6, title:"Coelho com Vestido Rosa", image:"images/coelho_macacao_rosa.jpeg", price:80.00, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p>"},
  { id:7, title:"Chaveiro de Baleia", image:"images/chaveiro_baleia.jpeg", price:15.00, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 5 cm.</p>"},
  { id:8, title:"Chaveiro de Tartaruga", image:"images/chaveiro_tartaruga.jpeg", price:20.00, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 10 cm.</p>"}
];

const produtosGrid = document.getElementById('produtosGrid');

function formatPrice(p){
  return p ? p.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) : "Preço a combinar";
}

function renderProducts(){
  produtosGrid.innerHTML = '';
  products.forEach(prod=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}" loading="lazy" />
      <h4>${prod.title}</h4>
      <p>${prod.desc.substring(0,60)}...</p>
      <div class="price">${formatPrice(prod.price)}</div>
      <div style="margin-top:8px">
        <button class="btn view-btn" data-id="${prod.id}">Ver detalhes</button>
      </div>
    `;
    produtosGrid.appendChild(card);
  });

  document.querySelectorAll('.view-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = Number(e.currentTarget.getAttribute('data-id'));
      openModal(id);
    });
  });
}

// Modal
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

function openModal(id){
  const prod = products.find(p=>p.id===id);
  if(!prod) return;
  modalImage.src = prod.image;
  modalImage.alt = prod.title;
  modalTitle.textContent = prod.title;
  modalDesc.innerHTML = `${prod.desc}<br><span class="price">${formatPrice(prod.price)}</span>`;
  modal.setAttribute('aria-hidden','false');
}

modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
modal.addEventListener('click', (e)=> { if(e.target === modal) modal.setAttribute('aria-hidden','true') });

// Hamburger menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
hamburgerBtn.addEventListener('click', ()=>{
  navMenu.classList.toggle('active');
});

// Initialize
document.getElementById('year').textContent = new Date().getFullYear();
renderProducts();
