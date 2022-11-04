let usernameEl = document.querySelector('#username');
let subject = document.querySelector('#subject');
let emailEl = document.querySelector('#email');
let number = document.querySelector('#number');

let form = document.querySelector('#form');
let error =document.querySelector('#error')
let error1 =document.querySelector('#error1')
let error2 =document.querySelector('#error2')
let error3 =document.querySelector('#error3')

form.addEventListener('click',(e)=>{
  
    if(usernameEl.value.length<8){
       error.innerHTML='Name must be longer than 8 characters'
    }
    if(subject.value.length<8){
        error1.innerHTML='Subject must be longer than 8 characters'
     }
     if(emailEl.value.length<8){
        error2.innerHTML='Email must be longer than 8 characters'
     }
     if(number.value.length<8){
        error3.innerHTML='Number must be longer than 8 characters'
     }
    
    e.preventDefault()
}
)



