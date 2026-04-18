//1.SUBSTRING AND SLICE.
const str = "Nigeria is awesome";
const country = str.substring(0,7);
console.log(country)
const word = str.slice(11);
console.log(word)
const anotherWord = str.slice(8,10);
console.log(anotherWord)

//2.SPLIT.
const names ="John,Jane,Doe";
const nameArray = names.split(",");
console.log(nameArray)
const joined = nameArray.join(" ");
console.log(joined)
const path ="/user/home/docs";
const part = path.split("/")
console.log(part)
const home =part[2];
console.groupCollapsed(home)

//3.MIX.
const email = "user@example.com";
const userName = email.split("@")[0];
console.log(userName)
const isDotCom = email.endsWith(".com")
console.log(isDotCom)
const at = email.replace("@","AT")
console.log(at)