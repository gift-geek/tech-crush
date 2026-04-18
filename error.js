try {
    //code that might fail goes here
    let result = 10/0;
    console.log(result);
    undefinedFunction(); // This will cause an error!
    console.log("This line will NOT run.");
}catch(error) {
    //This runs ONLY if something goes wrong
    console.log("An error ocured:" + error.message);
}

console.log("The program continues here.");

try{
let age = 22
console.log(age.length())
}catch(error){
    console.log("An error occured: " + Error.message);
}
