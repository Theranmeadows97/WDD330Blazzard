const form = document.querySelector('.signupform');
const errorElement = document.getElementById("error");

form.addEventListener('submit', (e) =>{
    let messages = [];
    if (form.password.value != form.confirmationPassword.value) {
        messages.push("Confirmation password does not match password.")
    }
    
    if(messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ')
    } 
});