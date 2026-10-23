document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.navlinks');
 if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 const themeButton=document.querySelector('.theme-toggle'),root=document.documentElement;
 let savedTheme=null;try{savedTheme=localStorage.getItem('portfolio-theme');}catch{}
 if(savedTheme==='dark'||savedTheme==='light')root.dataset.theme=savedTheme;
 const updateThemeButton=()=>{if(!themeButton)return;const dark=root.dataset.theme==='dark';themeButton.textContent=dark?'☀':'☾';themeButton.setAttribute('aria-label',dark?'Cambiar a modo claro':'Cambiar a modo oscuro');themeButton.title=dark?'Cambiar a modo claro':'Cambiar a modo oscuro';};
 updateThemeButton();
 themeButton?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('portfolio-theme',root.dataset.theme);}catch{}updateThemeButton();});
 document.querySelectorAll('[data-bogota-time]').forEach(el=>{const fmt=new Intl.DateTimeFormat('es-CO',{timeZone:'America/Bogota',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});const update=()=>el.textContent=fmt.format(new Date());update();setInterval(update,1000);});
});
