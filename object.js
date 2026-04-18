const user = {
    name :"Gift",
    password : 12345,
    isFemale : true,
    city : "Lagos",
    age : 22
}
//for in
for (let key in user){
    console.log("these are the keys : " + key)
}
for (let values in user){
    console.log("these are the values : " + user[values])
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));