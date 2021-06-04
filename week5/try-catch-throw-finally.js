try{
    throw "This stops the program from running any further."
    console.log("This line will not print out because of the throw")
} catch (err){
    console.log("Caught", err)
} finally{
    console.log("Whether there is an erro or not, this 'finally' message will get printed.")
}

console.log("This message can still run after the Try block.")