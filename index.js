// NAVBAR
function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
  }
  toggleMenu();

// END

// HEADER
function opacityNav(){
  const nav = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener('scroll', (e) => {
   const scrollTop = window.scrollY || document.scrollTop;
   if( scrollTop > lastScrollTop && window.scrollY > 570){
    console.log(window.scrollY);
    nav.style.backgroundColor = "black";
    nav.style.transition = "background-color 0.8s ease";
    nav.style.boxShadow= "none";
    nav.style.borderStyle = "none";
   }else {
    nav.style.backgroundColor = "transparent";
    nav.style.transition = "all 0.6s ease";
    
    nav.style.borderBottom = "2px solid back";
   }
  })
}

  opacityNav();
 

// END