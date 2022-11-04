let stays=document.querySelector(".stays");
let act=document.querySelector('.act')



var form = document.querySelector(".ul1");
var btns = form.getElementsByClassName("click");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var acti = document.getElementsByClassName("act");
  acti[0].className = acti[0].className.replace("act", "");
  this.className += " act";
  });
}



stays.addEventListener('click', ()=>{
formtex.innerHTML=`
  <div class="row g-4  active">
              <div class="col-sm-6 ye for">
                <label for="location" class="form-label">Location </label>
                <i class="bi bi-send yes"></i>
                <input type="text" class="form-control" id="location" placeholder="      Where are you going?" value="" required="">
             </div>
                 
              <div class="col-sm-6 ye for">
                <label for="in" class="form-label">Check in</label>
                <input type="text" class="form-control" id="in" placeholder="      Add date" value="" required="">
                <i class="bi bi-calendar4 yes"></i>
              </div>
<div class="col-sm-6 ye for">
                <label for="out" class="form-label">Check out</label>
                <i class="bi bi-calendar4 yes"></i>

                <input type="text" class="form-control" id="out" placeholder="      Add date" value="" required="">
              </div>

              <div class="col-sm-6 ye for">
                <label for="travelers" class="form-label">Travelers</label>
                <i class="bi bi-person yes"></i>
                <input type="text" class="form-control" id="travelers" placeholder="      Travelers" value="" required="">
              </div>

              <button class="btn btn-lg btn-md" type="submit"><i class='bi bi-search mx-2'></i>Search Now</button>
             </div> `
})

let flight=document.querySelector('.flight')
let formtex=document.querySelector('.formtex')

flight.addEventListener('click', ()=>{
formtex.innerHTML=` 

  <div class="row g-4 active ">
<div class="">
  <div class="form-check form-check-inline oneway col-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    return
  </label>
</div>

<div class="form-check form-check-inline oneway col-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
one way  </label></div>
<div class="form-check form-check-inline oneway col-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
multi-city  </label>
</div>
</div>
    <div class="col-sm-6 ye fo">
      <label for="location" class="form-label">Where from?</label>
      <i class="bi bi-airplane yes"></i>
      <input type="text" class="form-control" id="location" placeholder="      Where from?" value="" required="">
    </div>
    <div class="col-sm-6 ye fo">
      <label for="in" class="form-label">Where to?</label>
      <i class="fa-sharp fa-solid fa-plane-arrival yes"></i>
      <input type="text" class="form-control" id="in" placeholder="       Where to?" value="" required="">
    </div>
  <div class="col-sm-6 fo">
      <label for="in" class="form-label">Departune Date</label>
      <input type="date" class="form-control" id="in" placeholder="Where to?" value="" required="">
    </div>
    <div class="col-sm-6  return fo">
    <label for="in" class="form-label">Return Date</label>
    <input type="date" class="form-control" id="in" placeholder="Where to?" value="" required="">
  </div>

    <button class="btn btn-lg flbtn" type="submit"><i class='bi bi-search mx-2'></i>Search Flight</button>
  
`
})
let  cars=document.querySelectorAll('.cars')
cars.forEach(element => {
  

 element.addEventListener('click', ()=>{


   
  formtex.innerHTML=`  
   <select class="form-select form-select-sm mt-4 sel" id="sel" aria-label=".form-select-sm example">
  <option selected value="0">Same drop-off</option>
  <option value="1">Different drop-off</option>
</select>
    <div class="row g-4 formtex1 active ">
   <div class="col-sm-12  w-75 car ye">
        <label for="location" class="form-label">Pick-up location?</label>
        <i class="bi bi-car-front yes"></i>
        <input type="text" class="form-control" id="location" placeholder="      Tbilisi,Georgia?" value="" required="">
      </div>
    <div class="col-sm-6 f">
        <label for="in" class="form-label">Pick-up date</label>
        <input type="date" class="form-control" id="in" placeholder="?" value="" required="">
      </div>
      <div class="col-sm-6 f">
      <label for="in" class="form-label">Drop-off date</label>
      <input type="date" class="form-control" id="in" placeholder="?" value="" required="">
    </div>
  
      <button class="btn btn-lg flbtn" type="submit"><i class='bi bi-search mx-2'></i>Search Now</button>
    </div>`
  });
});

let cruise=document.querySelector('.cruise')

cruise.addEventListener('click', ()=>{
  formtex.innerHTML= 

` 
<div class="row g-4 formtex1 active ">

<div class="col-sm-6 ye for">
      <label for="location" class="form-label">Where from?</label>
      <i class="fa-solid fa-ship yes"></i>  
          <input type="text" class="form-control" id="location" placeholder="       Where are you going?" value="" required="">
    </div>
    <div class="col-sm-6 ye for">
      <label for="in" class="form-label">Which cruise line?</label>
      <i class="fa-solid fa-ferry yes"></i>
      <input type="text" class="form-control" id="in" placeholder="       Where to?" value="" required="">
    </div>
  <div class="col-sm-6 for">
      <label for="in" class="form-label">Departune Date</label>
      <input type="date" class="form-control" id="in" placeholder="Where to?" value="" required="">
    </div>
    <div class="col-sm-6  return for">
    <label for="in" class="form-label">Return Date</label>
    <input type="date" class="form-control" id="in" placeholder="Where to?" value="" required="">
  </div>

    <button class="btn btn-lg" type="submit"><i class='bi bi-search mx-2'></i>Search Now</button>
  </div>
`
})





let b=document.querySelectorAll('.b')
let heart=document.querySelectorAll('.heart')

  
for (let index = 0; index < b.length; index++) {
   b[index].addEventListener('click',()=>{
 heart[index].classList.toggle('red')
;
  
})
};



var allbtn = document.querySelector(".btnone");
var bt = allbtn.getElementsByClassName("bt");
for (var i = 0; i < bt.length; i++) {
  bt[i].addEventListener("click", function() {
  var acti = document.getElementsByClassName("acti");
  acti[0].className = acti[0].className.replace("acti","");
  this.className += " acti";
  });
}




let cardj=[
  {img:"url(img/2.jpg)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'},
{img:"url(img/6.jpg)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'},
{img:"url(img/7.jpg)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'},
{img:"url(../img/img.png)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'},
{img:"url(img/5.jpg)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'},
{img:"url(img/8.jpg)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'},
{img:"url(img/9.jpg)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'},
{img:"url(img/10.jpg)",
star:4.7,
name:'Roosevelt Hotel',
location:'Germany',
price:'$240'}
]



let htmlCode = ``;
let fl=document.getElementById('flights')
let btndiv=document.querySelector('btndiv')
cardj.forEach(function(hotel) {
 htmlCode =  htmlCode +
    `<div class="col-lg-3 col-sm-6">
    <div class="card two" style="background-image:${hotel.img}">
              <div class="starnum d-flex">
      <i class="bi bi-star-fill"></i>
                <h4 class="text-dark" >${hotel.star}</h4>
              </div>
<div class="card-img-overlay ">
        <h4>${hotel.name}</h4>
        <h6> <i class="bi bi-geo-alt"></i>${hotel.location} <span class="ms-5">${hotel.price}</span></h6>
      </div>
    </div>
  </div>

  `
});
fl.addEventListener('click',()=>{
  hotels.innerHTML =htmlCode
  view.style.display='block'

})






let view=document.querySelector(".btn-view")
let card10=document.querySelector(".cards10")


view.addEventListener('click',()=>{

  if (card10.style.display === "flex") {
    card10.style.display = "none";
    view.innerHTML = "View All Places";
  } else {
    card10.style.display = "flex";
    view.innerHTML = "Close";
  }

})


let htmlCode1 = ``;

let hotels = document.querySelector(".cards2");

hotels.innerHTML = htmlCode;

let cardj1=[
  {img:"url(img/11.jpg)",
star:4.9,
name:'Ritz Hotel',
location:'France',
price:'$350'},
{img:"url(img/12.jpg)",
star:4.9,
name:'Ritz Hotel',
location:'France',
price:'$350'},
{img:"url(img/13.jpg)",
star:4.9,
name:'Ritz Hotel',
location:'France',
price:'$350'},
{img:"url(img/14.jpg)",
star:4.9,
name:'Ritz Hotel',
location:'France',
price:'$350'},
{img:"url(img/15.jpg)",
star:4.9,
name:'Ritz Hotel',
location:'France',
price:'$350'},
{img:"url(img/16.jpg)",
star:4.9,
name:'Ritz Hotel',
location:'France',
price:'$350'}
]


let hotels1= document.getElementById("hotel"); 
cardj1.forEach(function(hotel1) {
    htmlCode1 =  htmlCode1 +
       `<div class="col-lg-4 col-md-12">
       <div class="card two1 hotell" style="background-image:${hotel1.img}">
                 <div class="starnum1 d-flex">
         <i class="bi bi-star-fill"></i>
                   <h4 class="text-dark" >${hotel1.star}</h4>
                 </div>
   <div class="card-img-overlay ">
           <h4>${hotel1.name}</h4>
           <h6> <i class="bi bi-geo-alt"></i>${hotel1.location} <span class="ms-5">${hotel1.price}</span></h6>
         </div>
       </div>
     </div>
     `
hotels1.addEventListener('click',()=>{
card10.style.display='none'
hotels.innerHTML=htmlCode1
view.style.display='none'

})})





let cardj2=[
  {img:"url(img/18.jpg)",
star:4.9,
name:'Cruize #1',
location:'Italy',
price:'$20 000'},
{img:"url(img/19.jpg)",
star:4.5,
name:'Cruize #2',
location:'Italy',
price:'$10 000'},
{img:"url(img/17.jpg)",
star:4.1,
name:'Cruize #3',
location:'Italy',
price:'$5 000'}
]


let htmlCode2 = ``;

let hotels2= document.getElementById("cruise"); 
cardj2.forEach(function(hotel2) {
    htmlCode2 =  htmlCode2 +
    `<div class="col-lg-12 cruiz">
    <div class="card two2" style="background-image:${hotel2.img}">
              <div class="starnum2 starnum d-flex">
      <i class="bi bi-star-fill"></i>
                <h4 class="text-dark" >${hotel2.star}</h4>
              </div>
<div class="card-img-overlay ">
        <h4>${hotel2.name}</h4>
        <h6> <i class="bi bi-geo-alt"></i>${hotel2.location} <span class="ms-5">${hotel2.price}</span></h6>
      </div>
    </div>
  </div>
  `
hotels2.addEventListener('click',()=>{
  card10.style.display='none'

  view.style.display='none'

hotels.innerHTML=htmlCode2

})})




let cardj3=[
  {img:"url(img/20.jpg)",
star:4.7,
name:'Euro Tour',
location:'Europe',
price:'$820'},
{img:"url(img/21.jpg)",
star:4.7,
name:'Euro Tour',
location:'Europe',
price:'$820'},
{img:"url(img/22.jpg)",
star:4.8,
name:'Euro Tour',
location:'Europe',
price:'$820'},
{img:"url(img/27.jpg)",
star:4.8,
name:'Euro Tour',
location:'Europe',
price:'$820'},
{img:"url(img/23.jpg)",
star:4.8,
name:'Euro Tour',
location:'Europe',
price:'$820'},
{img:"url(img/24.jpg)",
star:4.8,
name:'Euro Tour',
location:'Europe',
price:'$820'},
{img:"url(img/25.jpg)",
star:4.8,
name:'Euro Tour',
location:'Europe',
price:'$820'},
{img:"url(img/26.jpg)",
star:4.8,
name:'Euro Tour',
location:'Europe',
price:'$820'}
]



let htmlCode3 = ``;
let tour=document.getElementById('tour')

cardj3.forEach(function(hotel) {
 htmlCode3 =  htmlCode3 +
    `<div class="col-lg-3 col-md-6 col-sm-12">
    <div class="card two" style="background-image:${hotel.img}">
              <div class="starnum d-flex">
      <i class="bi bi-star-fill"></i>
                <h4 class="text-dark" >${hotel.star}</h4>
              </div>
<div class="card-img-overlay ">
        <h4>${hotel.name}</h4>
        <h6> <i class="bi bi-geo-alt"></i>${hotel.location} <span class="ms-5">${hotel.price}</span></h6>
      </div>
    </div>
  </div>
  `
});
tour.addEventListener('click',()=>{
  hotels.innerHTML = htmlCode3
 card10.style.display = 'none'
view.style.display = 'none'
})







var swiper = new Swiper(".mySwiper", {
  slidesPerGroup:1,
  loop: true,
  loopFillGroupWithBlank: true,
navigation: {
    nextEl: ".right",
    prevEl: ".left",}, 
  breakpoints:{
  1200:{ slidesPerView: 4,
  spaceBetween: 28,
},
  993:{
    slidesPerView:3,
    spaceBetween: 30,
  },
  769:{
slidesPerView:3,
spaceBetween:10,
  },
  576:{ slidesPerView: 2,
  spaceBetween: 0,
   },
   300:{
slidesPerView:1,
spaceBetween:0,
 },
   

 
}});


var swiper2 = new Swiper(".mySwip", {
  slidesPerGroup: 1,
  loop:true,
  loopFillGroupWithBlank: true,
 navigation: {
    nextEl: ".righ",
    prevEl: ".lef",
  },
 breakpoints:{
    1200:{ slidesPerView: 5,
    spaceBetween: 20,
  },
  993:{
    slidesPerView:3,
    spaceBetween: 30,
  },
  576:{ slidesPerView: 2,
    spaceBetween: 10,
     },
  300:{
   slidesPerView: 1,
  spaceBetween: 0,}}
});


var swiper3 = new Swiper(".mySwi", {
  loop:true,
  loopFillGroupWithBlank: true, 
 navigation: {
    nextEl: ".rig",
    prevEl: ".le",
  },  
  breakpoints:{
    1200:{slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 3,
    },
    993:{
      slidesPerView:3,
      spaceBetween: 10,
    },
  576:{ slidesPerView: 2,
    spaceBetween: 30,
     },
    
    300:{
      slidesPerView: 1,
      spaceBetween: 0,
   
        },
 }
});


let blog1=[{
  img:"url(img/3.jpg)",
  text:'Product designer',
text2:'Our cllients said about our service.<br>said about our service<span class="more">A Product Designer is someone who uses the different facets and tools of design to create and execute a solution that solves for a user’s experience deficiencies. </span>'
},
{  img:"url(img/4.jpg)",
text:'Product designer',
text2:'Our cllients said about our service.<br>said about our service<span class="more">A Product Designer is someone who uses the different facets and tools of design to create and execute a solution that solves for a user’s experience deficiencies. </span>'
},
{ img:"url(img/2.jpg)",
  text:'Product designer',
text2:'Our cllients said about our service.<br>said about our service<span class="more">A Product Designer is someone who uses the different facets and tools of design to create and execute a solution that solves for a user’s experience deficiencies. </span>'
},
{
  img:"url(img/6.jpg)",
  text:'Product designer',
text2:'Our cllients said about our service.<br>said about our service<span class="more">A Product Designer is someone who uses the different facets and tools of design to create and execute a solution that solves for a user’s experience deficiencies. </span>'
},
{  img:"url(img/9.jpg)",
text:'Product designer',
text2:'Our cllients said about our service.<br>said about our service<span class="more">A Product Designer is someone who uses the different facets and tools of design to create and execute a solution that solves for a user’s experience deficiencies. </span>'},
{  img:"url(img/10.jpg)",
text:'Product designer',
text2:'Our cllients said about our service.<br>said about our service<span class="more">A Product Designer is someone who uses the different facets and tools of design to create and execute a solution that solves for a user’s experience deficiencies. </span>'}]

let htmlCode5 = ``;
let blogsw=document.querySelector('.blogsw')

blog1.forEach(function(bl) {
htmlCode5 = htmlCode5 +
`<div class="col-lg col-md-6 col-sm-6 swiper-slide">
<div class="card tree " style="background-image:${bl.img}">
  <div class="card-img-overlay Blogs">
   <h6 class="h6">${bl.text}</h6>
    <p>${bl.text2}</p>
    <button  class="btn myBtn"  type="btn">Read More</button>
  </div>
</div>
</div>`
blogsw.innerHTML=htmlCode5;

})

$(".myBtn").on('click',function(){
  $(this).parent().toggleClass("showContent")
   let replace=$(this).parent().hasClass("showContent") ? 'Read Less' : 'Read More'
   $(this).text(replace)
})

let btnbook=document.querySelector('.btnbook')
let booking=document.querySelector('.booking')
let clos = document.querySelector('.btnclos')

btnbook.addEventListener('click', ()=>{
booking.style.display="block";
})

clos.addEventListener('click', ()=>{
  booking.style.display="none";
  })










$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){ 
           $(this).children(".video").get(0).play();  
     $(this).children(".bi-play-fill").fadeOut();
      }else{   
     $(this).children(".video").get(0).pause();
    $(this).children(".bi-play-fill").fadeIn();
      }
  });


 
    
 


