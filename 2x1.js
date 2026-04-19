/* NYXAR — 2x1.js */
'use strict';
const DC=[
  {nombre:"Blanco",hex:"#ffffff"},{nombre:"Gris",hex:"#aaaaaa"},{nombre:"Gris Oscuro",hex:"#555555"},
  {nombre:"Negro",hex:"#111111"},{nombre:"Morado",hex:"#7b00d4"},{nombre:"Azul",hex:"#1565c0"},
  {nombre:"Rosado",hex:"#f48fb1"},{nombre:"Rojo",hex:"#e53935"},{nombre:"Naranja",hex:"#fb8c00"},
  {nombre:"Amarillo",hex:"#fdd835"},{nombre:"Verde",hex:"#43a047"},{nombre:"Verde Oscuro",hex:"#1b5e20"},
];
let s2x1={colorA:{nombre:"Negro",hex:"#111111"},colorB:{nombre:"Blanco",hex:"#f0f0f0"},diseno:"street",dcA:{nombre:"Blanco",hex:"#ffffff"},dcB:{nombre:"Negro",hex:"#111111"},premium:false};

document.addEventListener('DOMContentLoaded',()=>{
  window.addEventListener('scroll',()=>{document.getElementById('navbar')?.classList.toggle('scrolled',window.scrollY>20);},{passive:true});
  Armario.updateBadges();
  buildDcGrids();
  updateCanvases();
  updateTotal();
});

function pickColor(shirt,nombre,hex,btn){
  document.querySelectorAll(`#color${shirt} .cpick`).forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  s2x1[`color${shirt}`]={nombre,hex};
  const sil=document.getElementById(`sil${shirt}`);
  if(sil){sil.style.background=hex;sil.style.border=(hex==='#f0f0f0'||hex==='#ffffff')?'1px solid #ccc':'1px solid rgba(0,0,0,.08)';}
  updateCanvases();
}
function pickDesign(d,btn){
  s2x1.diseno=d;
  document.querySelectorAll('.design-opt').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  updateCanvases();
}
function buildDcGrids(){
  ['A','B'].forEach(s=>{
    const el=document.getElementById(`dc${s}`); if(!el)return; el.innerHTML='';
    const defHex=s==='A'?'#ffffff':'#111111';
    DC.forEach(c=>{
      const btn=document.createElement('button');
      btn.className='dcbtn'+(c.hex===defHex?' active':'');
      btn.style.background=c.hex;
      if(c.hex==='#ffffff')btn.style.border='2.5px solid #ccc';
      btn.title=c.nombre;
      const dark=isDark(c.hex);
      btn.innerHTML=`<span class="ck" style="color:${dark?'#fff':'#111'}">✓</span>`;
      btn.onclick=()=>{
        el.querySelectorAll('.dcbtn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        s2x1[`dc${s}`]=c;
        document.getElementById(`dc${s}Name`).textContent=c.nombre;
        updateCanvases(); updateTotal();
      };
      el.appendChild(btn);
    });
    document.getElementById(`dc${s}Name`).textContent=s==='A'?'Blanco':'Negro';
  });
}
function isDark(hex){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return(r*299+g*587+b*114)/1000<128;}
function updateCanvases(){
  ['A','B'].forEach(s=>{
    const sh=document.getElementById(`x2Shirt${s}`),de=document.getElementById(`x2Design${s}`);
    const cc=s2x1[`color${s}`],cd=s2x1[`dc${s}`];
    if(sh){sh.style.background=cc.hex;sh.style.border=(cc.hex==='#f0f0f0'||cc.hex==='#ffffff')?'1px solid #ccc':'1px solid rgba(0,0,0,.06)';}
    if(de){de.style.color=cd.hex;de.textContent=s2x1.diseno==='street'?'STR':'SWT';}
  });
}
function updateTotal(){
  const t=25.99+4.67+(s2x1.premium?2.99:0);
  const el=document.getElementById('x2Total'); if(el)el.textContent=`$${t.toFixed(2)}`;
  buildPayBtn(t);
}
function toggle2x1Premium(){
  s2x1.premium=!s2x1.premium;
  const btn=document.getElementById('x2BtnPrem'),row=document.getElementById('x2PremRow');
  if(btn){btn.textContent=s2x1.premium?'✓ Activo':'+ $2.99';btn.classList.toggle('active',s2x1.premium);}
  if(row)row.style.display=s2x1.premium?'':'none';
  updateTotal();
}
function buildPayBtn(total){
  const btn=document.getElementById('x2BtnPagar'); if(!btn)return;
  const msg=[
    `🖤 Hola NYXAR! Quiero el 2×1:`,``,
    `👕 Camisa A: ${s2x1.colorA.nombre}`,`👕 Camisa B: ${s2x1.colorB.nombre}`,
    `🎨 Diseño: ${s2x1.diseno==='street'?'Street':'Sweet'}`,
    `🖌️ Color diseño A: ${s2x1.dcA.nombre}`,`🖌️ Color diseño B: ${s2x1.dcB.nombre}`,
    s2x1.premium?`✦ Paquete Premium (+$2.99)`:'',``,
    `💰 Prendas: $25.99`,`🚚 Envío: $4.67`,`💳 Total: $${total.toFixed(2)}`,
  ].filter(l=>l!==undefined).join('\n');
  btn.href=`https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}
let _tt;
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>t.classList.remove('show'),2500);}
