
let swiper = new Swiper(".mySwiper",{
    slidesPerView:"auto",
    spaceBetween:30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:2500,
        disbledonInteraction:false,
    },
})

let burger = document.querySelector('.burgerMenu');
let sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', function(){
    sidebar.classList.toggle('change');
});

