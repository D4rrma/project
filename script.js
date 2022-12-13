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


//slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//automatic
