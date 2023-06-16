
let user1 = {
    name: "petro" ,
    age: "34" ,
    status: true ,
    book1 : {
        title: "Кобзар" ,
        pageCount: "340" ,
        genre: "genre" ,
        authors: ["tsh" , 50]
    } ,
    book2: {
        title: "Буквар" ,
        pageCount: "300" ,
        genre: "genre" ,
        authors: ["if" , 40]

    } ,
    book3: {
        title: "Енеїда" ,
        pageCount: "2500" ,
        genre: "genre" ,
        authors: [ "sc" ,60]

    }
}
console.log(user1.book1)
console.log(user1.book2)
console.log(user1.book3)

let user = {
    pavlo:  {
        username: "pavlo",
        password: "2003"
    } ,
    ivan:  {
        username: "ivan",
        password: "4004"
    } ,
    petro:  {
        username: "petro",
        password: "60373"
    }
}
console.log(user.pavlo.password)
console.log(user.ivan.password)
console.log(user.petro.password)


let x = +prompt("number");
if (x !== 0) {
    console.log("Вірно");
}
else {
    console.log(" Невірно")
}



let time = +prompt("0 lo 60")
if (time >= 0 && time <15) {
    console.log('першу')
} else if ( time >= 15 && time <30){
    console.log(`другу`)
}
else if ( time >= 30 && time <45){
    console.log(`третю`)
} else if ( time >= 45 && time <60){
    console.log(`третю`)
}else {
    console.error("")
}

let day = +prompt("1 do 31")
if (day >= 1 && day <11){
    console.log('перша')
} else if ( day >= 11 && day <21){
    console.log(`другу`)
}else if ( day >= 21 && day <31){
    console.log(`третю`)
} else {
    console.error("")
}




let work = +prompt( "Скласти розклад на тиждень.Користувач вводить порядковий номер дня тижня")
switch (work) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday  ")
        break;
    case 7:
        console.log("Sunday")
        break;


}


let a = +prompt("one")
let b = +prompt("two")
if (a > b){
    console.log("a>b")
}else if (a < b) {
    console.log("a<b")
}
else if (a = b){
    console.log("a=b")
}else {
    console.error()
}

let xx = "00"
if (xx === "" || x === null || x === undefined || x === 0){
    xx = "default";
}
console.log(xx)

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0]. monthDuration > 5){
    console.log("супер")
}if (coursesAndDurationArray[1]. monthDuration > 5){
    console.log("супер")
}if (coursesAndDurationArray[2]. monthDuration > 5){
    console.log("супер")
}if (coursesAndDurationArray[3]. monthDuration > 5){
    console.log("супер")
}if (coursesAndDurationArray[4]. monthDuration > 5){
    console.log("супер")
}if (coursesAndDurationArray[5]. monthDuration > 5){
    console.log("супер")
}




