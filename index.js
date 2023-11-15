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
   if( scrollTop > lastScrollTop && window.scrollY > 400){
    console.log(window.scrollY);
    nav.style.backgroundColor = "rgb(2, 2, 22)";
    nav.style.transition = "background-color 0.8s ease";
    // nav.style.boxShadow= "10px 5px 10px rgba(2,2, 22, 0.4)";
    // nav.style.borderBottom = "2px solid rgb(2, 2, 30)";
    
   }else if(innerWidth < 800 && window.scrollY > 340){
     nav.style.backgroundColor = "rgb(2, 2, 22)";
     nav.style.transition = "background-color 0.8s ease";
  //  }else if(innerWidth < 770 && nav.addEventListener('click')){
  //    nav.style.backgroundColor = "rgb(2, 2, 22)";
  //    nav.style.transition = "background-color 0.8s ease";
   }
   else{
    nav.style.backgroundColor = "transparent";
    nav.style.transition = "all 0.6s ease";
    // nav.style.borderStyle = "none";
    // nav.style.borderBottom = "none";
   }
  })
}

  opacityNav();
 

// END