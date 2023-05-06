const submitBtn=document.getElementById("submitBtn");
const nameError=document.getElementById("name-error");
const emailError=document.getElementById("email-error");
const passError=document.getElementById("password-error");
let namee=document.getElementById("name");
let email=document.getElementById("email");
let pass=document.getElementById("password");



submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePass() ){
        alert("Form Submited")
        namee.value="";
        email.value="";
        pass.value="";
    }
})

function validateName(){
    let name=document.getElementById("name").value;

    if(name.length==0){
        nameError.innerHTML="Name is required"
        nameError.previousElementSibling.classList.add("bx-x");
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write your full Name"
        nameError.previousElementSibling.classList.add("bx-x");
        return false;
    }
    nameError.innerHTML=""
    nameError.previousElementSibling.classList.remove("bx-x")
    return true;

}
function validateEmail(){
    let email=document.getElementById("email").value;

    if(email.length==0){
        emailError.innerHTML="email is required"
        emailError.previousElementSibling.classList.add("bx-x");
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Enter Valid Email"
        emailError.previousElementSibling.classList.add("bx-x");
        return false;
    }
    emailError.innerHTML=""
    emailError.previousElementSibling.classList.remove('bx-x')
    return true;

}
function validatePass(){
    let pass=document.getElementById("password").value;

    if(pass.length==0){
        passError.innerHTML="password is required"
        passError.previousElementSibling.classList.add("bx-x");
        return false;
    }
    if(!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML="Write strong 8 digits Password"
        passError.previousElementSibling.classList.add("bx-x");
        return false;
    }
    passError.innerHTML=""
    passError.previousElementSibling.classList.remove('bx-x')
    return true;

}