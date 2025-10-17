(function(){
var logo = document.querySelector('.logo-gif');
if(logo){
logo.addEventListener('click', function(){
var on = true;
var iv = setInterval(function(){ logo.style.opacity = on? '0.25' : '1'; on = !on; }, 220);
setTimeout(function(){ clearInterval(iv); logo.style.opacity='1'; }, 1600);
});
}


// Marca como ativo o link da página atual (browsers antigos sem history)
try{
var path = location.pathname.split('/').pop() || 'index.html';
var links = document.querySelectorAll('.nav-item');
links.forEach(function(a){ if(a.getAttribute('href')===path) a.classList.add('active'); });
}catch(e){}
})();