const form = document.querySelector('.signup-form');
const firstName = form.firstName.value;
const lastName = form.lastName.value;
const userEmail = form.userEmail.value;
const userPassword = form.userPassword.value;
const userPhone = form.userPhone.value;
const userName = form.userName.value;
const feedback= document.querySelector('.feedback');

const firstNPattern = /^[a-zA-Z]{1,}$/;
const lastNPattern = /^[a-zA-Z]{1,}$/;
const userEmailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,})?$/
const userPassPattern = /^[a-zA-Z\d]{6,}$/
const userPhonePattern = /^(\d{3})-(\d{3})-(\d{4})$/
const userNamePattern =/^[a-zA-Z\d]{5,12}$/

/* form.addEventListener('submit', e => {
    e.preventDefault();
});
 */
form.firstName.addEventListener('keyup', e =>{
    if(firstNPattern.test(e.target.value)){
        form.firstName.setAttribute('class', 'success')
    } else {
        form.firstName.setAttribute('class', 'error')
    }
})

form.lastName.addEventListener('keyup', e =>{
    if(lastNPattern.test(e.target.value)){
        form.lastName.setAttribute('class', 'success')
    } else {
        form.lastName.setAttribute('class', 'error')
    }
})

form.userEmail.addEventListener('keyup', e =>{
    if(userEmailPattern.test(e.target.value)){
        form.userEmail.setAttribute('class', 'success')
    } else {
        form.userEmail.setAttribute('class', 'error')
    }
})

form.userPassword.addEventListener('keyup', e =>{
    if(userPassPattern.test(e.target.value)){
        form.userPassword.setAttribute('class', 'success')
    } else {
        form.userPassword.setAttribute('class', 'error')
    }
})

form.userPhone.addEventListener('keyup', e =>{
    if(userPhonePattern.test(e.target.value)){
        form.userPhone.setAttribute('class', 'success')
    } else {
        form.userPhone.setAttribute('class', 'error')
    }
})

form.userName.addEventListener('keyup', e =>{
    if(userNamePattern.test(e.target.value)){
        form.userName.setAttribute('class', 'success')
    } else {
        form.userName.setAttribute('class', 'error')
    }

    
})


/* form.addEventListener('submit', (e) =>{
    let messages = [];
    if (firstName.value.length < 3) {
        messages.push("You need more than 3 characters for a name.")
    }

    if(messages.length > 0){
    e.preventDefault();
    errorElement.innerHTML = messages.join(', ')
    } 
}); */

/*-------chapter 8-------- */

/* const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', e => {
  e.preventDefault();
  //console.log(username.value);
  //console.log(form.username.value);
// VALIDATION
const username = form.username.value;

if(usernamePattern.test(username)){
    //feedback passed
    feedback.textContent = 'That username is valid!';
} else {
    // feedback not passed
    feedback.textContent = 'Your username must contain letters only and be 6-12 characters long';
}
});

//LIVE FEEDBACK
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        //console.log('passed!')
        form.username.setAttribute('class','success' )
    } else {
        //console.log('failed!')
        form.username.setAttribute('class','error' )
    }
});


//Testing RegEx

// const username = 'jimmy';
// const pattern = /^[a-z]{6,}$/ 

// let result = pattern.test(username);
// console.log(result);
// if(result){
//     console.log('RegEx test passed!');
// } else {
//     console.log('RegEx test failed!');
// }

//let result = username.search(pattern);
//console.log(result); // 0 is a true, -1 is false, it will return where it starts in the string */