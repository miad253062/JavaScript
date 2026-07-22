//task 1.1
let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

console.log(str.length); //return the length of this string
console.log(arr.length); //also return the length of this array
console.log('str[0]:', str[0]); //yes they both work same way.
console.log('arr[0]:', arr[0]);
//console.log(str.push('!')); //string is immutable, we can't modify it
arr.push("!") // passed
console.log(arr);

//task 1.2
const languageName = 'JavaScript'.split('');
console.log(languageName);

const arrCat = ['c', 'a', 't'].join('');
console.log(arrCat);


//task 2.1
let name = 'JavaScript';
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let greet = ' hi there';
console.log(greet.trim());

//task 3.1
let sentence = "Learning JavaScript is fun!";
console.log(sentence.split(' ').slice(0,1)[0]);
console.log(sentence.slice(0, 8));
console.log(sentence.slice(-4));


//task 3.2
let hello = "Hello";
let world = "World";

console.log(hello.concat(" ", world));
console.log(hello + " " +world);
console.log(`${hello} ${world}`);


//task 4.1
const js = "JavaScript";
let reverseWord = '';

console.log("JavaScript".split('').reverse().join(''));

for(let i = js.length -1; i>=0; i--){
    reverseWord += js[i];
}
console.log(reverseWord);

//Comment--------------------------------------------------
// i think the fastest method is for loop method           |
// because, we just loop through the word from reverse     |
// and concat into a new variable                          |
//---------------------------------------------------------


//task 5.1
const student = {
    name: "miad",
    age: 21,
    grade: 'A',
    isEnrolled: true
}

console.log(student);
console.log(student.name);

//task 5.2

//Answer------------------------------------------------------------
//Object is a data structure in JavaScript,                         |
//where we can save data with a proper name,                        |
//which called property or key and                                  |
//our desire data(which called value) with a pair.                  |
//for example const object_name = {key1: value1, 'key 2': value2}   |
//------------------------------------------------------------------


const userData = {
    isCartEmpty: false,
    totalItem: 4,
    itemsAndPrice: {
        mango: 100,
        banana: 50,
        egg: 40
    },
    totalPrice: 190
}


//task 6.1
let car = { 
    brand: "Toyota",
    model: "Corolla", 
    year: 2022 
};

console.log(car.brand);
console.log(car['model']);
car['color'] = 'blue';
car.year = 2023;


//task 7.1
let book = { 
    title: "The Hobbit", 
    author: "Tolkien", 
    pages: 310 
};

console.log(Object.keys(book));
console.log(Object.values(book));
delete book.pages;
console.log(book);

//task 7.2
let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}

console.log(user.address.city);
user.address.country = "Bangladesh";
delete user['address']['zip'];
console.log(user)


//task 8.1
let scores = { 
    math: 90, 
    science: 85, 
    art: 95 
};

let sum = 0;
let _length = Object.keys(scores).length
for(let key in scores){
    console.log(key, ":", scores[key]);
    sum += scores.key;
}
console.log("average:", sum/_length);


//task 9.1
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

//1
let email = contact.email.toLowerCase();
contact.email = email;
console.log(contact);

//2
for(const key in contact){
    console.log(key, '-', contact[key]);
}

//3
contact.favoriteWords = [];
contact.favoriteWords.push('A');
contact.favoriteWords.push('B');
contact.favoriteWords.push('C');

console.log(contact);

//4
let reverseName = contact.name.split('').reverse().join('');
contact['name'] = reverseName;
console.log(contact)

//5
if(contact.email.includes("@email.com")){
    console.log("valid email address");
}
