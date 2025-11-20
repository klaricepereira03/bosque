const products = [
  { id:1, title:"Urso com Macacão Azul", image:"images/urso_macacao_azul.jpeg", price:65.90, desc:"Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p><p>🧸 Um clássico cheio de ternura, perfeito para presentear com carinho e estilo.</p>"},
  { id:2, title:"Urso com Macacão Bege", image:"images/urso_macacao_bege.jpeg", price:65.90, desc:"Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p><p>🧸 Delicado e encantador, ideal para celebrar momentos especiais com doçura.</p>"},
  { id:3, title:"Tartaruga", image:"images/tartaruga.jpeg", price:62.50, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 25 cm.</p><p>🐢 Macia e delicada, traz um toque de fofura e tranquilidade a qualquer ambiente.</p>"},
  { id:4, title:"Vaquinha", image:"images/vaca.jpeg", price:54.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 18 cm.</p><p>🐮 Cheia de charme e personalidade, uma companhia fofa que conquista corações.</p>"},
  { id:5, title:"Coelho com Macacão Azul", image:"images/coelho_macacao_azul.jpeg", price:65.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p><p>🐰 Maciez e encanto em cada detalhe, feito para espalhar alegria e aconchego.</p>"},
  { id:6, title:"Coelho com Vestido Rosa", image:"images/coelho_macacao_rosa.jpeg", price:65.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 20 cm.</p><p>🐰 Um mimo irresistível, perfeito para quem ama delicadeza e carinho.</p>"},
  { id:7, title:"Capivara de Mochilinha", image:"images/capivara.jpeg", price:54.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 15 cm.</p><p> Uma capivara encantadora, carregando uma mochilinha de tartaruga nas costas.</p>"},
  { id:8, title:"Raposa", image:"images/raposa.jpeg", price:54.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 17 cm.</p><p> 🦊 Com um olhar doce e traços delicados, a raposa é uma peça cheia de encanto e personalidade.</p>"},
  { id:9, title:"Groot", image:"images/groot.jpeg", price:36.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 12 cm.</p><p> 🌱 Inspirado no personagem mais carismático das galáxias, o Baby Groot é cheio de personalidade e fofura.</p>"},
  { id:10, title:"Coruja", image:"images/corujal.jpeg", price:54.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 11 cm.</p><p> 🦉 Com tons vibrantes de laranja, esta corujinha leva encanto e alegria para qualquer ambiente.</p>"}, 
  { id:11, title:"Coruja", image:"images/corujab.jpeg", price:54.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 11 cm.</p><p> 🦉 Em tons suaves e aconchegantes, a coruja bege transmite calma e delicadeza.</p>"}, 
  { id:12, title:"Chaveiro de Baleia", image:"images/chaveiro_baleia.jpeg", price:22.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 6 cm.</p><p>🐋 Pequeno no tamanho, grande no charme, um acessório fofo para colocar na bolsa ou mochila.</p>"},
  { id:13, title:"Chaveiro de Tartaruga", image:"images/chaveiro_tartaruga.jpeg", price:22.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 9 cm.</p><p>🐢 Detalhes encantadores e cheios de personalidade, ideal para quem ama o mar e a natureza.</p>"},
  { id:14, title:"Patos", image:"images/patos.jpeg", price:24.90, desc:"<p>Produzido em crochê com técnica de amigurumi.</p><p>Tamanho aproximado: 8 cm.</p><p> 🦆 Um chaveiro de patinho super fofo, perfeito para decorar bolsas, mochilas ou chaves.</p>"}, 
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

