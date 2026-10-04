(function(){
const $=s=>document.querySelector(s),D=DATA;
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const list=a=>"<ul>"+a.map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul>";
function img(src,alt,fallback){const i=new Image();i.src=src;i.alt=alt;i.loading="lazy";
 i.onerror=()=>{i.replaceWith(el("div","ph",esc(fallback||alt)))};return i}
$("#hName").textContent=D.name;$("#hRole").textContent=D.title;$("#hDesc").textContent=D.description;$("#hLoc").textContent=D.location;
["#cvNav","#cvHero"].forEach(s=>$(s).href=D.cv);$("#liHero").href=D.linkedin;
const p=$("#profileImg");p.src=IMG.profile;p.alt="Portrait of Nathan Birhane, Material Engineer";p.onerror=()=>{const fb=el("div","portrait portrait-fb","NB");p.replaceWith(fb)};
D.about.forEach(t=>$("#aboutBox").appendChild(el("p",0,esc(t))));
D.focus.forEach(t=>$("#focus").appendChild(el("li",0,esc(t))));
D.experience.forEach(x=>{const c=el("article","card");
 c.innerHTML=`<span class="tag">${esc(x.status)}</span><h3>${esc(x.role)}</h3><p>${esc(x.org)}${x.dates?" · "+esc(x.dates):""}</p>${list(x.points)}`;$("#expList").appendChild(c)});
const cats=["All",...new Set(D.projects.map(x=>x.category))];
cats.forEach((c,i)=>{const b=el("button",0,esc(c));b.type="button";b.setAttribute("aria-pressed",i==0);
 b.onclick=()=>{document.querySelectorAll("#filters button").forEach(x=>x.setAttribute("aria-pressed",x===b));
  document.querySelectorAll(".proj").forEach(card=>card.hidden=!(c=="All"||card.dataset.cat==c))};$("#filters").appendChild(b)});
D.projects.forEach(x=>{const c=el("article","card proj");c.dataset.cat=x.category;
 c.appendChild(img(x.image,x.alt,x.name));
 const b=el("div","b",`<span class="tag">${esc(x.category)}</span><h3>${esc(x.name)}</h3><p><strong>Role:</strong> ${esc(x.role)}</p><p>${esc(x.summary)}</p>`);
 const btn=el("button","btn ghost sm","View Project");btn.type="button";btn.onclick=()=>openModal(x,btn);b.appendChild(btn);c.appendChild(b);$("#projGrid").appendChild(c)});
let last;const M=$("#modal");
function openModal(x,from){last=from;$("#mBody").innerHTML=`<span class="tag">${esc(x.category)}</span><h3 id="mTitle">${esc(x.name)}</h3><p><strong>Role:</strong> ${esc(x.role)}</p><p>${esc(x.summary)}</p><p><strong>Key responsibilities</strong></p>${list(x.points)}<p>${esc(x.more||"")}</p>`;
 M.hidden=false;$("#mClose").focus()}
function closeModal(){M.hidden=true;if(last)last.focus()}
$("#mClose").onclick=closeModal;M.onclick=e=>{if(e.target===M)closeModal()};
document.addEventListener("keydown",e=>{if(e.key=="Escape"){if(!M.hidden)closeModal();else toggle(false)}});
Object.entries(D.skills).forEach(([g,a])=>{const c=el("div","card");c.innerHTML=`<h3>${esc(g)}</h3>${list(a)}`;$("#skillGrid").appendChild(c)});
D.software.forEach(t=>$("#software").appendChild(el("li",0,esc(t))));
$("#eduBox").innerHTML=`<div class="card"><h3>${esc(D.education.degree)}</h3><p><strong><em>${esc(D.education.school)}</em></strong></p><p>${esc(D.education.text)}</p></div>`;
if(D.certifications.length){$("#certifications").hidden=false;D.certifications.forEach(c=>$("#certBox").appendChild(el("div","card",`<h3>${esc(c.name)}</h3><p>${esc(c.issuer||"")} ${esc(c.year||"")}</p>`)))}
if(D.achievements.length){$("#achievements").hidden=false;D.achievements.forEach(c=>$("#achBox").appendChild(el("div","card",`<h3>${esc(c.title)}</h3><p>${esc(c.text||"")}</p>`)))}
const cl=$("#contactList");cl.appendChild(el("li",0,"<strong>Location:</strong> "+esc(D.location)));
if(D.phone)cl.appendChild(el("li",0,`<strong>Phone:</strong> <a href="tel:${esc(D.phone)}">${esc(D.phone)}</a>`));
if(D.email)cl.appendChild(el("li",0,`<strong>Email:</strong> <a href="mailto:${esc(D.email)}">${esc(D.email)}</a>`));
cl.appendChild(el("li",0,`<strong>LinkedIn:</strong> <a href="${esc(D.linkedin)}" target="_blank" rel="noopener">nathan-birhane29</a>`));
$("#form").addEventListener("submit",e=>{e.preventDefault();const f=e.target,m=$("#formMsg");
 if(!f.checkValidity()){m.textContent="Please complete all fields with a valid email.";f.reportValidity();return}
 if(!D.email){m.textContent="Email address is not set yet. Please use LinkedIn to get in touch.";return}
 location.href=`mailto:${D.email}?subject=${encodeURIComponent(f.subject.value)}&body=${encodeURIComponent(f.message.value+"\n\n"+f.name.value+" ("+f.email.value+")")}`;
 m.textContent="Opening your email app..."});
[["about","About"],["experience","Experience"],["projects","Projects"],["skills","Skills"],["education","Education"],["certifications","Certifications"],["achievements","Achievements"]]
 .filter(([id])=>!document.getElementById(id).hidden).forEach(([id,t])=>$("#navLinks").appendChild(el("li",0,`<a href="#${id}">${t}</a>`)));
$("#navLinks").appendChild(el("li",0,`<a href="${D.cv}" target="_blank" rel="noopener">View CV</a>`));
const menu=$("#menu"),bg=$("#burger");
function toggle(o){menu.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Close menu":"Open menu")}
bg.onclick=()=>toggle(!menu.classList.contains("open"));
menu.addEventListener("click",e=>{if(e.target.closest("a,#theme"))toggle(false)});
const root=document.documentElement;let th;try{th=localStorage.getItem("theme")}catch(e){}
if(th)root.dataset.theme=th;
$("#theme").onclick=()=>{const n=root.dataset.theme=="dark"?"light":"dark";root.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}};
$("#foot").textContent="© "+new Date().getFullYear()+" "+D.name+" · "+D.title+" · "+D.location;
})();
