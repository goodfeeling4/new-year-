console.log("happy new year 20025")

let y = new Date();

console.log("this the date fuction year " + y.getYear())
console.log("this the date fuction month " + y.getMonth())
console.log("this the date fuction today " + y.getDay())
// console.log("this the date fuction time " + y.getTime())
console.log("this the date fuction  h " + y.getHours())
console.log("this the date fuction second "  + y.getSeconds())
console.log("this the date fuction minute " + y.getMinutes())

const m = ["january","february","march","Aprile","may","june","july","august","september","october","november","december"]
const year = {
    "123":"2023",
    "124":"2024",
    "125": "2025",
    "126": "2026"
}
const ye = y.getYear()
const MO = y.getMonth()
const d = y.getDate()

y.getTime()
y.getHours()
y.getSeconds()
y.getMinutes()

const formattedDate = `${d} / ${m[MO]} / ${year[ye]}`

console.log(formattedDate)
document.getElementById("date").innerHTML = formattedDate;

// welcoming

let w = document.getElementById('welcome')
let h = document.getElementById('happy')

function show(){
    if(ye === 124 & MO === 11 & d === 31 ){
        // w.remove();
        h.remove();
        document.getElementById("w").innerHTML = "welcome"
        document.getElementById("w3").innerHTML = "To"
        document.getElementById("w2").innerHTML = "last day of 2024"

    }
    else if (ye === 125 & MO === 1 & d === 1){
        
    }
    else {
        h.remove();
        document.getElementById("w").innerHTML = "welcome"
        document.getElementById("w3").innerHTML = "To"
        document.getElementById("w2").innerHTML = "after 1 january 2024"
    }

}
show();
