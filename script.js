
(function(){
"use strict";
/* ---------- data ---------- */
var ICONS={
 headphones:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
 watch:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
 speaker:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
 battery:'https://images.unsplash.com/photo-1594843665794-446ce915d840?auto=format&fit=crop&w=600&q=80',
 tshirt:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
 shoe:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
 bag:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
 cap:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
 lamp:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
 mug:'https://images.unsplash.com/photo-1724905136845-b56958ce82cf?auto=format&fit=crop&w=600&q=80',
 pot:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
 cushion:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
 book:'https://images.unsplash.com/photo-1575709527142-a93ed587bb83?auto=format&fit=crop&w=600&q=80',
 notebook:'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80',
 ball:'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
 mat:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
 dumbbell:'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
 bottle:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80'
};
function icon(k){return '<img class="category-icon" src="'+ICONS[k]+'" alt="" aria-hidden="true" loading="lazy">';}
var CATS=['Electronics','Fashion','Home','Books','Sports'];
var P=[
 {id:'p1',name:'Wireless Headphones',cat:'Electronics',price:2499,mrp:3499,h:190,i:'headphones',d:'Over-ear, 30-hour battery, soft ear cushions.',r:4.4,n:1862,b:'Bestseller'},
 {id:'p2',name:'Smart Watch',cat:'Electronics',price:3999,mrp:5999,h:215,i:'watch',d:'Heart-rate, sleep and step tracking with a bright display.',r:4.2,n:934},
 {id:'p3',name:'Bluetooth Speaker',cat:'Electronics',price:1799,mrp:2299,h:170,i:'speaker',d:'Splash-proof speaker with deep bass and 12-hour playtime.',r:4.5,n:2210},
 {id:'p4',name:'Power Bank 10000 mAh',cat:'Electronics',price:1299,mrp:1699,h:250,i:'battery',d:'Slim, fast-charging, two USB outputs.',r:4.3,n:3071,b:'New'},
 {id:'p5',name:'Cotton T-Shirt',cat:'Fashion',price:499,mrp:799,h:20,i:'tshirt',d:'Soft 100% cotton, regular fit, pre-washed.',r:4.1,n:5120},
 {id:'p6',name:'Running Shoes',cat:'Fashion',price:2199,mrp:3299,h:345,i:'shoe',d:'Light mesh upper with a cushioned sole for daily runs.',r:4.4,n:1457,b:'Bestseller'},
 {id:'p7',name:'Canvas Backpack',cat:'Fashion',price:1099,mrp:1499,h:35,i:'bag',d:'20-litre bag with a padded laptop sleeve.',r:4.3,n:2688},
 {id:'p8',name:'Cotton Cap',cat:'Fashion',price:349,mrp:499,h:55,i:'cap',d:'Adjustable strap, breathable, one size.',r:4.0,n:812},
 {id:'p9',name:'LED Desk Lamp',cat:'Home',price:899,mrp:1299,h:48,i:'lamp',d:'Three brightness levels, flexible neck, USB powered.',r:4.4,n:1980},
 {id:'p10',name:'Ceramic Mug Set',cat:'Home',price:599,mrp:899,h:10,i:'mug',d:'Set of 4, 300 ml, dishwasher safe.',r:4.2,n:1304},
 {id:'p11',name:'Table Plant Pot',cat:'Home',price:349,mrp:449,h:130,i:'pot',d:'Matte finish pot with drainage hole and tray.',r:4.0,n:641},
 {id:'p12',name:'Cotton Cushion',cat:'Home',price:449,mrp:699,h:300,i:'cushion',d:'16 x 16 inch cover with a soft fibre filling.',r:4.1,n:978},
 {id:'p13',name:'Data Analytics Workbook',cat:'Books',price:549,mrp:750,h:225,i:'book',d:'Practice sets on SQL, spreadsheets and charts, with solutions.',r:4.6,n:742,b:'New'},
 {id:'p14',name:'Web Development Starter Guide',cat:'Books',price:499,mrp:650,h:160,i:'book',d:'HTML, CSS and JavaScript projects from first page to deploy.',r:4.5,n:1190},
 {id:'p15',name:'Aptitude Practice Book',cat:'Books',price:299,mrp:399,h:40,i:'book',d:'Quant, logic and verbal drills for campus placements.',r:4.3,n:2543,b:'Bestseller'},
 {id:'p16',name:'Ruled Notebook Pack',cat:'Books',price:199,mrp:279,h:0,i:'notebook',d:'Pack of 5, 180 pages each, A5 size.',r:4.2,n:3320},
 {id:'p17',name:'Football, Size 5',cat:'Sports',price:699,mrp:999,h:100,i:'ball',d:'Machine-stitched, all-weather match ball.',r:4.2,n:1076},
 {id:'p18',name:'Yoga Mat',cat:'Sports',price:799,mrp:1199,h:280,i:'mat',d:'6 mm anti-slip mat with a carry strap.',r:4.3,n:1665},
 {id:'p19',name:'Dumbbell Set, 2 x 5 kg',cat:'Sports',price:1399,mrp:1899,h:200,i:'dumbbell',d:'Rubber-coated hex dumbbells that do not roll.',r:4.4,n:884},
 {id:'p20',name:'Steel Water Bottle',cat:'Sports',price:449,mrp:649,h:180,i:'bottle',d:'750 ml insulated bottle, cold for 18 hours.',r:4.5,n:2951}
];
var BYID={};P.forEach(function(p){BYID[p.id]=p;});
var FREE_AT=999, SHIP=49, MAXQ=10;
/* Product photos: put a file named images/<name>.jpg next to this page. If a file is missing, the drawn icon shows instead. */
var IMG={p1:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
  p2:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
  p3:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
  p4:'https://images.unsplash.com/photo-1594843665794-446ce915d840?auto=format&fit=crop&w=600&q=80',
  p5:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
  p6:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  p7:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
  p8:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
  p9:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
  p10:'https://images.unsplash.com/photo-1724905136845-b56958ce82cf?auto=format&fit=crop&w=600&q=80',
  p11:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
  p12:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
  p13:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80',
  p14:'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80',
  p15:'https://images.unsplash.com/photo-1575709527142-a93ed587bb83?auto=format&fit=crop&w=600&q=80',
  p16:'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80',
  p17:'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
  p18:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
  p19:'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
  p20:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80'};
function pic(p){return '<img class="pimg" src="'+IMG[p.id]+'" alt="'+esc(p.name)+'" loading="lazy">';}

/* ---------- helpers ---------- */
function $(s){return document.querySelector(s);}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function inr(n){return '₹'+Number(n).toLocaleString('en-IN');}
var store={
  get:function(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},
  set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}},
  del:function(k){try{localStorage.removeItem(k);}catch(e){}}
};
function hash(s){
  try{
    return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){
      return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0');}).join('');
    });
  }catch(e){return Promise.resolve('p:'+btoa(unescape(encodeURIComponent(s))));}
}
function luhn(num){var s=0,alt=false;for(var i=num.length-1;i>=0;i--){var d=+num[i];if(alt){d*=2;if(d>9)d-=9;}s+=d;alt=!alt;}return s%10===0;}
function dateText(ms){return new Date(ms).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});}

/* ---------- state ---------- */
var S={
  view:'shop',cat:'All',sort:'featured',q:'',
  users:store.get('bm_users',[]),user:null,cart:{},
  pending:null,afterAuth:null,authTab:'login',authMsg:'',
  co:{pay:'cod',name:'',phone:'',line1:'',city:'',state:'',pin:'',card:'',cname:'',exp:'',cvv:''},
  order:null,orderOpen:null
};
(function restore(){
  var em=store.get('bm_session',null);
  if(em){var u=S.users.filter(function(x){return x.email===em;})[0];if(u){S.user=u;S.cart=store.get('bm_cart_'+em,{});}}
})();

/* ---------- cart math ---------- */
function items(){return Object.keys(S.cart).filter(function(id){return BYID[id]&&S.cart[id]>0;}).map(function(id){return {p:BYID[id],qty:S.cart[id]};});}
function count(){return items().reduce(function(a,x){return a+x.qty;},0);}
function totals(){
  var sub=items().reduce(function(a,x){return a+x.p.price*x.qty;},0);
  var ship=sub===0?0:(sub>=FREE_AT?0:SHIP);
  return {sub:sub,ship:ship,total:sub+ship};
}
function saveCart(){if(S.user)store.set('bm_cart_'+S.user.email,S.cart);}

/* ---------- UI plumbing ---------- */
var toastTimer=null;
function toast(msg,actionLabel,actionName){
  var t=$('#toast');
  t.innerHTML='<span>'+esc(msg)+'</span>'+(actionLabel?'<button data-action="'+actionName+'">'+esc(actionLabel)+'</button>':'');
  t.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(function(){t.hidden=true;},3800);
}
function setView(v){S.view=v;S.cancelAsk=null;render();window.scrollTo(0,0);}
function updateHeader(){
  $('#cartCount').textContent=count();
  $('#accountBtn').textContent=S.user?('Hi, '+S.user.name.split(' ')[0]):'Login / Register';
}
function layer(html){$('#layer').innerHTML=html;}
function closeLayer(){layer('');}
function focusIn(sel){var el=$(sel);if(el)setTimeout(function(){el.focus();},30);}

/* ---------- shop ---------- */
function renderShop(){
  var chips=['All'].concat(CATS).map(function(c){
    var n=c==='All'?P.length:P.filter(function(p){return p.cat===c;}).length;
    return '<button class="chip" data-action="cat" data-cat="'+c+'" aria-pressed="'+(S.cat===c)+'">'+c+'<small>'+n+'</small></button>';
  }).join('');
  $('#main').innerHTML=
   '<section class="intro"><h1>Everyday picks, ready to ship</h1><p>Free delivery over '+inr(FREE_AT)+'. Cash on delivery available. Prices include GST.</p></section>'+
   '<section class="filters" aria-label="Filters"><div class="chips" id="chips">'+chips+'</div>'+
   '<label class="sort">Sort by <select id="sortSel"><option value="featured">Featured</option><option value="plh">Price: low to high</option><option value="phl">Price: high to low</option><option value="rate">Top rated</option></select></label></section>'+
   '<p class="count num" id="count" aria-live="polite"></p><section class="grid" id="grid"></section>';
  $('#sortSel').value=S.sort;
  renderGrid();
}
function visible(){
  var q=S.q.trim().toLowerCase();
  var list=P.filter(function(p){
    return (S.cat==='All'||p.cat===S.cat)&&(!q||(p.name+' '+p.cat+' '+p.d).toLowerCase().indexOf(q)>-1);
  });
  if(S.sort==='plh')list.sort(function(a,b){return a.price-b.price;});
  if(S.sort==='phl')list.sort(function(a,b){return b.price-a.price;});
  if(S.sort==='rate')list.sort(function(a,b){return b.r-a.r;});
  return list;
}
function renderGrid(){
  var g=$('#grid');if(!g)return;
  var list=visible();
  $('#count').textContent=list.length+(list.length===1?' product':' products')+(S.cat!=='All'?' in '+S.cat:'')+(S.q.trim()?' matching “'+S.q.trim()+'”':'');
  [].forEach.call(document.querySelectorAll('#chips .chip'),function(b){b.setAttribute('aria-pressed',String(b.dataset.cat===S.cat));});
  if(!list.length){
    g.innerHTML='<div class="empty" style="grid-column:1/-1"><h2>Nothing matches that search</h2><p>Try another word or show every category.</p><button class="btn primary" data-action="clear">Show all products</button></div>';
    return;
  }
  g.innerHTML=list.map(cardHTML).join('');
}
function cardHTML(p){
    var q=S.cart[p.id]||0,off=Math.round((1-p.price/p.mrp)*100);
    var act=q>0
      ?'<div class="stepper" role="group" aria-label="Quantity of '+esc(p.name)+'"><button data-action="dec" data-id="'+p.id+'" aria-label="Decrease quantity">−</button><output>'+q+'</output><button data-action="inc" data-id="'+p.id+'" aria-label="Increase quantity">+</button></div>'
      :'<button class="btn primary" data-action="add" data-id="'+p.id+'">Add to cart</button>';
    return '<article class="card"><div class="tile" data-action="view" data-id="'+p.id+'" style="--h:'+p.h+'">'+icon(p.i)+pic(p)+(p.b?'<span class="badge">'+p.b+'</span>':'')+'</div>'+
      '<div class="card-b"><p class="cat">'+p.cat+'</p><h3><button class="tlink" data-action="view" data-id="'+p.id+'">'+esc(p.name)+'</button></h3><p class="desc">'+esc(p.d)+'</p>'+
      '<p class="rate"><b>★ '+p.r.toFixed(1)+'</b> ('+p.n.toLocaleString('en-IN')+')</p>'+
      '<div class="price-row"><span class="price">'+inr(p.price)+'</span><span class="mrp">'+inr(p.mrp)+'</span><span class="off">'+off+'% off</span></div>'+act+'<button class="link vlink" data-action="view" data-id="'+p.id+'">View details</button></div></article>';
}

/* ---------- product detail ---------- */
var HL={
  Electronics:['1-year warranty','7-day replacement if it arrives faulty','Cash on delivery available'],
  Fashion:['10-day easy returns','Genuine product, quality checked','Cash on delivery available'],
  Home:['7-day replacement if damaged in transit','Quality checked before dispatch','Cash on delivery available'],
  Books:['Brand-new copy','Print and pages checked before dispatch','Cash on delivery available'],
  Sports:['7-day replacement for defects','Quality checked before dispatch','Cash on delivery available']
};
function renderProduct(){
  var p=BYID[S.pid];if(!p){setView('shop');return;}
  var q=S.cart[p.id]||0,off=Math.round((1-p.price/p.mrp)*100);
  var act=q>0
    ?'<div class="stepper" role="group" aria-label="Quantity of '+esc(p.name)+'"><button data-action="dec" data-id="'+p.id+'" aria-label="Decrease quantity">−</button><output>'+q+'</output><button data-action="inc" data-id="'+p.id+'" aria-label="Increase quantity">+</button></div>'
    :'<button class="btn primary" data-action="add" data-id="'+p.id+'">Add to cart</button>';
  var rel=P.filter(function(x){return x.cat===p.cat&&x.id!==p.id;});
  $('#main').innerHTML=
   '<button class="link" data-action="back">← Back to products</button>'+
   '<div class="pd"><div class="pd-media"><div class="tile" style="--h:'+p.h+'">'+icon(p.i)+pic(p)+(p.b?'<span class="badge">'+p.b+'</span>':'')+'</div></div>'+
   '<div class="pd-info"><p class="cat">'+p.cat+'</p><h1>'+esc(p.name)+'</h1>'+
   '<p class="rate"><b>★ '+p.r.toFixed(1)+'</b> ('+p.n.toLocaleString('en-IN')+' ratings)</p>'+
   '<div class="price-row" style="margin-top:0"><span class="price">'+inr(p.price)+'</span><span class="mrp">'+inr(p.mrp)+'</span><span class="off">'+off+'% off</span></div>'+
   '<p class="hint">You save '+inr(p.mrp-p.price)+'. Price includes GST.</p>'+
   '<p>'+esc(p.d)+'</p><ul class="hl">'+HL[p.cat].map(function(t){return '<li>'+t+'</li>';}).join('')+'</ul>'+
   '<div class="pd-actions">'+act+'<button class="btn" data-action="buy" data-id="'+p.id+'">Buy now</button></div>'+
   '<div class="pd-meta"><div class="fact"><small>Delivery by</small><b>'+dateText(Date.now()+4*864e5)+'</b></div>'+
   '<div class="fact"><small>Delivery charge</small><b>'+(p.price>=FREE_AT?'Free':inr(SHIP)+', free over '+inr(FREE_AT))+'</b></div>'+
   '<div class="fact"><small>Payment</small><b>COD, card or UPI</b></div></div></div></div>'+
   (rel.length?'<h2 style="margin-bottom:12px">More in '+p.cat+'</h2><section class="grid">'+rel.map(cardHTML).join('')+'</section>':'');
}

/* ---------- cart ---------- */
function addToCart(id){
  var p=BYID[id];if(!p)return;
  if(!S.user){S.pending=id;S.afterAuth=null;openAuth('login','Login or register to add “'+p.name+'” to your cart.');return;}
  if((S.cart[id]||0)>=MAXQ){toast('You can order up to '+MAXQ+' of one item.');return;}
  S.cart[id]=(S.cart[id]||0)+1;saveCart();refreshCart();
  toast(p.name+' is added to your cart','View cart','cart');
}
function setQty(id,delta){
  var q=(S.cart[id]||0)+delta;
  if(q>MAXQ){toast('You can order up to '+MAXQ+' of one item.');return;}
  if(q<=0)delete S.cart[id];else S.cart[id]=q;
  saveCart();refreshCart();
}
function removeItem(id){delete S.cart[id];saveCart();refreshCart();}
function refreshCart(){
  updateHeader();renderGrid();if(S.view==='product')renderProduct();
  if($('#drawer'))renderDrawer(true);
  if(S.view==='checkout'){
    if(!count()){setView('shop');return;}
    renderSummary();renderPayPanel();
  }
}
function openCart(){renderDrawer(false);}
function renderDrawer(keep){
  var list=items(),t=totals(),body;
  if(!list.length){
    body='<div class="empty"><h2>Your cart is empty</h2><p>Add something you like and it will show up here.</p><button class="btn primary" data-action="close-layer">Browse products</button></div>';
  }else{
    var left=Math.max(0,FREE_AT-t.sub);
    body=list.map(function(x){
      return '<div class="ci"><div class="tile" data-action="view" data-id="'+x.p.id+'" style="--h:'+x.p.h+'">'+icon(x.p.i)+pic(x.p)+'</div><div class="ci-b"><h3><button class="tlink" data-action="view" data-id="'+x.p.id+'">'+esc(x.p.name)+'</button></h3>'+
        '<span class="hint num">'+inr(x.p.price)+' each</span>'+
        '<div class="ci-line"><div class="stepper sm" role="group" aria-label="Quantity of '+esc(x.p.name)+'"><button data-action="dec" data-id="'+x.p.id+'" aria-label="Decrease quantity">−</button><output>'+x.qty+'</output><button data-action="inc" data-id="'+x.p.id+'" aria-label="Increase quantity">+</button></div>'+
        '<b class="num">'+inr(x.p.price*x.qty)+'</b></div>'+
        '<button class="link" style="justify-self:start;font-size:.85rem" data-action="remove" data-id="'+x.p.id+'">Remove</button></div></div>';
    }).join('');
  }
  var foot='';
  if(list.length){
    var left2=Math.max(0,FREE_AT-t.sub);
    foot='<div class="drawer-f"><div class="stack" style="gap:6px">'+
      '<div class="bar-free" aria-hidden="true"><i style="width:'+Math.min(100,Math.round(t.sub/FREE_AT*100))+'%"></i></div>'+
      '<p class="hint">'+(left2>0?'Add '+inr(left2)+' more for free delivery':'You have free delivery')+'</p></div>'+
      '<div class="row"><span>Subtotal</span><b class="num">'+inr(t.sub)+'</b></div>'+
      '<div class="row"><span>Delivery</span><b class="num">'+(t.ship?inr(t.ship):'Free')+'</b></div>'+
      '<div class="row total"><span>Total</span><span class="num">'+inr(t.total)+'</span></div>'+
      '<button class="btn primary block" data-action="checkout">Checkout</button></div>';
  }
  var html='<div class="scrim" data-action="close-layer"></div><aside class="drawer" id="drawer" role="dialog" aria-label="Your cart"><div class="drawer-h"><h2>Your cart <span class="hint num">('+count()+')</span></h2><button class="icon-btn" data-action="close-layer" aria-label="Close cart" id="closeBtn">×</button></div><div class="drawer-b">'+body+'</div>'+foot+'</aside>';
  var scroll=0;if(keep&&$('.drawer-b'))scroll=$('.drawer-b').scrollTop;
  layer(html);
  if(keep&&$('.drawer-b'))$('.drawer-b').scrollTop=scroll;else focusIn('#closeBtn');
}

/* ---------- auth ---------- */
function openAuth(tab,msg){
  S.authTab=tab;S.authMsg=msg||'';
  var reg=tab==='register';
  layer('<div class="modal-wrap" data-action="scrim-auth"><div class="modal" role="dialog" aria-label="Login or register">'+
   '<div class="m-head"><h2>'+(reg?'Create your account':'Welcome back')+'</h2><button class="icon-btn" data-action="close-layer" aria-label="Close">×</button></div>'+
   (S.authMsg?'<p class="notice">'+esc(S.authMsg)+'</p>':'')+
   '<div class="tabs" role="tablist"><button class="tab'+(reg?'':' on')+'" role="tab" data-action="auth-tab" data-tab="login">Login</button><button class="tab'+(reg?' on':'')+'" role="tab" data-action="auth-tab" data-tab="register">Register</button></div>'+
   '<form data-form="'+tab+'" class="stack" novalidate>'+
   (reg?'<div class="field"><label for="authName">Full name</label><input id="authName" autocomplete="name"></div>':'')+
   '<div class="field"><label for="authEmail">Email</label><input id="authEmail" type="email" autocomplete="email" inputmode="email"></div>'+
   '<div class="field"><label for="authPass">Password</label><input id="authPass" type="password" autocomplete="'+(reg?'new-password':'current-password')+'"><span class="hint">'+(reg?'At least 6 characters.':'')+'</span></div>'+
   '<p class="err" id="authErr" role="alert"></p>'+
   '<button class="btn primary block" type="submit">'+(reg?'Register and continue':'Login and continue')+'</button></form></div></div>');
  focusIn(reg?'#authName':'#authEmail');
}
function authErr(m){var e=$('#authErr');if(e)e.textContent=m;}
function doRegister(){
  var name=$('#authName').value.trim(),email=$('#authEmail').value.trim().toLowerCase(),pass=$('#authPass').value;
  if(name.length<2)return authErr('Enter your full name.');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return authErr('Enter a valid email address.');
  if(pass.length<6)return authErr('Use a password with at least 6 characters.');
  if(S.users.some(function(u){return u.email===email;}))return authErr('That email is already registered. Use the Login tab.');
  return hash(email+':'+pass).then(function(h){
    var u={name:name,email:email,h:h};S.users.push(u);store.set('bm_users',S.users);loginAs(u,true);
  });
}
function doLogin(){
  var email=$('#authEmail').value.trim().toLowerCase(),pass=$('#authPass').value;
  if(!email||!pass)return authErr('Enter your email and password.');
  return hash(email+':'+pass).then(function(h){
    var u=S.users.filter(function(x){return x.email===email&&x.h===h;})[0];
    if(!u)return authErr('Email or password is incorrect. New here? Use the Register tab.');
    loginAs(u,false);
  });
}
function loginAs(u,fresh){
  S.user=u;store.set('bm_session',u.email);S.cart=store.get('bm_cart_'+u.email,{});
  closeLayer();
  var pend=S.pending,after=S.afterAuth;S.pending=null;S.afterAuth=null;
  updateHeader();
  if(pend){addToCart(pend);if(after==='checkout')goCheckout();}
  else if(after==='checkout'){goCheckout();}
  else{toast((fresh?'Account created. Welcome, ':'Logged in. Welcome back, ')+u.name.split(' ')[0]);}
  renderGrid();if(S.view==='orders')render();
}
function openAccount(){
  if(!S.user)return openAuth('login','');
  layer('<div class="modal-wrap" data-action="scrim-auth"><div class="modal" role="dialog" aria-label="Your account"><div class="m-head"><h2>Your account</h2><button class="icon-btn" data-action="close-layer" aria-label="Close">×</button></div>'+
    '<div class="stack"><b>'+esc(S.user.name)+'</b><span class="hint">'+esc(S.user.email)+'</span></div>'+
    '<button class="btn block" data-action="orders">My orders</button><button class="btn block" data-action="logout">Log out</button></div></div>');
}
function logout(){
  S.user=null;S.cart={};store.del('bm_session');closeLayer();updateHeader();
  if(S.view!=='shop')S.view='shop';
  render();toast('You are logged out');
}

/* ---------- checkout ---------- */
function goCheckout(){
  if(!count()){toast('Your cart is empty. Add an item first.');return;}
  if(!S.user){S.afterAuth='checkout';S.pending=null;openAuth('login','Login or register to continue to checkout.');return;}
  var a=store.get('bm_addr_'+S.user.email,null);
  if(a){['name','phone','line1','city','state','pin'].forEach(function(k){if(!S.co[k])S.co[k]=a[k]||'';});}
  if(!S.co.name)S.co.name=S.user.name;
  closeLayer();setView('checkout');
}
function fld(key,label,attrs,cls){
  return '<div class="field '+(cls||'')+'"><label for="co-'+key+'">'+label+'</label><input id="co-'+key+'" data-co="'+key+'" value="'+esc(S.co[key])+'" '+(attrs||'')+'><span class="ferr" data-err="'+key+'"></span></div>';
}
function renderCheckout(){
  var opts=[['cod','Cash on delivery','Pay when your order arrives'],['card','Credit or debit card','Visa, Mastercard, RuPay'],['online','Online payment (UPI QR)','Scan a QR with any UPI app']];
  $('#main').innerHTML=
   '<button class="link" data-action="shop">← Back to shopping</button><h1 style="margin-top:8px">Checkout</h1>'+
   '<div class="co"><div class="co-main">'+
   '<section class="panel"><h2>Delivery address</h2><div class="fields">'+
     fld('name','Full name','autocomplete="name"')+
     fld('phone','Mobile number','inputmode="numeric" maxlength="10" autocomplete="tel-national" placeholder="10-digit number"')+
     fld('line1','House no., street, area','autocomplete="street-address"','full')+
     fld('city','City','autocomplete="address-level2"')+
     fld('state','State','autocomplete="address-level1"')+
     fld('pin','PIN code','inputmode="numeric" maxlength="6" autocomplete="postal-code" placeholder="6 digits"')+
   '</div></section>'+
   '<section class="panel"><h2>Payment method</h2><div class="pay-opts">'+
   opts.map(function(o){return '<label class="opt"><input type="radio" name="pay" value="'+o[0]+'" data-co="pay"'+(S.co.pay===o[0]?' checked':'')+'><div><strong>'+o[1]+'</strong><span>'+o[2]+'</span></div></label>';}).join('')+
   '</div><div class="pay-panel" id="payPanel"></div></section></div>'+
   '<aside class="panel summary" id="summary" aria-label="Order summary"></aside></div>';
  renderSummary();renderPayPanel();
}
function renderSummary(){
  var el=$('#summary');if(!el)return;
  var t=totals();
  el.innerHTML='<h2>Order summary</h2><div class="sum-items">'+items().map(function(x){return '<div class="sum-item"><span>'+esc(x.p.name)+' × '+x.qty+'</span><b class="num">'+inr(x.p.price*x.qty)+'</b></div>';}).join('')+'</div>'+
   '<div class="row"><span>Subtotal</span><b class="num">'+inr(t.sub)+'</b></div><div class="row"><span>Delivery</span><b class="num">'+(t.ship?inr(t.ship):'Free')+'</b></div>'+
   '<div class="row total"><span>Total</span><span class="num">'+inr(t.total)+'</span></div><p class="hint">Prices include GST.</p>';
}
function upiLink(total){return 'upi://pay?pa=bazaarmini@example&pn='+encodeURIComponent('Bazaar Mini')+'&am='+total+'&cu=INR&tn='+encodeURIComponent('Bazaar Mini order');}
function renderPayPanel(){
  var el=$('#payPanel');if(!el)return;
  var t=totals(),m=S.co.pay,h='';
  if(m==='cod'){
    h='<p>Pay <b class="num">'+inr(t.total)+'</b> in cash or by UPI to the delivery partner when your order arrives. There is no extra charge for cash on delivery.</p>'+
      '<button class="btn primary block" data-action="place">Place order</button>';
  }else if(m==='card'){
    h='<div class="fields">'+
      fld('card','Card number','inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456" maxlength="19"','full')+
      fld('cname','Name on card','autocomplete="cc-name"','full')+
      fld('exp','Expiry (MM/YY)','inputmode="numeric" autocomplete="cc-exp" placeholder="MM/YY" maxlength="5"')+
      fld('cvv','CVV','inputmode="numeric" autocomplete="cc-csc" maxlength="4" type="password"')+
      '</div><p class="notice">Demo store: card details are checked on this page only and are never saved or sent. Use the test card 4242 4242 4242 4242 with any future expiry and any CVV.</p>'+
      '<button class="btn primary block" data-action="place">Pay '+inr(t.total)+' and place order</button>';
  }else{
    h='<div class="qr-box"><div class="qr" id="qr" aria-label="UPI payment QR code"></div><div class="qr-meta"><span class="hint">Amount to pay</span><span class="amt">'+inr(t.total)+'</span>'+
      '<p class="hint">Open any UPI app, choose Scan, and scan this code. When the payment shows as successful, press the button below.</p>'+
      '<button class="btn sm" data-action="email-qr" style="justify-self:start">Send this QR to my email</button></div></div>'+
      '<p class="notice">Demo store: this QR is not linked to a real account and no email is sent from this page. A live store would generate it on the server.</p>'+
      '<button class="btn primary block" data-action="place">I have paid, place my order</button>';
  }
  el.innerHTML=h;
  if(m==='online')drawQR(t.total);
}
function drawQR(total){
  var box=$('#qr');if(!box)return;
  var link=upiLink(total);
  try{
    new QRCode(box,{text:link,width:176,height:176,colorDark:'#000000',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});
  }catch(e){box.innerHTML='<span class="hint" style="word-break:break-all;font-size:.7rem">'+esc(link)+'</span>';}
}
function validate(){
  var c=S.co,e={};
  if(c.name.trim().length<2)e.name='Enter your full name.';
  if(!/^[6-9]\d{9}$/.test(c.phone))e.phone='Enter a 10-digit mobile number.';
  if(c.line1.trim().length<5)e.line1='Enter your house number, street and area.';
  if(c.city.trim().length<2)e.city='Enter your city.';
  if(c.state.trim().length<2)e.state='Enter your state.';
  if(!/^\d{6}$/.test(c.pin))e.pin='Enter a 6-digit PIN code.';
  if(c.pay==='card'){
    var num=c.card.replace(/\s/g,'');
    if(num.length<13||!luhn(num))e.card='Enter a valid card number.';
    if(c.cname.trim().length<2)e.cname='Enter the name on the card.';
    var m=/^(\d{2})\/(\d{2})$/.exec(c.exp);
    if(!m||+m[1]<1||+m[1]>12)e.exp='Use MM/YY.';
    else{var now=new Date(),y=2000+ +m[2],mo=+m[1];if(y<now.getFullYear()||(y===now.getFullYear()&&mo<now.getMonth()+1))e.exp='This card has expired.';}
    if(!/^\d{3,4}$/.test(c.cvv))e.cvv='Enter the 3 or 4 digit CVV.';
  }
  return e;
}
function showErrors(e){
  [].forEach.call(document.querySelectorAll('[data-err]'),function(n){n.textContent=e[n.dataset.err]||'';});
  var first=Object.keys(e)[0];
  if(first){var f=$('#co-'+first);if(f){f.focus();f.scrollIntoView({block:'center',behavior:'smooth'});}}
}
function placeOrder(){
  var e=validate();showErrors(e);if(Object.keys(e).length)return;
  var c=S.co,t=totals(),list=items();
  store.set('bm_addr_'+S.user.email,{name:c.name,phone:c.phone,line1:c.line1,city:c.city,state:c.state,pin:c.pin});
  var d=new Date(),ymd=''+d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0');
  var rnd=function(n){var s='';for(var i=0;i<n;i++)s+=Math.floor(Math.random()*10);return s;};
  var payLabel=c.pay==='cod'?'Cash on delivery':(c.pay==='card'?'Card ending '+c.card.replace(/\s/g,'').slice(-4):'UPI QR payment');
  var order={
    id:'BM'+ymd+'-'+rnd(5),track:'BMT'+rnd(10),email:S.user.email,created:Date.now(),
    items:list.map(function(x){return {id:x.p.id,name:x.p.name,price:x.p.price,qty:x.qty,h:x.p.h,i:x.p.i};}),
    sub:t.sub,ship:t.ship,total:t.total,pay:c.pay,payLabel:payLabel,
    addr:{name:c.name.trim(),phone:c.phone,line1:c.line1.trim(),city:c.city.trim(),state:c.state.trim(),pin:c.pin}
  };
  var all=store.get('bm_orders',[]);all.push(order);store.set('bm_orders',all);
  S.cart={};saveCart();
  ['card','cname','exp','cvv'].forEach(function(k){S.co[k]='';});S.co.pay='cod';
  S.order=order;updateHeader();setView('done');
}

/* ---------- order detail ---------- */
var STEPS=['Order placed','Packed','Shipped','Out for delivery','Delivered'];
function stageOf(o){return Math.min(4,Math.floor((Date.now()-o.created)/864e5));}
var REASONS=['Ordered by mistake','Found a better price','Delivery is too slow','Want to change the address or items','Other'];
function cancelHTML(o,cancelled,canCancel){
  if(cancelled)return '<div class="panel" style="margin-top:18px"><h2>This order is cancelled</h2><p class="hint">'+(o.reason?'Reason: '+esc(o.reason)+'. ':'')+'Cancelled on '+dateText(o.cancelledAt)+'.</p></div>';
  if(!canCancel)return '<div class="panel" style="margin-top:18px"><h2>Cancellation is closed</h2><p class="hint">This order has already shipped, so it can no longer be cancelled here. You can refuse delivery or request a return after it arrives.</p></div>';
  if(S.cancelAsk===o.id){
    return '<div class="panel confirm" style="margin-top:18px"><h2>Cancel this order?</h2>'+
      '<div class="field"><label for="cancelReason">Reason</label><select id="cancelReason">'+REASONS.map(function(r){return '<option>'+esc(r)+'</option>';}).join('')+'</select></div>'+
      '<p class="hint">'+(o.pay==='cod'?'You have not paid anything, so there is nothing to refund.':'Your '+inr(o.total)+' goes back to your original payment method in 5 to 7 working days (demo).')+'</p>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn danger" data-action="cancel-yes" data-id="'+esc(o.id)+'">Yes, cancel order</button><button class="btn" data-action="cancel-no">Keep my order</button></div></div>';
  }
  return '<div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap;align-items:center"><button class="btn" data-action="cancel-ask" data-id="'+esc(o.id)+'">Cancel order</button><span class="hint">You can cancel until the order ships.</span></div>';
}
function orderHTML(o,fresh){
  var cancelled=o.status==='cancelled',stage=stageOf(o),canCancel=!cancelled&&stage<2;
  var tl=cancelled?'<li class="done"><b>Order placed</b><small>'+dateText(o.created)+'</small></li><li class="x"><b>Order cancelled</b><small>'+dateText(o.cancelledAt)+'</small></li>':STEPS.map(function(s,i){
    var cls=i<stage||(i===4&&stage===4)?'done':(i===stage?'now':'');
    var when=i===0?dateText(o.created):'Expected '+dateText(o.created+i*864e5);
    return '<li class="'+cls+'"><b>'+s+'</b><small>'+when+'</small></li>';
  }).join('');
  var payNote=cancelled?(o.pay==='cod'?'Cancelled. Nothing was charged.':'Cancelled. '+inr(o.total)+' goes back to your original payment method in 5 to 7 working days (demo).'):(o.pay==='cod'?'Cash on delivery. Pay '+inr(o.total)+' when it arrives.':'Paid '+inr(o.total)+' ('+esc(o.payLabel)+')');
  var head=fresh&&!cancelled
    ?'<div class="thanks"><span class="tick" aria-hidden="true">✓</span><div><h1>Thank you, '+esc(o.addr.name.split(' ')[0])+'!</h1><p>Your order is placed successfully. We will start packing it now.</p></div></div>'
    :'<button class="link" data-action="orders-back">← All orders</button><h1 style="margin-top:8px">Order '+esc(o.id)+(cancelled?' (cancelled)':'')+'</h1>';
  return head+
   '<div class="facts"><div class="fact"><small>Order ID</small><b class="mono">'+esc(o.id)+'</b></div>'+
   '<div class="fact"><small>Tracking ID</small><b class="mono">'+esc(o.track)+'</b><button class="link" style="justify-self:start;font-size:.85rem" data-action="copy" data-text="'+esc(o.track)+'">Copy tracking ID</button></div>'+
   '<div class="fact"><small>Estimated delivery</small><b>'+(cancelled?'Cancelled':dateText(o.created+4*864e5))+'</b></div>'+
   '<div class="fact"><small>Payment</small><b>'+payNote+'</b></div></div>'+
   '<div class="cols"><section class="panel"><h2>Track your order</h2><ul class="tl">'+tl+'</ul><p class="hint">Tracking dates are an estimate for this demo. A live store would show updates from the courier.</p></section>'+
   '<section class="panel"><h2>Delivering to</h2><p class="addr"><b>'+esc(o.addr.name)+'</b><br>'+esc(o.addr.line1)+'<br>'+esc(o.addr.city)+', '+esc(o.addr.state)+' '+esc(o.addr.pin)+'<br>Mobile: '+esc(o.addr.phone)+'</p>'+
   '<h2>Items</h2><div class="sum-items" style="max-height:none">'+o.items.map(function(x){return '<div class="sum-item"><span>'+esc(x.name)+' × '+x.qty+'</span><b class="num">'+inr(x.price*x.qty)+'</b></div>';}).join('')+'</div>'+
   '<div class="row"><span>Subtotal</span><b class="num">'+inr(o.sub)+'</b></div><div class="row"><span>Delivery</span><b class="num">'+(o.ship?inr(o.ship):'Free')+'</b></div><div class="row total"><span>Total</span><span class="num">'+inr(o.total)+'</span></div></section></div>'+
   cancelHTML(o,cancelled,canCancel)+'<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><button class="btn primary" data-action="shop">Continue shopping</button>'+(fresh?'<button class="btn" data-action="orders">My orders</button>':'')+'</div>';
}
function renderDone(){$('#main').innerHTML=orderHTML(S.order,true);}
function renderOrders(){
  if(!S.user){
    $('#main').innerHTML='<div class="empty"><h1>Your orders</h1><p>Login to see your orders and track them.</p><button class="btn primary" data-action="account">Login / Register</button></div>';return;
  }
  var all=store.get('bm_orders',[]).filter(function(o){return o.email===S.user.email;}).sort(function(a,b){return b.created-a.created;});
  if(S.orderOpen){
    var o=all.filter(function(x){return x.id===S.orderOpen;})[0];
    if(o){$('#main').innerHTML=orderHTML(o,false);return;}
    S.orderOpen=null;
  }
  $('#main').innerHTML='<h1>Your orders</h1>'+(all.length
    ?'<div class="stack" style="margin-top:14px">'+all.map(function(o){
      var stage=Math.min(4,Math.floor((Date.now()-o.created)/864e5));
      return '<div class="ord"><div><b class="mono">'+esc(o.id)+'</b><p class="hint">'+dateText(o.created)+' · '+o.items.reduce(function(a,x){return a+x.qty;},0)+' items · <span class="num">'+inr(o.total)+'</span></p><span class="pill'+(o.status==='cancelled'?' bad':'')+'">'+(o.status==='cancelled'?'Cancelled':STEPS[stage])+'</span></div><button class="btn sm" data-action="open-order" data-id="'+esc(o.id)+'">Track</button></div>';
    }).join('')+'</div>'
    :'<div class="empty"><p>You have not placed an order yet.</p><button class="btn primary" data-action="shop">Start shopping</button></div>');
}

function cancelOrder(id){
  var el=$('#cancelReason'),reason=el?el.value:'';
  var all=store.get('bm_orders',[]),o=all.filter(function(x){return x.id===id;})[0];
  if(!o||o.status==='cancelled'){S.cancelAsk=null;render();return;}
  if(stageOf(o)>=2){S.cancelAsk=null;render();toast('This order has already shipped and cannot be cancelled.');return;}
  o.status='cancelled';o.cancelledAt=Date.now();o.reason=reason;
  store.set('bm_orders',all);
  if(S.order&&S.order.id===id)S.order=o;
  S.cancelAsk=null;render();toast('Order '+id+' is cancelled');
}

/* ---------- render ---------- */
function render(){
  updateHeader();
  if(S.view==='shop')renderShop();
  else if(S.view==='checkout')renderCheckout();
  else if(S.view==='done')renderDone();
  else if(S.view==='orders')renderOrders();
  else if(S.view==='product')renderProduct();
}

/* ---------- events ---------- */
document.addEventListener('click',function(ev){
  var t=ev.target.closest('[data-action]');if(!t)return;
  var a=t.dataset.action,id=t.dataset.id;
  if(a==='scrim-auth'){if(ev.target===t)closeLayer();return;}
  if(a==='home'||a==='shop'){ev.preventDefault();closeLayer();S.q='';var q=$('#q');if(q)q.value='';setView('shop');}
  else if(a==='view'){closeLayer();S.pid=id;setView('product');}
  else if(a==='back'){closeLayer();setView('shop');}
  else if(a==='buy'){
    if(!S.user){S.pending=id;S.afterAuth='checkout';openAuth('login','Login or register to buy “'+BYID[id].name+'”.');}
    else{if(!S.cart[id]){S.cart[id]=1;saveCart();updateHeader();}goCheckout();}
  }
  else if(a==='cart')openCart();
  else if(a==='close-layer')closeLayer();
  else if(a==='add')addToCart(id);
  else if(a==='inc')setQty(id,1);
  else if(a==='dec')setQty(id,-1);
  else if(a==='remove')removeItem(id);
  else if(a==='cat'){S.cat=t.dataset.cat;renderGrid();}
  else if(a==='clear'){S.cat='All';S.q='';$('#q').value='';renderGrid();}
  else if(a==='checkout')goCheckout();
  else if(a==='account')openAccount();
  else if(a==='logout')logout();
  else if(a==='auth-tab')openAuth(t.dataset.tab,S.authMsg);
  else if(a==='orders'){closeLayer();S.orderOpen=null;setView('orders');}
  else if(a==='orders-back'){S.orderOpen=null;render();}
  else if(a==='open-order'){S.orderOpen=id;render();window.scrollTo(0,0);}
  else if(a==='cancel-ask'){S.cancelAsk=id;render();var cf=document.querySelector('.confirm');if(cf)cf.scrollIntoView({block:'center',behavior:'smooth'});}
  else if(a==='cancel-no'){S.cancelAsk=null;render();}
  else if(a==='cancel-yes')cancelOrder(id);
  else if(a==='place')placeOrder();
  else if(a==='email-qr'){
    var em=S.user?S.user.email:'your email';
    toast('Demo only: no email is sent from this page. Scan the QR shown here instead.');
  }
  else if(a==='copy'){
    var txt=t.dataset.text;
    try{navigator.clipboard.writeText(txt).then(function(){toast('Tracking ID copied');},function(){toast('Copy is not available here. Select the ID and copy it.');});}
    catch(e){toast('Copy is not available here. Select the ID and copy it.');}
  }
});
document.addEventListener('submit',function(ev){
  var f=ev.target.closest('[data-form]');if(!f)return;
  ev.preventDefault();
  if(f.dataset.form==='register')doRegister();else doLogin();
});
document.addEventListener('input',function(ev){
  var t=ev.target;
  if(t.id==='q'){S.q=t.value;if(S.view!=='shop'){S.view='shop';render();}else renderGrid();return;}
  var k=t.dataset&&t.dataset.co;if(!k||k==='pay')return;
  if(k==='card')t.value=t.value.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
  if(k==='exp'){var v=t.value.replace(/\D/g,'').slice(0,4);if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);t.value=v;}
  if(k==='cvv'||k==='phone'||k==='pin')t.value=t.value.replace(/\D/g,'');
  S.co[k]=t.value;
  var er=document.querySelector('[data-err="'+k+'"]');if(er)er.textContent='';
});
document.addEventListener('change',function(ev){
  var t=ev.target;
  if(t.id==='sortSel'){S.sort=t.value;renderGrid();return;}
  if(t.dataset&&t.dataset.co==='pay'){S.co.pay=t.value;renderPayPanel();}
});
document.addEventListener('error',function(ev){var t=ev.target;if(t&&t.classList&&t.classList.contains('pimg'))t.remove();},true);
document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&$('#layer').innerHTML)closeLayer();});

render();
})();
