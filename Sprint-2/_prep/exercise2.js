// Write a function called `getCheapest` that will take 2 book objects as parameters
//  and return the name of the cheaper book

function getCheapest(book1, book2) {
  if (book1.cost < book2.cost) {
    return book1.title;
  } else {
    return book2.title;
  }
} 

const fictionBook = {
  title: "1984",
  author: "George Orwell",
  category: "Dystopian Fiction",
  subcategory: "Political",
  cost: 9.99,
};

const productivityBook = {
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self-Help",
  subcategory: "Productivity",
  cost: 16.2,
};

// this should output 1984
console.log(getCheapest(fictionBook, productivityBook));
