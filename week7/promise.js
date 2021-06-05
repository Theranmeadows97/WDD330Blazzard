//if promis is complete, RESOLVE, if failed, REJECT
let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve("succes")
    } else {
        reject("failed")
    }
})

p.then((message) => {
    // will run AFTER a resolve
    console.log("This is in the then " + message)
}) .catch((message) => { 
    // will run AFTER a reject
    console.log("this is in the catch " + message)
})


//----------WEB DEV SIMPLIFIED CALLBACK FUNCTION INTO A PROMISE FUNCTION------
   //Checking on two variables
   let userLeft = false
   let userWatchingCatMeme = false

   // EXAMPLE 1
   function watchTutorialCallback(callback, errorCallback) {
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }

  //--Changing from a call back to a promise 
  
  function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }

  // EXAMPLE 2
  
  watchTutorialCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })
  

  //CHANGED INTO A PROMISE
  watchTutorialPromise().then(message => {
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })
  


// EXAMPLE 3

  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  // run all the promises and then call .then or .catch if they are successes or rejections
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })
  
  //do something AS SOON AS one thing completes
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })
 
   