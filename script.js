const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validateInputs();
})
function validateInputs(){
    const usernameVal=username.ariaValueMax.trim();
    const emailVal=email.ariaValueMax.trim();
    const passwordVal=password.ariaValueMax.trim();
    const cpasswordVal=cpassword.ariaValueMax.trim();

    if(usernameVal===''){
        setError(username,'username is required')
    }
    else{
        setsuccess(username);
    }
    if(emailVal===''){
        setError(email,'email is required')
    }
    else{
        setsuccess(email)
    }
    if(passwordVal===''){
        setError(password,'password is required')
    }
    else{
        setsuccess(password);
    }
    if(cpasswordVal){
        setError(cpassword,"password is required");
    }
    else{
        setsuccess(cpassword)
    }
    }
  

function setError(element,message){
    const inputgroup=element.parentelement;
    const errorElement=inputgroup.querySelector(".error");
    
    errorElement.innerText=message;
    inputgroup.classList.add("error");
    inputgroup.classList.remove("success");
}
function setsuccess(element){
    const inputgroup=element.parentelement;
    const errorElement=inputgroup.querySelector(".error");
    
    errorElement.innerText="";
    inputgroup.classList.add("success");
    inputgroup.classList.remove("error");
}