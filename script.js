(function(){
  var narrow=window.matchMedia('(max-width:900px)').matches;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var save=navigator.connection&&navigator.connection.saveData;
  document.documentElement.classList.toggle('perf-lite', narrow||reduce||save);
})();

// Never let a runtime error "break" the site on mobile.
// If something throws, degrade to perf-lite (no heavy effects) and keep UI working.
(function(){
  function degrade(){
    try{ document.documentElement.classList.add('perf-lite'); }catch(e){}
  }
  window.addEventListener('error', function(){ degrade(); }, true);
  window.addEventListener('unhandledrejection', function(){ degrade(); }, true);
})();

try{
  var __mz=document.documentElement;
  var __L=localStorage.getItem('mazag_lang');
  if(__L==='ar'){__mz.setAttribute('lang','ar');__mz.setAttribute('dir','rtl');}
}catch(__e){}

// Custom cursor — own script so dots work even if later scripts error
(function(){
  if(window.matchMedia('(hover:none)').matches)return;
  const cur=document.getElementById('cur'),curR=document.getElementById('cur-r');
  if(!cur||!curR)return;
  const hoverSel='a,button,.m-card,.about-img-wrap,.a-dot';
  let cx=0,cy=0,rx=0,ry=0,inside=false;
  window.addEventListener('mousemove',e=>{
    cx=e.clientX;cy=e.clientY;
    const now=!!e.target.closest(hoverSel);
    if(now!==inside){
      inside=now;
      if(now){
        cur.style.width='18px';cur.style.height='18px';
        cur.style.background='var(--yellow)';
        curR.style.width='50px';curR.style.height='50px';
        curR.style.opacity='1';
      }else{
        cur.style.width='10px';cur.style.height='10px';
        cur.style.background='var(--orange)';
        curR.style.width='34px';curR.style.height='34px';
        curR.style.opacity='.5';
      }
    }
  },{passive:true});
  (function anim(){
    cur.style.transform='translate(calc('+cx+'px - 50%),calc('+cy+'px - 50%))';
    rx+=(cx-rx)*.1;ry+=(cy-ry)*.1;
    curR.style.transform='translate(calc('+rx+'px - 50%),calc('+ry+'px - 50%))';
    requestAnimationFrame(anim);
  })();
})();

var perfLite=document.documentElement.classList.contains('perf-lite');
var hasGSAP = (typeof window !== 'undefined' && typeof window.gsap !== 'undefined');
var hasScrollTrigger = (typeof window !== 'undefined' && typeof window.ScrollTrigger !== 'undefined');
if(hasGSAP && hasScrollTrigger){
  window.gsap.registerPlugin(window.ScrollTrigger);
}
function whenIdle(fn,t){
  t=t||2000;
  if(window.requestIdleCallback)requestIdleCallback(fn,{timeout:t});
  else setTimeout(fn,Math.min(t,1500));
}

// HERO PREMIUM ANIMATIONS (guarded: site should still work without GSAP)
const spotlight = document.getElementById('hero-spotlight');
const heroEl = document.getElementById('hero');
const chefWrap = document.querySelector('.hero-chef-wrap');
setTimeout(() => {
  if (!hasGSAP) return;
  if (!heroEl || !chefWrap || !spotlight || !window.matchMedia('(hover: hover)').matches) return;
  heroEl.addEventListener('mousemove', e => {
    const r = heroEl.getBoundingClientRect();
    spotlight.style.left = (e.clientX - r.left) + 'px';
    spotlight.style.top  = (e.clientY - r.top)  + 'px';
    const cx2 = (e.clientX / window.innerWidth  - .5) * 2;
    const cy2 = (e.clientY / window.innerHeight - .5) * 2;
    window.gsap.to(chefWrap, {
      x: cx2 * 14,
      y: cy2 * 8,
      duration: 1.2,
      ease: 'power2.out'
    });
    window.gsap.to('.hero-glow-ring', { x: cx2*20, duration:1.5, ease:'power2.out' });
  }, {passive: true});
  heroEl.addEventListener('mouseleave', () => {
    window.gsap.to(chefWrap, { x:0, y:0, duration:1.5, ease:'elastic.out(1,.5)' });
    window.gsap.to('.hero-glow-ring', { x:0, duration:1.5, ease:'power2.out' });
  });
}, 900);

(function spawnSparks() {
  if (perfLite || window.matchMedia('(max-width: 900px)').matches) return;
  if (!hasGSAP) return;
  const container = document.getElementById('sparks');
  container.style.cssText = 'position:absolute;inset:0;z-index:9;pointer-events:none;overflow:hidden;';

  function createSpark() {
    const s = document.createElement('div');
    const size  = Math.random() * 5 + 2;
    const colors= ['#E85D04','#F48C06','#FFBA08','#D62828','#FF6B35'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const xPos  = 25 + Math.random() * 50;
    const dur   = 2.5 + Math.random() * 3;
    s.className = 'spark';
    s.style.cssText = `
      width:${size}px;height:${size}px;
      background:${color};
      box-shadow:0 0 ${size*2}px ${color};
      left:${xPos}%;
      bottom:${10 + Math.random()*20}%;
      animation-duration:${dur}s;
      animation-delay:${Math.random()*2}s;
    `;
    container.appendChild(s);
    setTimeout(() => s.remove(), (dur + 2) * 1000);
  }

  setInterval(createSpark, 300);
  for(let i = 0; i < 12; i++) setTimeout(createSpark, i * 120);
})();

if(!perfLite && hasGSAP){
window.gsap.timeline({ delay: .5 })
  .from('.hero-corner-tl', { width:0, height:0, duration:.6, ease:'power3.out' })
  .from('.hero-corner-tr', { width:0, height:0, duration:.6, ease:'power3.out' }, '-=.4')
  .from('.hero-corner-bl', { width:0, height:0, duration:.6, ease:'power3.out' }, '-=.4')
  .from('.hero-corner-br', { width:0, height:0, duration:.6, ease:'power3.out' }, '-=.4');

  window.gsap.from('.hero-halo',  { scale:.3, opacity:0, duration:2, ease:'power3.out', delay:.8 });
  window.gsap.from('.hero-halo2', { scale:.2, opacity:0, duration:2.4, ease:'power3.out', delay:1 });
  window.gsap.from('.hero-glow-ring', { scale:.4, opacity:0, duration:1.8, ease:'power3.out', delay:.6 });
  window.gsap.from('.hero-bottom-line', { scaleX:0, opacity:0, duration:1.5, ease:'power3.out', delay:1.4 });
  window.gsap.to('.hero-chef-img', {
    scale: 1.015,
    duration: 5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 2
  });

  window.gsap.to('.hero-atm', {
    opacity: .7,
    duration: 4,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  });

  window.gsap.to('.hero-scanlines', {
    backgroundPositionY: '100px',
    duration: 8,
    ease: 'none',
    repeat: -1
  });

  setTimeout(() => {
    window.gsap.to('.hero-stat-num', {
      textShadow: '0 0 20px rgba(232,93,4,.9)',
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: .5
    });
  }, 2000);
}

setTimeout(() => {
  if(perfLite || !heroEl || !hasGSAP) return;
  heroEl.addEventListener('mouseenter', () => {
    window.gsap.to('.burger-bg svg', {
      opacity: (i, el) => parseFloat(el.style.opacity) * 2.5,
      duration: .8,
      stagger:.05
    });
  });
  heroEl.addEventListener('mouseleave', () => {
    window.gsap.to('.burger-bg svg', {
      opacity: (i, el) => parseFloat(el.style.opacity) / 2.5,
      duration: .8,
      stagger:.05
    });
  });
}, 1200);

function loadThreeScript(onload){
  var s=document.createElement('script');
  s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  s.async=true;
  s.onload=onload;
  document.head.appendChild(s);
}

if(!perfLite){
  whenIdle(function(){
    loadThreeScript(function(){
      const canvas = document.getElementById('bg-canvas');
      if(!canvas || typeof THREE === 'undefined') return;
      const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:false});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      renderer.setSize(window.innerWidth, window.innerHeight);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
      camera.position.z = 80;

      const lowPower = (window.devicePixelRatio || 1) > 2;
      const count = lowPower ? 120 : 220;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count*3);
      const col = new Float32Array(count*3);
      const palette = [[0.91,0.36,0.02],[0.96,0.55,0.02],[0.84,0.13,0.15],[1,0.73,0.03]];
      for(let i=0;i<count;i++){
        pos[i*3]=(Math.random()-.5)*240;
        pos[i*3+1]=(Math.random()-.5)*240;
        pos[i*3+2]=(Math.random()-.5)*80;
        const c=palette[Math.floor(Math.random()*palette.length)];
        col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2];
      }
      geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
      geo.setAttribute('color',new THREE.BufferAttribute(col,3));
      const mat=new THREE.PointsMaterial({size:1.2,vertexColors:true,transparent:true,opacity:.45,sizeAttenuation:true});
      scene.add(new THREE.Points(geo,mat));

      let sy=0,mx=0,my=0;
      window.addEventListener('scroll',()=>{sy=window.scrollY;});
      window.addEventListener('mousemove',e=>{mx=(e.clientX/window.innerWidth-.5)*2;my=-(e.clientY/window.innerHeight-.5)*2;},{passive:true});
      let t=0,threeVisible=true;
      const threeObs=new IntersectionObserver(entries=>{threeVisible=entries[0].isIntersecting;},{threshold:0});
      threeObs.observe(document.getElementById('hero')||document.body);
      (function anim(){
        requestAnimationFrame(anim);
        if(!threeVisible)return;
        t+=.007;
        scene.children[0].rotation.y=t*.05+mx*.04;
        scene.children[0].rotation.x=my*.02;
        camera.position.y=-sy*.01;
        renderer.render(scene,camera);
      })();
      window.addEventListener('resize',()=>{
        camera.aspect=window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth,window.innerHeight);
      });
    });
  },2200);
}

setTimeout(() => {if(perfLite)return;(function(){
  const wrap = document.getElementById('burgerBg');
  if(!wrap) return;
  const burgers = [
    {x:8,y:12,size:120,rot:-20,opacity:.06},
    {x:78,y:8,size:90,rot:15,opacity:.05},
    {x:88,y:55,size:140,rot:25,opacity:.07},
    {x:5,y:60,size:100,rot:-10,opacity:.05},
    {x:15,y:80,size:80,rot:30,opacity:.04},
    {x:82,y:80,size:110,rot:-25,opacity:.06},
    {x:45,y:5,size:70,rot:10,opacity:.04},
    {x:50,y:85,size:95,rot:-15,opacity:.05},
  ];
  burgers.forEach((b,i)=>{
    const el=document.createElementNS('http://www.w3.org/2000/svg','svg');
    el.setAttribute('viewBox','0 0 100 80');
    el.setAttribute('width',b.size);
    el.setAttribute('height',b.size*.8);
    el.style.cssText=`position:absolute;left:${b.x}%;top:${b.y}%;opacity:${b.opacity};transform:rotate(${b.rot}deg);filter:blur(1px);`;
    el.innerHTML=`
      <ellipse cx="50" cy="18" rx="44" ry="14" fill="#E85D04"/>
      <rect x="8" y="28" width="84" height="10" rx="3" fill="#FFBA08"/>
      <rect x="6" y="40" width="88" height="8" rx="2" fill="#9B2226"/>
      <rect x="8" y="50" width="84" height="8" rx="2" fill="#FFBA08"/>
      <ellipse cx="50" cy="65" rx="44" ry="10" fill="#E85D04"/>
    `;
    wrap.appendChild(el);
    window.gsap.to(el,{
      y: `${(i%2===0?-1:1)*18}px`,
      rotation: b.rot+(i%2===0?8:-8),
      duration: 3+i*.5,
      ease:'sine.inOut',
      repeat:-1,
      yoyo:true,
      delay: i*.3
    });
  });
})();}, 1100);

const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('s',window.scrollY>60);
  const pct=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.getElementById('prog').style.width=pct+'%';
});

if(hasGSAP){
  const heroTL=window.gsap.timeline({delay: perfLite ? 0 : 0.2});
  heroTL
    .to('#chefImg',{opacity:1,y:0,scale:1,duration: perfLite ? 0.5 : 1.4,ease:'power3.out'})
    .to('.hero-eyebrow',{opacity:1,duration: perfLite ? 0.35 : 0.7,ease:'power2.out'}, perfLite ? 0 : '-=.8')
    .to('.hero-title',{opacity:1,y:0,duration: perfLite ? 0.45 : 1,ease:'power3.out'}, perfLite ? 0 : '-=.6')
    .to('.hero-sub',{opacity:1,duration: perfLite ? 0.35 : 0.7,ease:'power2.out'}, perfLite ? 0 : '-=.5')
    .to('.hero-btns',{opacity:1,duration: perfLite ? 0.35 : 0.7,ease:'power2.out'}, perfLite ? 0 : '-=.4')
    .to('.hero-right',{opacity:1,duration: perfLite ? 0.4 : 0.8,ease:'power2.out'}, perfLite ? 0 : '-=.5')
    .to('#scrollHint',{opacity:1,duration: perfLite ? 0.3 : 0.5}, perfLite ? 0 : '-=.2');
}

function countTo(id,end,suffix,dur){
  let n=0,inc=end/60;
  const el=document.getElementById(id);
  const timer=setInterval(()=>{
    n+=inc;if(n>=end){n=end;clearInterval(timer);}
    el.textContent=Math.floor(n)+suffix;
  },dur/60);
}
setTimeout(()=>{
  countTo('sn1',3,'+', perfLite ? 500 : 1200);
  countTo('sn2',500,'+', perfLite ? 600 : 1400);
  countTo('sn3',100,'%', perfLite ? 700 : 1600);
}, perfLite ? 200 : 800);

(function(){
  const aDots=document.getElementById('aDots');
  const aImgWrap=document.getElementById('aImgWrap');
  const aboutImgs=[
    'ImagesWebp/1.webp',
    'ImagesWebp/2.webp',
  ];
  if(!aDots||!aImgWrap)return;
  let aIdx=0;
  aboutImgs.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='a-dot'+(i===0?' on':'');
    d.onclick=e=>{e.stopPropagation();switchAbout(i);};
    aDots.appendChild(d);
  });
  function switchAbout(idx){
    if(idx===aIdx)return;
    const img=document.getElementById('aImg');
    if(!img)return;
    if(hasGSAP){
      window.gsap.timeline()
        .to(img,{opacity:0,scale:1.05,duration:.35,ease:'power2.in'})
        .call(()=>{
          aIdx=idx;img.src=aboutImgs[idx];
          document.querySelectorAll('.a-dot').forEach((d,i)=>d.classList.toggle('on',i===idx));
        })
        .to(img,{opacity:1,scale:1,duration:.55,ease:'power3.out'});
    }else{
      aIdx=idx;
      img.src=aboutImgs[idx];
      document.querySelectorAll('.a-dot').forEach((d,i)=>d.classList.toggle('on',i===idx));
    }
  }
  aImgWrap.addEventListener('click',()=>switchAbout((aIdx+1)%aboutImgs.length));
})();

if(!perfLite && hasGSAP && hasScrollTrigger){
  window.gsap.utils.toArray('.reveal').forEach(el=>{
    window.gsap.from(el,{opacity:0,y:40,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 98%'}});
  });
  window.gsap.utils.toArray('.ht-card').forEach((c,i)=>{
    window.gsap.from(c,{opacity:0,y:40,duration:.75,delay:i*.1,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 88%'}});
  });
  window.gsap.utils.toArray('.del-feat').forEach((f,i)=>{
    window.gsap.from(f,{opacity:0,x:-30,duration:.7,delay:i*.12,ease:'power2.out',scrollTrigger:{trigger:f,start:'top 90%'}});
  });
  window.gsap.utils.toArray('.i-block').forEach((b,i)=>{
    window.gsap.from(b,{opacity:0,x:30,duration:.7,delay:i*.14,ease:'power2.out',scrollTrigger:{trigger:b,start:'top 88%'}});
  });
  window.gsap.utils.toArray('.about-div,.sec-div').forEach(d=>{
    window.gsap.from(d,{scaleX:0,duration:.6,ease:'power2.out',transformOrigin:'left',scrollTrigger:{trigger:d,start:'top 90%'}});
  });
  window.gsap.utils.toArray('.sec-tag,.about-tag,.menu-tag').forEach(t=>{
    window.gsap.from(t,{opacity:0,y:20,duration:.6,ease:'power2.out',scrollTrigger:{trigger:t,start:'top 90%'}});
  });
  window.gsap.utils.toArray('.sec-title,.about-title,.menu-title').forEach(t=>{
    window.gsap.from(t,{opacity:0,y:30,duration:.8,ease:'power3.out',scrollTrigger:{trigger:t,start:'top 88%'}});
  });
}

// CART LOGIC
var cart = [];
/** Shown on WhatsApp step; full mobile number for wa.me */
var ORDER_WHATSAPP_DISPLAY = '+20 1010 157 407';
var ORDER_WHATSAPP_DIGITS = '201010157407';
/** Short code used when customer taps “Call us” in checkout */
var ORDER_CALL_TEL = '17640';
var pendingOrderSnapshot = null;
var currentSizeSelection = null;
var SANDWICH_SIZE_PRICES = {
  'Smash Burger': [
    ['Single', 115],
    ['Double', 145],
    ['Triple', 170]
  ],
  'Classic Burger': [
    ['Single', 75],
    ['Double', 115]
  ],
  'El-Mazag': [
    ['Single', 135],
    ['Double', 195],
    ['Triple', 250]
  ],
  'Chicken Burger': [
    ['Single', 135],
    ['Double', 185]
  ]
};
var branches = [
  {
    name: 'سموحة',
    address: 'شارع مسجد حاتم',
    map: 'https://maps.app.goo.gl/inMvyMWaJCcsLcHA7?g_st=ic'
  },
  {
    name: 'محرم بك',
    address: 'ميدان الرصافة',
    map: 'https://maps.app.goo.gl/GyJrzMZdhirxureTA?g_st=ic'
  }
];

function addToCart(name, price){
  var p = Number(price);
  var existing = cart.find(function(i){ return i.name === name && Number(i.price) === p; });
  if(existing){ existing.qty++; }
  else{ cart.push({name:name,price:p,qty:1}); }
  renderCart();
  document.getElementById('cart-drawer').classList.add('open');
}

function setLocationBranch(index){
  var b = branches[index];
  if(!b)return;
  var tabs = document.querySelectorAll('.loc-tab');
  tabs.forEach(function(tab, i){ tab.classList.toggle('active', i === index); });
  var nameEl = document.getElementById('loc-branch-name');
  var addrEl = document.getElementById('loc-branch-address');
  var mapBtn = document.getElementById('loc-map-btn');
  if(nameEl)nameEl.textContent = b.name;
  if(addrEl)addrEl.textContent = b.address;
  if(mapBtn)mapBtn.href = b.map;
}

function closeSizeModal(){
  var overlay = document.getElementById('size-modal-overlay');
  if(overlay){ overlay.classList.remove('open'); }
  currentSizeSelection = null;
}

function chooseSandwichSize(baseName){
  var tiers = SANDWICH_SIZE_PRICES[baseName];
  if(!tiers || !tiers.length)return;
  currentSizeSelection = { baseName: baseName };
  var overlay = document.getElementById('size-modal-overlay');
  var title = document.getElementById('size-modal-title');
  var sub = document.getElementById('size-modal-sub');
  var options = document.getElementById('size-options');
  if(!overlay || !title || !sub || !options)return;

  title.textContent = 'Choose Sandwich Size';
  sub.textContent = baseName + ' - choose your size';
  options.innerHTML = '';
  tiers.forEach(function(row){
    var label = row[0];
    var price = Number(row[1]);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'size-option';
    btn.innerHTML = '<b>' + label + '</b><span>' + price + ' EGP</span>';
    btn.addEventListener('click', function(){
      addToCart(baseName + ' (' + label + ')', price);
      closeSizeModal();
    });
    options.appendChild(btn);
  });
  overlay.classList.add('open');
}

function chooseColaType(basePrice){
  var overlay = document.getElementById('size-modal-overlay');
  var title = document.getElementById('size-modal-title');
  var sub = document.getElementById('size-modal-sub');
  var options = document.getElementById('size-options');
  if(!overlay || !title || !sub || !options)return;
  var isAr = document.documentElement.getAttribute('lang') === 'ar';

  title.textContent = isAr ? 'اختر نوع الكولا' : 'Choose Cola Type';
  sub.textContent = isAr ? 'اختَر النوع: عادية، دايت، أو بينك' : 'Pick your cola: Regular, Diet, or Pink';
  options.innerHTML = '';

  var colaTypes = isAr
    ? ['كولا عادية','كولا دايت','كولا بينك']
    : ['Regular Cola','Diet Cola','Pink Cola'];

  colaTypes.forEach(function(name){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'size-option';
    btn.innerHTML = '<b>' + name + '</b><span>' + Number(basePrice) + ' EGP</span>';
    btn.addEventListener('click', function(){
      addToCart(name, Number(basePrice));
      closeSizeModal();
    });
    options.appendChild(btn);
  });
  overlay.classList.add('open');
}

function renderCart(){
  var list = document.getElementById('cart-items-list');
  var emptyMsg = document.getElementById('cart-empty-msg');
  var totalEl = document.getElementById('cart-total');
  var countEl = document.getElementById('cart-count');

  if(cart.length===0){
    emptyMsg.style.display='block';
    list.querySelectorAll('.cart-item').forEach(function(el){el.remove();});
    totalEl.textContent='0';
    countEl.textContent='0';
    countEl.classList.remove('show');
    if(typeof applyMazagI18n==='function')applyMazagI18n();
    return;
  }
  emptyMsg.style.display='none';
  list.querySelectorAll('.cart-item').forEach(function(el){el.remove();});
  var total=0; var totalQty=0;
  cart.forEach(function(item,idx){
    var line = Number(item.price) * item.qty;
    total += line;
    totalQty += item.qty;
    var div=document.createElement('div');
    div.className='cart-item';
    div.innerHTML=
      '<span class="cart-item-name">'+item.name+'</span>'+ 
      '<div class="cart-item-qty">'+
        '<button class="cart-qty-btn" onclick="changeQty('+idx+',-1)">−</button>'+ 
        '<span class="cart-qty-num">'+item.qty+'</span>'+ 
        '<button class="cart-qty-btn" onclick="changeQty('+idx+',1)">+</button>'+ 
      '</div>'+ 
      '<span class="cart-item-price">'+line+' EGP</span>';
    list.appendChild(div);
  });
  totalEl.textContent=total;
  countEl.textContent=totalQty;
  countEl.classList.add('show');
  if(typeof applyMazagI18n==='function')applyMazagI18n();
}
window.renderCart = renderCart;

function changeQty(idx,delta){
  cart[idx].qty += delta;
  if(cart[idx].qty<=0){ cart.splice(idx,1); }
  renderCart();
}

function toggleCart(){
  document.getElementById('cart-drawer').classList.toggle('open');
}

function getOrderDetailValues(){
  function value(id){
    var el = document.getElementById(id);
    return el ? String(el.value || '').trim() : '';
  }
  return {
    area: value('order-detail-area'),
    name: value('order-detail-name'),
    phone1: value('order-detail-phone1'),
    phone2: value('order-detail-phone2'),
    street: value('order-detail-street'),
    building: value('order-detail-building'),
    landmark: value('order-detail-landmark')
  };
}

function resetOrderDetailFields(){
  [
    'order-detail-area',
    'order-detail-name',
    'order-detail-phone1',
    'order-detail-phone2',
    'order-detail-street',
    'order-detail-building',
    'order-detail-landmark'
  ].forEach(function(id){
    var el = document.getElementById(id);
    if(el)el.value = '';
  });
}

function buildOrderMessageText(items, details){
  details = details || getOrderDetailValues();
  var arPart = [
    'برجاء ارسال البيانات كامله لتأكيد الاوردر سريعآ',
    '',
    'لطلب أوردر :',
    '',
    'المنطقة : 🗺️ ' + details.area,
    'الإسم : 🪪 ' + details.name,
    'رقم تليفون  : 📱 ' + details.phone1,
    'رقم تليفون إضافى ( أو أرضى ) : ☎️ ' + details.phone2,
    'الشارع الرئيسيى و المتفرع منه : 📍 ' + details.street,
    'رقم العمارة و الدور و الشقة : 🏠 ' + details.building,
    'علامة مميزة بالقرب من المنزل :📍 ' + details.landmark,
    'الأوردر كاملا : 🍽️',
    '',
    '──────────',
    ''
  ].join('\n');

  var orderLines = [];
  var total = 0;
  var gt = typeof getMazagT === 'function' ? getMazagT : function(k){ return k; };
  orderLines.push(gt('wa.orderHead'));
  orderLines.push('');
  orderLines.push(gt('wa.hi'));
  orderLines.push('');
  items.forEach(function(i){
    var line = Number(i.price) * i.qty;
    total += line;
    orderLines.push('• ' + i.name + ' ×' + i.qty + ' — ' + line + ' EGP');
  });
  orderLines.push('');
  orderLines.push('────────────────');
  orderLines.push(gt('wa.total') + ' ' + total + ' EGP');
  orderLines.push('');
  orderLines.push(gt('wa.deliveryNote'));
  orderLines.push('');
  orderLines.push(gt('wa.end'));
  var orderPart = orderLines.join('\n');

  return { text: arPart + orderPart, total: total };
}

function refreshOrderMessagePreview(){
  if(!pendingOrderSnapshot||pendingOrderSnapshot.length===0)return;
  var ta = document.getElementById('order-wa-message');
  if(!ta)return;
  ta.value = buildOrderMessageText(pendingOrderSnapshot, getOrderDetailValues()).text;
}

function checkout(){
  if(cart.length===0){
    alert(typeof getMazagT === 'function' ? getMazagT('cart.alertEmpty') : 'Add some items first! 🔥');
    return;
  }
  pendingOrderSnapshot = cart.map(function(i){
    return { name: String(i.name), price: Number(i.price), qty: i.qty };
  });
  document.getElementById('cart-drawer').classList.remove('open');
  var overlay = document.getElementById('order-modal-overlay');
  var numEl = document.getElementById('order-wa-display-num');
  if(numEl){ numEl.textContent = ORDER_WHATSAPP_DISPLAY; }
  orderModalSetStep(1);
  overlay.classList.add('open');
}

function orderModalSetStep(step){
  var s1 = document.getElementById('order-modal-step1');
  var s2 = document.getElementById('order-modal-step2');
  if(!s1||!s2)return;
  s1.classList.toggle('active', step === 1);
  s2.classList.toggle('active', step === 2);
}

function cancelOrderModal(){
  document.getElementById('order-modal-overlay').classList.remove('open');
  orderModalSetStep(1);
  var copyBtn = document.getElementById('order-btn-copy');
  if(copyBtn){
    copyBtn.classList.remove('copied');
    copyBtn.textContent = typeof getMazagT === 'function' ? getMazagT('om.copy') : 'Copy message';
  }
  resetOrderDetailFields();
  var ta = document.getElementById('order-wa-message');
  if(ta)ta.value = '';
  pendingOrderSnapshot = null;
}

function finishOrderSuccess(){
  cart = [];
  renderCart();
  cancelOrderModal();
}

function orderChooseCall(){
  if(!pendingOrderSnapshot||pendingOrderSnapshot.length===0)return;
  window.location.href = 'tel:' + String(ORDER_CALL_TEL).replace(/\s/g,'');
  finishOrderSuccess();
}

function orderChooseWhatsApp(){
  if(!pendingOrderSnapshot||pendingOrderSnapshot.length===0)return;
  var built = buildOrderMessageText(pendingOrderSnapshot, getOrderDetailValues());
  var ta = document.getElementById('order-wa-message');
  if(ta){ ta.value = built.text; }
  var copyBtn = document.getElementById('order-btn-copy');
  if(copyBtn){
    copyBtn.classList.remove('copied');
    copyBtn.textContent = typeof getMazagT === 'function' ? getMazagT('om.copy') : 'Copy message';
  }
  orderModalSetStep(2);
}

function orderWhatsAppBack(){
  orderModalSetStep(1);
}

function copyOrderMessage(){
  var ta = document.getElementById('order-wa-message');
  var btn = document.getElementById('order-btn-copy');
  if(!ta||!btn)return;
  ta.focus();
  ta.select();
  ta.setSelectionRange(0, ta.value.length);
  function markCopied(){
    btn.classList.add('copied');
    btn.textContent = typeof getMazagT === 'function' ? getMazagT('om.copied') : 'Copied!';
    setTimeout(function(){
      btn.classList.remove('copied');
      btn.textContent = typeof getMazagT === 'function' ? getMazagT('om.copy') : 'Copy message';
    }, 2200);
  }
  var copyFail = typeof getMazagT === 'function' ? getMazagT('om.copyFail') : 'Could not copy — select the text and copy manually.';
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(ta.value).then(markCopied).catch(function(){
      try{ document.execCommand('copy'); markCopied(); }catch(e){ alert(copyFail); }
    });
  }else{
    try{ document.execCommand('copy'); markCopied(); }catch(e2){ alert(copyFail); }
  }
}

function openWhatsAppWithOrder(){
  var ta = document.getElementById('order-wa-message');
  if(!ta||!pendingOrderSnapshot)return;
  var details = getOrderDetailValues();
  if(!details.area || !details.name || !details.phone1 || !details.street || !details.building){
    alert(typeof getMazagT === 'function' ? getMazagT('om.fillRequired') : 'Please complete the required delivery details before sending.');
    return;
  }
  var text = encodeURIComponent(ta.value || buildOrderMessageText(pendingOrderSnapshot, details).text);
  window.open('https://wa.me/' + ORDER_WHATSAPP_DIGITS + '?text=' + text, '_blank', 'noopener,noreferrer');
  finishOrderSuccess();
}

function normalizePhoneNumber(raw){
  return String(raw || '').replace(/[^\d+]/g,'').trim();
}

function submitQuickOrder(){
  var phoneInput = document.getElementById('quick-order-phone');
  if(!phoneInput)return;
  var phone = normalizePhoneNumber(phoneInput.value);
  var phoneDigits = phone.replace(/\D/g,'');
  if(phoneDigits.length < 10){
    alert('Please enter a valid phone number so we can contact you.');
    phoneInput.focus();
    return;
  }

  var lines = [
    'Hello Al-Mazag, I want to place an order.',
    '',
    'Customer phone: ' + phone,
    ''
  ];

  if(cart.length > 0){
    lines.push('My cart:');
    lines.push('');
    lines.push(buildOrderMessageText(cart).text);
  }else{
    lines.push('Please contact me to complete the order details.');
  }

  var text = encodeURIComponent(lines.join('\n'));
  window.open('https://wa.me/' + ORDER_WHATSAPP_DIGITS + '?text=' + text, '_blank', 'noopener,noreferrer');
}

var quickOrderBtn = document.getElementById('quick-order-btn');
var quickOrderPhone = document.getElementById('quick-order-phone');
if(quickOrderBtn){
  quickOrderBtn.addEventListener('click', submitQuickOrder);
}
if(quickOrderPhone){
  quickOrderPhone.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      e.preventDefault();
      submitQuickOrder();
    }
  });
}
[
  'order-detail-area',
  'order-detail-name',
  'order-detail-phone1',
  'order-detail-phone2',
  'order-detail-street',
  'order-detail-building',
  'order-detail-landmark'
].forEach(function(id){
  var el = document.getElementById(id);
  if(el){
    el.addEventListener('input', refreshOrderMessagePreview);
  }
});

document.addEventListener('click',function(e){
  var drawer=document.getElementById('cart-drawer');
  var btn=document.getElementById('cart-btn');
  var orderOv=document.getElementById('order-modal-overlay');
  if(drawer.classList.contains('open') && !drawer.contains(e.target) && !btn.contains(e.target) && !(orderOv&&orderOv.classList.contains('open'))){
    drawer.classList.remove('open');
  }
});

document.getElementById('order-modal-overlay').addEventListener('click',function(e){
  if(e.target === this){ cancelOrderModal(); }
});

document.getElementById('size-modal-overlay').addEventListener('click',function(e){
  if(e.target === this){ closeSizeModal(); }
});

document.addEventListener('keydown',function(e){
  if(e.key !== 'Escape')return;
  var so = document.getElementById('size-modal-overlay');
  if(so && so.classList.contains('open')){ closeSizeModal(); return; }
  var o=document.getElementById('order-modal-overlay');
  if(o && o.classList.contains('open')){ cancelOrderModal(); }
});

setLocationBranch(0);
