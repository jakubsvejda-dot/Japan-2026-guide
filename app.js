
const trip = await fetch('./data.json').then(r=>r.json());
const app=document.querySelector('#app');
const bottom=[...document.querySelectorAll('.bottom button')];
const drawer=document.querySelector('#drawer'),scrim=document.querySelector('#scrim');

function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function active(view){bottom.forEach(b=>b.classList.toggle('active',b.dataset.view===view))}
function closeDrawer(){drawer.classList.remove('open');scrim.classList.remove('open');drawer.setAttribute('aria-hidden','true')}
function bind(){document.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>go(x.dataset.go))}
function routeCards(){
 const cities=[...new Map(trip.days.map(d=>[d.city.split(' → ').slice(-1)[0],d])).values()];
 return cities.map((d,i)=>`<div class="route-step"><small>${d.date}</small><b>${esc(d.city)}</b><small>${esc(d.title)}</small></div>`).join('');
}
function home(){
 active('home');
 app.innerHTML=`
 <section class="hero"><div class="hero-copy"><span class="pill">${trip.meta.dates}</span><h1>${trip.meta.title}</h1><p>${trip.meta.travellers}<br>${trip.meta.subtitle} · jeden den, jedno téma a dost prostoru Japonsko skutečně zažít.</p><button class="primary" data-go="day-0">Začít cestu</button></div></section>
 <section class="section"><div class="section-head"><div><div class="eyebrow">TRASA</div><h2>17 dní, šest ubytování</h2><div class="sub">Od velkoměsta přes tradici a ostrovy zpět do Tokia.</div></div></div><div class="route">${routeCards()}</div></section>
 <section class="section"><div class="section-head"><div><div class="eyebrow">NEJBLIŽŠÍ ÚKOLY</div><h2>Před odletem</h2></div><button class="ghost" data-go="checklist">Otevřít checklist</button></div>
 <div class="grid">
  <article class="card"><div class="icon">☂</div><h3>Vedro a déšť</h3><p>Pláštěnka, malý deštník, SPF 50, ručníček a dostatek vody.</p></article>
  <article class="card"><div class="icon">¥</div><h3>Hotovost</h3><p>Vybrat po příletu; drobné se hodí na chrámy, malé podniky a autobusy.</p></article>
  <article class="card"><div class="icon">⌁</div><h3>Mount Misen</h3><p>Ověřit provoz lanovky a rozhodnout až podle počasí a energie.</p></article>
 </div></section>
 <section class="section"><div class="section-head"><div><div class="eyebrow">HOTELY</div><h2>Domovy na cestě</h2></div></div><div class="grid">${trip.hotels.map(h=>`<article class="card"><div class="date">${h.dates}</div><h3>${esc(h.city)}</h3><p><b>${esc(h.name)}</b><br>${esc(h.area)}</p></article>`).join('')}</div></section>`;
 bind();
}
function days(){
 active('days');
 app.innerHTML=`<section class="section"><div class="section-head"><div><div class="eyebrow">DEN PO DNI</div><h2>Celý itinerář</h2><div class="sub">Klepnutím otevřeš detail, mapu, tipy i časový plán.</div></div></div><div class="grid">${trip.days.map((d,i)=>`<article class="card"><div class="date">${d.date} · ${d.weekday}</div><h3>${esc(d.title)}</h3><p>${esc(d.city)}<br>${esc(d.theme)}</p><div class="tags"><span class="tag">${esc(d.weather)}</span></div><p><button class="ghost" data-go="day-${i}">Detail dne</button></p></article>`).join('')}</div></section>`;bind();
}
function illustration(kind){
 return `<img src="./assets/day-${kind}.svg" alt="Ilustrace dne">`;
}
function day(i){
 active('days'); const d=trip.days[i];
 app.innerHTML=`<section class="day-head"><article class="day-title"><div class="eyebrow">${d.date} · ${d.weekday} · ${esc(d.city)}</div><h1>${esc(d.title)}</h1><p>${esc(d.theme)}</p><div class="tags"><span class="tag">${esc(d.weather)}</span><span class="tag">${d.schedule.length} bodů dne</span></div></article><article class="mission"><div class="eyebrow" style="color:#ffd7d1">MISE DNE</div><p>${esc(d.mission)}</p></article></section>
 <section class="section"><div class="grid"><article class="card wide"><div class="timeline">${d.schedule.map(x=>`<div class="event"><div class="event-time">${esc(x[0])}</div><div class="event-title">${esc(x[1])}</div><div class="event-note">${esc(x[2])}</div></div>`).join('')}</div></article><article class="card tip-card"><h3>Jakubovy tipy</h3>${d.tips.map(t=>`<p>— ${esc(t)}</p>`).join('')}<h3 style="margin-top:22px">Dnes ochutnat</h3><div class="tags">${d.food.map(f=>`<span class="tag">${esc(f)}</span>`).join('')}</div></article></div></section>
 <section class="section"><div class="map-illustration">${illustration(d.hero)}<div class="map-footer"><div><b>Mapa a navigace</b><div class="sub">Otevře hlavní bod dne v Apple Maps.</div></div>${d.map?`<a class="primary" href="${d.map}" target="_blank" rel="noopener">Otevřít mapu ↗</a>`:''}</div></div></section>
 <section class="section"><div class="grid"><article class="card"><h3>Stav dne</h3><div class="check-group"><label><input type="checkbox" data-check="day-${i}-packed"> Věci na den připravené</label><label><input type="checkbox" data-check="day-${i}-done"> Den dokončený</label><label><input type="checkbox" data-check="day-${i}-photo"> Vybraná fotka dne</label></div></article><article class="card wide"><h3>Poznámka k tomuto dni</h3><textarea data-note="day-${i}" placeholder="Co změnit, co si zapamatovat, nejlepší moment…"></textarea></article></div></section>
 <p><button class="ghost" data-go="days">← Zpět na všechny dny</button></p>`;
 bind();restoreLocal();
}
function reservations(){
 active('reservations');
 app.innerHTML=`<section class="section"><div class="section-head"><div><div class="eyebrow">POTVRZENO</div><h2>Rezervace a pevné časy</h2><div class="sub">Tohle jsou body, kolem kterých je itinerář postavený.</div></div></div><article class="card full">${trip.reservations.map(r=>`<div class="reservation"><div><b>${r.date}</b><br><small>${r.time}</small></div><div><b>${r.icon} ${esc(r.name)}</b></div><span class="status">${r.status}</span></div>`).join('')}</article></section>`;
}
function checklist(){
 active('checklist');
 app.innerHTML=`<section class="section"><div class="section-head"><div><div class="eyebrow">PŘED ODLETEM</div><h2>Jednoduchý checklist</h2><div class="sub">Stav se ukládá jen v tomto telefonu nebo počítači.</div></div></div><div class="grid">${trip.checklist.map((g,gi)=>`<article class="card"><h3>${g[0]}</h3><div class="check-group">${g.slice(1).map((x,ii)=>`<label><input type="checkbox" data-check="list-${gi}-${ii}"> ${esc(x)}</label>`).join('')}</div></article>`).join('')}</div></section>`;restoreLocal();
}
function notes(){
 active('notes');
 app.innerHTML=`<section class="section"><div class="section-head"><div><div class="eyebrow">VAŠE VZPOMÍNKY</div><h2>Poznámky a výsledky mise</h2></div></div><div class="grid"><article class="card wide"><h3>Společné poznámky</h3><textarea data-note="global" placeholder="Co ještě zařídit, změnit nebo nezapomenout…"></textarea></article><article class="card"><h3>Po návratu</h3><p>Nejlepší jídlo<br><br>Nejhezčí místo<br><br>Největší překvapení<br><br>Nejlepší společná fotka</p></article></div></section>`;restoreLocal();
}
function restoreLocal(){
 document.querySelectorAll('[data-check]').forEach(c=>{c.checked=localStorage.getItem('check:'+c.dataset.check)==='1';c.onchange=()=>localStorage.setItem('check:'+c.dataset.check,c.checked?'1':'0')});
 document.querySelectorAll('[data-note]').forEach(n=>{n.value=localStorage.getItem('note:'+n.dataset.note)||'';n.oninput=()=>localStorage.setItem('note:'+n.dataset.note,n.value)});
}
function go(view){
 history.replaceState(null,'','#'+view);window.scrollTo(0,0);closeDrawer();
 if(view==='home')home();else if(view==='days')days();else if(view==='reservations')reservations();else if(view==='checklist')checklist();else if(view==='notes')notes();else if(view.startsWith('day-'))day(Number(view.split('-')[1]));else home();
}
bottom.forEach(b=>b.onclick=()=>go(b.dataset.view));
document.querySelector('#menuBtn').onclick=()=>{drawer.classList.add('open');scrim.classList.add('open');drawer.setAttribute('aria-hidden','false')};
document.querySelector('#closeBtn').onclick=closeDrawer;scrim.onclick=closeDrawer;
document.querySelector('#drawerNav').innerHTML=[['home','Domů'],['days','Všechny dny'],['reservations','Rezervace'],['checklist','Checklist'],...trip.days.map((d,i)=>[`day-${i}`,`${d.date} · ${d.title}`])].map(x=>`<button data-drawer="${x[0]}">${esc(x[1])}</button>`).join('');
document.querySelectorAll('[data-drawer]').forEach(b=>b.onclick=()=>go(b.dataset.drawer));
const saved=localStorage.getItem('theme');if(saved)document.documentElement.dataset.theme=saved;
document.querySelector('#themeBtn').onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('theme',n)};
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js');
go(location.hash.slice(1)||'home');
