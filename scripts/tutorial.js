
document.addEventListener('DOMContentLoaded',()=>{
 const links=[...document.querySelectorAll('.progress-step')];
 const sections=links.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean);
 function update(){let active=0;sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<230)active=i});links.forEach((a,i)=>{a.classList.toggle('active',i===active);if(i===active)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')})}
 window.addEventListener('scroll',update,{passive:true});update();
 document.querySelectorAll('.copy-code').forEach(btn=>btn.addEventListener('click',async()=>{
  const text=btn.closest('.code-panel')?.querySelector('pre')?.innerText||'';
  try{await navigator.clipboard.writeText(text);btn.textContent='Copied!'}catch(e){btn.textContent='Select code to copy'}
  setTimeout(()=>btn.textContent='Copy',1600)
 }));
});
