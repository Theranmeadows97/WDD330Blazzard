let a = 1;
let b = 2;


setTimeout(function(){
    console.log("Async")
}, 100)

fetch('/').then(function(){
    console.log("fetch")
})

console.log("synchronus")

console.log(a);
console.log(b);

