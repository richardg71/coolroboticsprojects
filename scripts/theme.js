
document.addEventListener('DOMContentLoaded',()=>{
 const $=(s)=>document.querySelector(s), $$=(s)=>[...document.querySelectorAll(s)];
 const toggle=$('.theme-toggle');
 const applyTheme=(theme)=>{document.documentElement.dataset.theme=theme;if(toggle){toggle.textContent=theme==='dark'?'☼':'☾';toggle.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`)}};
 let saved;try{saved=localStorage.getItem('crp-theme')}catch(e){}
 applyTheme(saved==='light'?'light':'dark');
 toggle?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme(next);try{localStorage.setItem('crp-theme',next)}catch(e){}});
 const menu=$('.menu-toggle'),nav=$('.nav-links');
 menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
 const observer='IntersectionObserver'in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1}):null;
 $$('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('visible'));
 const cards=$$('.project-card, .library-card'),filterBtns=$$('.filter'),search=$('#project-search'),modal=$('#search-modal'),modalInput=$('#modal-search'),results=$('#search-results');
 let level='all';
 function render(){const query=(search?.value||'').toLowerCase().trim();let shown=0;cards.forEach(card=>{const match=(level==='all'||card.dataset.level===level)&&card.dataset.search.includes(query);card.hidden=!match;if(match)shown++});const empty=$('.empty-state');if(empty)empty.hidden=shown!==0;}
 filterBtns.forEach(btn=>btn.addEventListener('click',()=>{level=btn.dataset.filter;filterBtns.forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});render()}));
 search?.addEventListener('input',render);const urlQuery=new URLSearchParams(location.search).get('q');if(search&&urlQuery){search.value=urlQuery;render()}
 function modalMatches(){if(!results)return;const q=modalInput.value.toLowerCase().trim();const projects=(window.CRP_PROJECTS||[]).filter(item=>(item.title+' '+item.desc+' '+item.tags+' '+item.level).toLowerCase().includes(q));results.replaceChildren();const prefix=location.pathname.includes('/guides/')?'../':'';projects.forEach(item=>{const a=document.createElement('a');a.className='result-item';a.href=prefix+(item.slug==='smart-automation'?'projects.html#smart-automation':'guides/'+item.slug+'.html');const strong=document.createElement('strong');strong.textContent=item.title;const small=document.createElement('span');small.textContent=item.level.toUpperCase()+' · '+item.desc;a.append(strong,small);results.append(a)});if(!projects.length){const p=document.createElement('p');p.className='result-item';p.textContent='No matching projects yet.';results.append(p)}}
 let previousFocus=null;
 function openModal(){if(!modal)return;previousFocus=document.activeElement;modal.hidden=false;modalInput.value=search?.value||'';modalMatches();modalInput.focus();document.body.style.overflow='hidden'}
 function closeModal(){if(!modal)return;modal.hidden=true;document.body.style.overflow='';previousFocus?.focus?.()}
 $$('.search-trigger').forEach(b=>b.addEventListener('click',openModal));
 $$('[data-close-search]').forEach(b=>b.addEventListener('click',closeModal));
 modalInput?.addEventListener('input',modalMatches);
 modalInput?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();if(!search){window.location.href=(location.pathname.includes('/guides/')?'../':'')+'projects.html?q='+encodeURIComponent(modalInput.value);return}search.value=modalInput.value;level='all';filterBtns.forEach(b=>{const active=b.dataset.filter==='all';b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});render();closeModal();$('#projects')?.scrollIntoView({behavior:'smooth'})}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal?.hidden)closeModal();if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)&&modal?.hidden){e.preventDefault();openModal()}});
});
