const text = " Hello world, how are you";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trimStart());
console.log(text.trim());
console.log(text.includes('are'));
console.log(text.startsWith(' '));


let reverseText = '';

for(let i=text.length -1; i>=0; i--){
    reverseText+=text[i];
}


console.log("reverse text:", reverseText);



const splitedText = text.split(' ');
let reverseWord = [];
const len = splitedText.length
for(let i = 0; i<=len; i++){
    let word = splitedText.pop();
    reverseWord[i] = word;

}

console.log("reverse word:", reverseWord.join(' '));



const student = {
    name: 'miad',
    id: 'ET253062',
    section: 2,
    active: true,
    'hello world' : 'JavaScript'
}


//access using dot notaion

console.log(student.active);
student.active = false;
student.age = 21;


//access using bracket notation
student['age'] = 22; 
student["name"] = "404 error";
console.log(student['hello world']);


//JavaScript Object
const studentMiad = {
    id: 101,
    name: "Miad",
    age: 21,
    department: "EEE",

    address: {
        village: "Ashuganj",
        district: "Brahmanbaria",
        country: "Bangladesh",
        location: {
            latitude: 23.95,
            longitude: 91.12
        }
    },

    subjects: [
        {
            name: "Mathematics",
            marks: 92
        },
        {
            name: "Physics",
            marks: 88
        },
        {
            name: "Programming",
            marks: 95
        }
    ],

    skills: {
        programming: {
            languages: ["C++", "JavaScript", "Python"],
            experience: "Beginner"
        },
        electronics: {
            microcontrollers: ["Arduino", "Raspberry Pi Pico"],
            circuitDesign: true
        }
    },

    isScholarshipHolder: false
};


console.log(Object.keys(studentMiad));
console.log(Object.values(studentMiad));
console.log(Object.entries(studentMiad));


for(const key in studentMiad){
    console.log(key);
}

console.log(studentMiad.subjects[0].name);
console.log(studentMiad.address.location.latitude);

studentMiad['address']['location']['latitude'] = 10.34;

console.log(studentMiad.address.location.latitude)


for(const key in studentMiad){
    console.log(key, ":", studentMiad[key])
    console.log('--------------------------');
}