//Task 1 CREATING VARIABLES
let customerName = "Excel";
let customerAge = 18;
let bookTitle = "Nine tailed fox";
let bookPrice = 58.60;
let quantity = 9;
let isStudent = true;

// Task 2 ARITHEMETIC OPERATORS
let totalPrice = bookPrice*quantity;

// Task 3 COMPARISON OPERATORS
let isAdult = customerAge >= 18;
let buyingManyBooks = quantity > 3;
let isBookFiveThousand = totalPrice === 5000;

// Task 4 USING NON PRIMITIVE DATA TYPES
const customerOrder={
  customerName: customerName,
  bookTitle: bookTitle,
  quantity: quantity,
  totalPrice: totalPrice
};

//Task 5 RESULTS
console.log("Customer name: ",customerName);
console.log("Book title: ",bookTitle);
console.log("Total price: ",totalPrice);
console.log("Is customer an Adult?: ",isAdult);
console.log("Buying more than 3 books?: ",buyingManyBooks);
console.log("is book price 5000?: " ,isBookFiveThousand);