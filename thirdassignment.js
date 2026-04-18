//SECTION A
//FOR EACH
//QUESTION 1
let evenNumbers =[2,4,6,8,10]
evenNumbers.forEach(function(number){
    console.log(number * 2)
})

//QUESTION 2
let names = ["Esther","John","Ade","Mike"]
names.forEach(function(name){
    console.log("Hello " + name)
})

//SECTION B
//MAP
//QUESTION 3
let numbers =[1,2,3,4,5]
let squaredNumbers = numbers.map(number => number * number )
console.log(squaredNumbers)

//QUESTION 4
let prices =[100,200,300]
let discountedPrice = prices.map(price => price * 0.10)
console.log(discountedPrice)

//SECTION C
//FILTER 
//QUESTION 5
let random_numbers =[5,12,8,20,3]
let greaterNumbers = random_numbers.filter((biggerNumbers)=>{
    return biggerNumbers > 10
})
console.log(greaterNumbers)

//QUESTION 6
let ages =[15,22,17,30,18]
let adults = ages.filter((adult)=>{
    return adult >= 18
})
console.log(adults)

//BONUS QUESTION
//QUESTION 7
let scores = [10,15,20,25,30]
let higherScores = scores.filter((higherScore)=>{
    return higherScore > 20
})
console.log(higherScores)
