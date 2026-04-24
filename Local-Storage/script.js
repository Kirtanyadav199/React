// let a = 10;

// localStorage.setItem("a",a)  ("key",val)
// console.log(localStorage.getItem("a")); ("key")
//  localStorage.removeItem("a")  ("key")
//  localStorage.clear()   // used to clear all

// local storage stores data only in the form of string

let marks = {
    maths:70,
    english:90,
    hindi:66,
}

// localStorage.setItem("marks",marks) // obj not allowed->so,convert in string

let newMarks = JSON.stringify(marks)
localStorage.setItem("marks",newMarks)

console.log(localStorage.getItem("marks")); // give data in string format

console.log(JSON.parse(localStorage.getItem("marks"))); // converted in obj

// JSON.stringify() -> obj/arr to String
// JSON.parse() -> String to obj/arr


 