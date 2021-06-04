
/*-------chapter 7-------- */

const form = document.querySelector('.signup-form');
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
//console.log(result); // 0 is a true, -1 is false, it will return where it starts in the string