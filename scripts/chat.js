
document.addEventListener('DOMContentLoaded',()=>{
 const $=(s)=>document.querySelector(s),toggle=$('.chat-toggle'),win=$('.chat-window'),close=$('.chat-close'),msgs=$('.chat-messages'),form=$('.chat-input-area'),input=$('.chat-input'),replies=$('.quick-replies'),typing=$('.typing-indicator');
 if(!toggle||!win||!msgs||!form)return;
 const answers=[
  {keys:['weather','temperature','humidity','dht'],text:'The Weather Station uses a DHT11 sensor to measure temperature and humidity with Arduino. Find it in our Beginner projects.'},
  {keys:['motion','pir','movement','hcsr'],text:'The Motion Detection System uses an HC-SR501 PIR sensor to detect movement. Find it under Intermediate projects.'},
  {keys:['advanced','automation'],text:'Our Advanced Smart Automation System combines multiple Arduino sensors and modules. Check the Advanced project card.'},
  {keys:['arduino'],text:'Arduino is a small programmable electronics board. It reads inputs from sensors and controls outputs like lights and motors.'},
  {keys:['beginner','start','new'],text:'Start with the Weather Station! It is our beginner-friendly Arduino project. You can find it in the project library.'},
  {keys:['help','project'],text:'You can explore our three projects: Weather Station (Beginner), Motion Detection System (Intermediate), and Smart Automation System (Advanced).'},
 ];
 let welcomed=false;
 function message(text,who){const el=document.createElement('div');el.className='chat-message '+who;el.textContent=text;msgs.append(el);msgs.scrollTop=msgs.scrollHeight}
 function respond(value){const q=value.toLowerCase();const found=answers.find(item=>item.keys.some(k=>q.includes(k)));return found?.text||'I can help with Arduino basics, sensors, and choosing a project. Try asking about the Weather Station or motion detection.'}
 function send(value){const text=value.trim();if(!text)return;message(text,'user');input.value='';typing.hidden=false;setTimeout(()=>{typing.hidden=true;message(respond(text),'bot')},450)}
 function setOpen(open){win.hidden=!open;toggle.setAttribute('aria-expanded',String(open));if(open){if(!welcomed){message('Hey, maker! ✳ Need help choosing a robotics project?','bot');welcomed=true}input.focus()}}
 toggle.addEventListener('click',()=>setOpen(win.hidden));close?.addEventListener('click',()=>setOpen(false));form.addEventListener('submit',e=>{e.preventDefault();send(input.value)});
 ['I’m a beginner','Tell me about Arduino','Which projects?'].forEach(t=>{const b=document.createElement('button');b.type='button';b.textContent=t;b.addEventListener('click',()=>send(t));replies.append(b)});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!win.hidden)setOpen(false)});
});
