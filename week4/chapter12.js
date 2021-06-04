/* const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.com',
    login(){
        console.log('The user logged in.')
    },
    logout(){
        console.log('The user logged out.')
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'Chun li',
    email: 'Chunli@thenetninja.com',
    login(){
        console.log('The user logged in.')
    },
    logout(){
        console.log('The user logged out.')
    }
};

console.log(userTwo.email, userTwo.username);
userTwo.login(); */

/* Writing this type of code (Object Literal Notation)is not very efficient because you repeat yourself in some areas and have 
to chage your lines in other areas. It would be easier to create your own constructor where you can pass in
your own values like:
const member = new User('pineapple@bikinibottom.com', 'Spongebob Squarepants')
*/

// the 'new' kewwowrd 
    // 1 - creates the new empty object{} meaning no properties
    // 2 - binds the value of 'this' to the new empty object
    // 3 - it calls the constructor function to 'build' the object 

class User{
    constructor(username, email){
        // Set properties here
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    // Set methods here
    // login(){
    //     console.log(`${this.username} just logged in.`)
    //     return this;
    // }
    // logout(){
    //     console.log(`${this.username} just logged out.`)
    //     return this;
    // }
    inScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`)
        return this;

    }
}

User.prototype.login = function (){
    console.log(`${this.username} has logged in.`)
    return this
}

User.prototype.logout = function (){
    console.log(`${this.username} has logged out.`)
    return this
}





const userOne = new User('Spongebob', 'pineapple@bikinibottom.com'); 
const userTwo = new User('Patrick', 'rock@bikinibottom.com');

userOne.login().logout()

/* console.log(userOne, userTwo) 
userOne.login();
userTwo.login();
userOne.logout();
userTwo.logout();
userOne.inScore();
userOne.inScore(); */

/* 
userOne.inScore().inScore().inScore(); this statement would currently not work because it is returning a value of
undefined. We need to return a value in the method first.
*/
//userOne.login().inScore().inScore().logout()
//userTwo.login().inScore().inScore().logout()

// Subclasses extend another class and inherit all the properties and methods from that parent class
// Subclasses can also add other unique properties and methods

class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title
    }
    // deleteUser(user){
    //     users = users.filter(u => u.username !== user.username);
    // }

}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){

}

const userThree = new Admin('Sandy', 'treedome@bikinibottom.com', 'squirrel')
//userThree.login().inScore().inScore().logout()

let users = [userOne, userTwo, userThree];

console.log(users);

userThree.deleteUser(userTwo)
console.log(users);

// How to add to the prototype








