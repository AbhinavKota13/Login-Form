const outer=document.querySelector('.outer');
const inner=document.querySelector('.inner');
const inner2=document.querySelector('.inner2');
const icon=document.querySelector('.icon');
const back=document.querySelector('.back');
const back_login=document.querySelector('.back_login');
icon.addEventListener('click',()=>{inner.classList.add('active');});
icon.addEventListener('click',()=>{back.classList.add('active');});
icon.addEventListener('click',()=>{inner2.classList.add('active');});
back.addEventListener('click',()=>{inner.classList.remove('active');});
back.addEventListener('click',()=>{back.classList.remove('active');});
back.addEventListener('click',()=>{inner2.classList.remove('active');});
back_login.addEventListener('click',()=>{close('about.html');});
back_login.addEventListener('click',()=>{open('Login.html');});