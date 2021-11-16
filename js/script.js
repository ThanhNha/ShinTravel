

let list_menu = document.querySelectorAll('.menu-link');
// console.log(list_menu);
for(let i = 0 ; i < list_menu.length ; i++){
  list_menu[i].onclick = function(){
    let j = 0 ;
    while(j < list_menu.length){
      list_menu[j++].className = 'menu-link';
    }
    list_menu[i].className = 'menu-link active';
  }
}

let icon_open = document.querySelector(".icon-open");
let open = document.getElementById("open")
// console.log(open);
icon_open.onclick = ()=>{
  document.querySelector('.header-menu').classList.toggle('active');
  open.classList.toggle('fa-times')
 
}


let icon_search = document.getElementById('search');


let form_search =  document.querySelector('.header-search');
icon_search.onclick = () =>{
 icon_search.classList.toggle('fa-times');
 form_search.classList.toggle('active');
}


let video = document.getElementById('video-slider')
let btn_video = document.querySelectorAll('.vid-btn')
console.log(btn_video);
btn_video.forEach(btn =>{
  btn.addEventListener('click',()=>{
    document.querySelector('.home-controls .active').classList.remove('active');
    btn.classList.add('active');
    let src_vd = btn.dataset.src;
    video.src = src_vd;
  })
});


let btn_next = document.querySelector('.btn-next');
let btn_prev = document.querySelector('.btn-prev');
// console.log(btn_next);
let slides = document.querySelectorAll('.reviews-slider')
console.log(slides);
slides.forEach(function(slide, index){
  slide.style.left = `${index*100}%`;
})
// setTimeout(,
let counter = 0;
btn_next.addEventListener('click',function(){
  counter++;
  carousel();

})
btn_prev.addEventListener('click',function(){
  counter--;
  carousel();
})
function carousel(){
  if(counter == slides.length)
  {
    counter = 0;
  }
  if(counter < 0){
    counter = slides.length - 1;
  }
  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${counter* 100}%)`;
   });
}






// let search = document.querySelector(".search-form")
// // console.log(search);
// document.querySelector("#search-btn").onclick = () =>{
//     search.classList.toggle("active");
    
// }

// let login = document.querySelector(".login")
// // console.log(search);
// document.querySelector("#login-btn").onclick = () =>{
//     login.classList.toggle("active");
// }
// document.querySelector("#close-login").onclick = () =>{
//     login.classList.remove("active");
// }






// window.onscroll =  () =>{
//     if(window.scrollY > 80){
//         document.querySelector('.header-bottom').classList.add('active')
//     }else{
//         document.querySelector('.header-bottom').classList.remove('active')
//     }
// }

// window.onload =  () =>{
//     if(window.scrollY > 80){
//         document.querySelector('.header-bottom').classList.add('active')
//     }else{
//         document.querySelector('.header-bottom').classList.remove('active')
//     }
// }



// function load(){
//   document.querySelector('.loader').classList.add('active');
// }
// function fade_out(){
//   setInterval(load, 4000);
// }
// window.onload = fade_out;

// var swiper = new Swiper(".home-slider", {
    
//    loop:true,
//    centeredSlides: true,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
        
//       },
//       768: {
//         slidesPerView: 2,
        
//       },
//       1024: {
//         slidesPerView: 3,
        
//       },
//     },
//   });



//   var swiper = new Swiper(".featured-slider", {
//     loop:true,
//     grabCursor: true,
//     spaceBetween: 10,
//     centeredSlides: true,
   
//          autoplay: {
//            delay: 2500,
//            disableOnInteraction: false,
//          },
//          navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//      breakpoints: {
//        0: {
//          slidesPerView: 1,
         
//        },
//        450: {
//         slidesPerView: 2,
        
//       },
//        768: {
//          slidesPerView: 3,
         
//        },
//        1024: {
//          slidesPerView: 4,
         
//        },
//      },
//    });


//    var swiper = new Swiper(".arrivals-slider", {
    
//     loop:true,
//     grabCursor: true,
//     spaceBetween: 10,
//     centeredSlides: true,
//          autoplay: {
//            delay: 3500,
//            disableOnInteraction: false,
//          },
//      breakpoints: {
//        0: {
//          slidesPerView: 1,
         
//        },
//        768: {
//          slidesPerView: 2,
         
//        },
//        1024: {
//          slidesPerView: 3,
         
//        },
//      },
//    });

//    var swiper = new Swiper(".blogs-slider", {
    
//     loop:true,
//     spaceBetween: 10,
//     centeredSlides: true,
//     grabCursor: true,
//          autoplay: {
//            delay: 3500,
//            disableOnInteraction: false,
//          },
//      breakpoints: {
//        0: {
//          slidesPerView: 1,
         
//        },
//        768: {
//          slidesPerView: 2,
         
//        },
//        1024: {
//          slidesPerView: 3,
         
//        },
//      },
//    });