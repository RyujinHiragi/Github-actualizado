const PRODUCTS = [
  {
    id: 'mango01',
    name: 'Mango deshidratado',
    description: 'Dulce, sin aditivos. Perfecto para snacks.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6e2b9f1a1b7b4e2b5c9a',
    gallery: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6e2b9f1a1b7b4e2b5c9a',
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=ij45'
    ],
    basePrice: 12000,
    presentations: [
      {label: 'Bolsa', multiplier: 1},
      {label: 'Frasco', multiplier: 2.2},
      {label: 'Caja', multiplier: 3.8}
    ],
    sizes: [
      {label: '50g', multiplier: 1},
      {label: '100g', multiplier: 1.9},
      {label: '200g', multiplier: 3.6}
    ],
    flavors: ['Original','Chili','Lima']
  },
  {
    id: 'platano01',
    name: 'Plátano deshidratado',
    description: 'Crujiente y natural, ideal para el desayuno.',
    image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e38e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b2c3d4e5f6a7b8c9d0e',
    gallery: [
      'https://images.unsplash.com/photo-1574226516831-e1dff420e38e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b2c3d4e5f6a7b8c9d0e'
    ],
    basePrice: 9000,
    presentations: [
      {label: 'Bolsa', multiplier: 1},
      {label: 'Frasco', multiplier: 2.1}
    ],
    sizes: [
      {label: '50g', multiplier: 1},
      {label: '120g', multiplier: 2.2}
    ],
    flavors: ['Original','Canela']
  },
  {
    id: 'manzana01',
    name: 'Manzana deshidratada',
    description: 'Ligera y refrescante, sin azúcar añadida.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a4b5c6d7e8f9a0b1c2d',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a4b5c6d7e8f9a0b1c2d'
    ],
    basePrice: 10000,
    presentations: [
      {label: 'Bolsa', multiplier: 1},
      {label: 'Caja', multiplier: 2.3}
    ],
    sizes: [
      {label: '60g', multiplier: 1},
      {label: '150g', multiplier: 2.5}
    ],
    flavors: ['Original','Canela']
  },
  {
    id: 'mixtura3',
    name: 'Mixtura — Tres Fruticas',
    description: 'Combinación equilibrada de tres frutas seleccionadas para un snack variado.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
    basePrice: 22000,
    presentations: [
      {label: 'Pequeña', multiplier: 1},
      {label: 'Mediana', multiplier: 1.9},
      {label: 'Grande', multiplier: 3.5}
    ],
    flavors: []
  },
  {
    id: 'solo-fruta',
    name: 'Presentación — Solo Fruta',
    description: 'Presentación pura: solo la fruta deshidratada, sin mezclas ni sabores añadidos.',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ef01',
    basePrice: 8000,
    presentations: [
      {label: '50g', multiplier: 1},
      {label: '100g', multiplier: 1.8}
    ],
    flavors: []
  },
  {
    id: 'mixtura-todas',
    name: 'Mixtura — Todas las Frutas',
    description: 'Selección premium con todas nuestras frutas para una experiencia completa.',
    image: 'https://images.unsplash.com/photo-1502741126161-b048400d7ba7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=gh23',
    basePrice: 35000,
    presentations: [
      {label: 'Mediana', multiplier: 1},
      {label: 'Grande', multiplier: 1.9}
    ],
    flavors: []
  },
  {
    id: 'tomates01',
    name: 'Tomates deshidratados',
    description: 'Tomates secos, intensos y versátiles para platos o snacks.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ij45',
    basePrice: 14000,
    presentations: [
      {label: '80g', multiplier: 1},
      {label: '160g', multiplier: 1.9}
    ],
    flavors: []
  },
  {
    id: 'rollos01',
    name: 'Rollos de Frutas',
    description: 'Rollos suaves y masticables hechos 100% de fruta.',
    image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=kl67',
    basePrice: 11000,
    presentations: [
      {label: 'Unidad', multiplier: 1},
      {label: 'Pack 5', multiplier: 4.2}
    ],
    flavors: []
  },
  {
    id: 'infusiones01',
    name: 'Infusiones — Frutos y Hierbas',
    description: 'Mezclas para infusión: manzanilla, menta y combinaciones frutales.',
    image: 'https://images.unsplash.com/photo-1505575967451-8b2810b2e0b8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=mn89',
    basePrice: 9000,
    presentations: [
      {label: 'Bolsa 20g', multiplier: 1},
      {label: 'Bolsa 50g', multiplier: 2.3}
    ],
    flavors: ['Manzanilla','Menta','Jengibre']
  }
];

// Utilities
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Cart state
let cart = [];
const CART_KEY = 'gosen_cart_v1';

function formatPrice(n){
  return new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
}

function loadCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    cart = raw ? JSON.parse(raw) : [];
  }catch(e){cart=[]}
}

function saveCart(){
  localStorage.setItem(CART_KEY,JSON.stringify(cart));
  renderCartCount();
}

function renderProducts(){
  const grid = $('#productsGrid');
  if(!grid) return; // nothing to render on product detail pages
  grid.innerHTML = '';
  PRODUCTS.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <a href="/products/${p.id}.html"><img src="${p.image}" alt="${p.name}"></a>
      <div class="product-meta">
        <div>
          <div class="product-name"><a href="/products/${p.id}.html">${p.name}</a></div>
          <div class="product-desc">${p.description}</div>
        </div>
        <div class="price" data-base="${p.basePrice}">${formatPrice(p.basePrice)}</div>
      </div>
      <div class="product-actions">
        <select class="select presentation"></select>
        <input class="qty" type="number" min="1" value="1" style="width:64px">
        <button class="btn add">Agregar</button>
      </div>
    `;

    const sel = card.querySelector('.presentation');
    p.presentations.forEach(opt=>{
      const o = document.createElement('option');
      o.value = JSON.stringify(opt);
      o.textContent = opt.label;
      sel.appendChild(o);
    });

    const priceEl = card.querySelector('.price');
    function updatePrice(){
      const opt = JSON.parse(sel.value);
      const qty = Number(card.querySelector('.qty').value)||1;
      const price = Math.round(p.basePrice * opt.multiplier * qty);
      priceEl.textContent = formatPrice(price);
      priceEl.dataset.current = price;
    }

    sel.addEventListener('change', updatePrice);
    card.querySelector('.qty').addEventListener('input', updatePrice);
    updatePrice();

    card.querySelector('.add').addEventListener('click', ()=>{
      const opt = JSON.parse(sel.value);
      const qty = Math.max(1, Number(card.querySelector('.qty').value)||1);
      const unitPrice = Math.round(p.basePrice * opt.multiplier);
      addToCart({id:p.id,name:p.name,image:p.image,presentation:opt.label,unitPrice,qty});
    });

    grid.appendChild(card);
  });
}

function addToCart(item){
  const found = cart.find(c=>c.id===item.id && c.presentation===item.presentation);
  if(found){
    found.qty += item.qty;
    found.subtotal = found.unitPrice * found.qty;
  } else {
    cart.push({...item, subtotal: item.unitPrice * item.qty});
  }
  saveCart();
  renderCart();
  openCart();
}

function renderCart(){
  const container = $('#cartItems');
  container.innerHTML = '';
  let total = 0;
  cart.forEach((c,idx)=>{
    total += c.subtotal;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${c.image}" alt="${c.name}">
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><strong>${c.name}</strong><div style="font-size:0.9rem;color:var(--muted)">${c.presentation}</div></div>
          <div>${formatPrice(c.subtotal)}</div>
        </div>
        <div style="margin-top:0.4rem;display:flex;gap:0.6rem;align-items:center">
          <input type="number" min="1" value="${c.qty}" data-idx="${idx}" class="cart-qty" style="width:72px;padding:0.35rem;border-radius:8px;border:1px solid #e6e6e6">
          <button data-idx="${idx}" class="icon-btn remove">Eliminar</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
  $('#cartTotal').textContent = formatPrice(total);

  // attach handlers
  $$( '.cart-qty').forEach(inp=>inp.addEventListener('change', (e)=>{
    const idx = Number(e.target.dataset.idx);
    const val = Math.max(1, Number(e.target.value)||1);
    cart[idx].qty = val;
    cart[idx].subtotal = cart[idx].unitPrice * cart[idx].qty;
    saveCart();
    renderCart();
  }));

  $$('.remove').forEach(btn=>btn.addEventListener('click', (e)=>{
    const idx = Number(e.target.dataset.idx);
    cart.splice(idx,1);
    saveCart();
    renderCart();
  }));
}

function renderCartCount(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  $('#cartCount').textContent = count;
}

// UI: cart panel
function openCart(){
  $('#cartPanel').classList.add('open');
  $('#overlay').classList.add('show');
}
function closeCart(){
  $('#cartPanel').classList.remove('open');
  $('#overlay').classList.remove('show');
}

// Payments
function openPayment(){
  $('#paymentModal').classList.add('open');
  $('#overlay').classList.add('show');
}
function closePayment(){
  $('#paymentModal').classList.remove('open');
  $('#overlay').classList.remove('show');
  $('#paymentResult').innerHTML = '';
}

function simulatePayment(method){
  const total = cart.reduce((s,i)=>s+i.subtotal,0);
  const el = $('#paymentResult');

  if(method==='transfer'){
    el.innerHTML = `<p>Realice la transferencia a:</p>
      <p><strong>BANCO:</strong> Bancolombia<br><strong>Cuenta:</strong> 1234567890<br><strong>Tipo:</strong> Ahorros<br><strong>Titular:</strong> Gosén S.A.S</p>
      <p>Monto: <strong>${formatPrice(total)}</strong></p>`;
    return;
  }

  // Si existe Payments.process (intento de integración real), usarla
  if(window.Payments && typeof window.Payments.process === 'function'){
    el.innerHTML = `<p>Intentando procesar pago mediante ${method}…</p>`;
    window.Payments.process(method, total, cart).then(res=>{
      if(res && res.redirect){
        // abrir la url de checkout
        window.open(res.redirect,'_blank');
        el.innerHTML = `<p>Redirigiendo a pasarela de pago…</p>`;
      } else if(res && res.simulated){
        el.innerHTML = `<p style="color:orange">${res.message} — pago simulado.</p>`;
        setTimeout(()=>{ cart = []; saveCart(); renderCart(); closePayment(); closeCart(); },1000);
      } else if(res && res.success){
        el.innerHTML = `<p style="color:green">Pago completado. Gracias.</p>`;
        cart = []; saveCart(); renderCart(); setTimeout(()=>{closePayment();closeCart();},900);
      } else {
        el.innerHTML = `<p style="color:orange">Respuesta inesperada del servidor.</p>`;
      }
    }).catch(err=>{
      el.innerHTML = `<p style="color:red">Error al procesar pago: ${err.message}</p>`;
    });
    return;
  }

  // si no hay integración, simular
  el.innerHTML = `<p>Procesando pago mediante ${method}…</p>`;
  setTimeout(()=>{
    el.innerHTML = `<p style="color:green">Pago simulado exitoso. Gracias por tu compra.</p>`;
    cart = [];
    saveCart();
    renderCart();
    setTimeout(()=>{closePayment();closeCart();},1200);
  },1200);
}

// Event wiring
function init(){
  loadCart();
  renderProducts();
  renderCart();
  renderCartCount();

  // header actions (guardados: algunas páginas no incluyen todos los elementos)
  const cartBtn = $('#cartBtn'); if(cartBtn) cartBtn.addEventListener('click', openCart);
  const closeCartBtn = $('#closeCart'); if(closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  const overlayEl = $('#overlay'); if(overlayEl) overlayEl.addEventListener('click', ()=>{closeCart();closePayment();});

  // checkout
  const checkoutBtn = $('#checkoutBtn'); if(checkoutBtn) checkoutBtn.addEventListener('click', ()=>{
    if(cart.length===0){ alert('El carrito está vacío'); return; }
    openPayment();
  });
  const closePaymentBtn = $('#closePayment'); if(closePaymentBtn) closePaymentBtn.addEventListener('click', closePayment);

  // payment options (nodeList safe to iterate even if empty)
  const paymentButtons = $$('.payment-options button'); if(paymentButtons && paymentButtons.length){
    paymentButtons.forEach(b=>b.addEventListener('click',(e)=>{
      const method = e.target.dataset.method;
      simulatePayment(method);
    }));
  }

  // WhatsApp quick
  const whatsappBtn = $('#whatsappBtn'); if(whatsappBtn) whatsappBtn.addEventListener('click', ()=>{
    const phone = '57YOURNUMBER';
    const text = encodeURIComponent('Hola Gosén, quiero más información');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  });

  // menu toggle for mobile
  const menuToggle = $('#menuToggle'); if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
      const nav = $('#mainNav');
      if(!nav) return;
      if(nav.style.display==='flex') nav.style.display=''; else nav.style.display='flex';
    });
  }

  // render product page if present
  renderProductPageIfNeeded();
}

window.addEventListener('DOMContentLoaded', init);

// Render single product page when a product detail page exists
function renderProductPageIfNeeded(){
  const container = $('#productPage');
  if(!container) return;
  const pid = container.dataset.productId;
  const p = PRODUCTS.find(x=>x.id===pid);
  if(!p){ container.innerHTML = '<p>Producto no encontrado</p>'; return; }

  container.innerHTML = `
    <div class="container">
      <a href="/index.html">← Volver</a>
      <div class="product-detail" style="display:grid;grid-template-columns:1fr 360px;gap:1.5rem;margin-top:1rem">
        <div>
          <div class="gallery">
            <div class="gallery-main"><img id="gMain" src="${p.gallery && p.gallery[0] ? p.gallery[0] : p.image}" alt="${p.name}"></div>
            <div class="gallery-thumbs">
              ${(p.gallery||[p.image]).map(src=>`<button class="thumb"><img src="${src}" alt=""></button>`).join('')}
            </div>
          </div>
          <h1 style="margin-top:1rem">${p.name}</h1>
          <p style="color:var(--muted)">${p.description}</p>
        </div>
        <aside class="pd-aside">
          <div style="display:flex;flex-direction:column;gap:0.6rem">
            <div><strong>Precio:</strong> <span id="pdPrice">${formatPrice(p.basePrice)}</span></div>
            <label>Presentación</label>
            <div id="pdPresentations" class="selector-group"></div>
            ${p.flavors && p.flavors.length?`<label>Sabor</label><div id="pdFlavors" class="selector-group"></div>`:''}
            <label>Tamaño</label>
            <div id="pdSizes" class="selector-group"></div>
            <label>Unidades</label>
            <input id="pdQty" type="number" min="1" value="1" class="qty">
            <button id="pdAdd" class="btn primary">Agregar al carrito</button>
          </div>
        </aside>
      </div>

      <section style="margin-top:1.6rem">
        <h3>Productos relacionados</h3>
        <div id="related" class="products-grid"></div>
      </section>
    </div>
  `;

  const sel = $('#pdPresentation');
  // build presentation buttons
  const presCont = $('#pdPresentations');
  p.presentations.forEach((opt, i)=>{
    const btn = document.createElement('button'); btn.className='btn selector'; btn.textContent = opt.label; btn.dataset.opt = JSON.stringify(opt);
    if(i===0) btn.classList.add('active');
    presCont.appendChild(btn);
  });

  // flavors
  if(p.flavors && p.flavors.length){
    const fcont = $('#pdFlavors');
    p.flavors.forEach((f,i)=>{ const b=document.createElement('button'); b.className='btn selector'; b.textContent=f; if(i===0) b.classList.add('active'); b.dataset.flavor=f; fcont.appendChild(b); });
  }

  // sizes
  const scont = $('#pdSizes');
  (p.sizes||[{label:'Standard',multiplier:1}]).forEach((sz,i)=>{ const b=document.createElement('button'); b.className='btn selector'; b.textContent=sz.label; b.dataset.size = JSON.stringify(sz); if(i===0) b.classList.add('active'); scont.appendChild(b); });

  function getSelected(){
    const psel = presCont.querySelector('.selector.active');
    const ssel = scont.querySelector('.selector.active');
    const fsel = document.querySelector('#pdFlavors .selector.active');
    const pres = psel ? JSON.parse(psel.dataset.opt) : p.presentations[0];
    const size = ssel ? JSON.parse(ssel.dataset.size) : (p.sizes? p.sizes[0] : {multiplier:1,label:'Std'});
    const flavor = fsel ? fsel.dataset.flavor : (p.flavors && p.flavors[0] ? p.flavors[0] : null);
    return {pres,size,flavor};
  }

  function update(){
    const {pres,size} = getSelected();
    const qty = Number($('#pdQty').value)||1;
    // combine multipliers
    const price = Math.round(p.basePrice * pres.multiplier * size.multiplier);
    $('#pdPrice').textContent = formatPrice(price * qty);
    $('#pdPrice').dataset.current = price * qty;
    $('#pdPrice').dataset.unit = price;
  }

  // selector clicks
  container.querySelectorAll('.selector').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const group = e.target.parentElement;
      // remove active in group
      Array.from(group.querySelectorAll('.selector')).forEach(x=>x.classList.remove('active'));
      e.target.classList.add('active');
      update();
    });
  });

  $('#pdQty').addEventListener('input', update);
  update();

  $('#pdAdd').addEventListener('click', ()=>{
    const {pres,size,flavor} = getSelected();
    const qty = Math.max(1, Number($('#pdQty').value)||1);
    const unitPrice = Math.round(p.basePrice * pres.multiplier * size.multiplier);
    const presentation = pres.label;
    const sizeLabel = size.label;
    const meta = flavor? `${presentation} • ${sizeLabel} • ${flavor}` : `${presentation} • ${sizeLabel}`;
    addToCart({id:p.id,name:p.name,image:p.image,presentation,unitPrice,qty,meta});
  });

  // gallery thumbs
  container.querySelectorAll('.gallery-thumbs .thumb').forEach(btn=>btn.addEventListener('click', (e)=>{ const img = btn.querySelector('img'); $('#gMain').src = img.src; }));

  // related products
  const rel = $('#related');
  rel.innerHTML = '';
  const related = PRODUCTS.filter(x=>x.id!==p.id).slice(0,3);
  related.forEach(r=>{
    const card = document.createElement('div'); card.className='product-card';
    card.innerHTML = `<a href="/products/${r.id}.html"><img src="${r.image}" alt="${r.name}"></a><div class="product-meta"><div><div class="product-name"><a href="/products/${r.id}.html">${r.name}</a></div></div><div class="price">${formatPrice(r.basePrice)}</div></div>`;
    rel.appendChild(card);
  });
}
