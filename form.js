
const form = document.getElementById("form");
const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("Password")
const password2 = document.getElementById("Confirm password")

form.addEventListener("submit", e=>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (userNameValue === "") {
         setError(userName,"plz fill out this field")        
    }
    else{
        setSuccess(userName);
    }

    if (emailValue === "") {
        setError(email,"plz fill out this field");        
    }
    else if(!isEmail(emailValue)){
           setError(email,"Invalid email !!!");
    }
    else{
        setSuccess(email);
    }
    if (passwordValue === "") {
       setError(password,"plz fill out this field");
    }
    else{
        setSuccess(password);
    }
    if (password2Value === "") {
         setError(password2,"plz fill out this field")      
    }
    else if(passwordValue !== password2Value){
        setError(password2," password must be same as above ")
    }
    else{
        setSuccess(password2);
    }
}

function setError(input,message){
  const formControl = input.parentElement
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccess(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success"
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
