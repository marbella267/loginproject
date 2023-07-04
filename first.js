var input=document.getElementById('input')
var form=document.getElementById('form')
var mass=document.getElementById('massage')
var btn=document.getElementById('btn')
var divthx=document.getElementsByClassName('logincon')[0]
var email=document.getElementById('emailname')
var divty=document.getElementsByClassName('elsecon')[0]
console.log(input,form,mass,btn,email,divthx,divty) 
 
form.onsubmit=function vaild(e){
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)){
        e.preventDefault()
        divty.style.display="none"
        divthx.style.display="block"
        divty.style.height="0px"
       var emailtext=input.value
       email.innerText=`${emailtext}`

         return 
    }
    else{
        e.preventDefault()
        mass.style.visibility="visible"
    }
}
