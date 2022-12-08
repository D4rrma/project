const btn = document.getElementById('btn');
const navbar = document.querySelector('nav ul');
btn.addEventListener('click', function(){
    btn.classList.toggle('on');
    navbar.classList.toggle('on');
    document.querySelector('nav').classList.toggle('on');
    document.querySelector('nav .header a').classList.toggle('on');
})


document.onclick = function(hide){
    if(hide.target.id !== 'nav' && hide.target.id !== 'btn'){
        btn.classList.remove('on');
    navbar.classList.remove('on');
    }
}