// const COUNT = 10;
//
//
// document.write(COUNT + "<br>");

// for (var i = 0; i < 5; i++) {
//     setInterval(function () {
//         console.log(i);
//         3, 3000
//     })
// }


// for (let i = 0; i<5; i++){
//     setInterval(function(){
//         console.log(i);
//         3,3000
//     })
// }


// var apple = 5;
// if(true){
//     var apple = 10;
//     alert(apple);
// }
//
// alert(apple);


// let apple = 5;
// if (true) {
//     let apple = 10;
//     alert(apple);
// }
//
// alert(apple);

//
// var arr =[ "a","b","c","...d","storm","fall" ];
// for (let i=0; i< arr.length; i++){
//     console.log(arr[i]);
// }
// arr.push("vasja","good boy");
// console.log(arr);


// function setCookies() {
//     document.cookie = "password = 1 some password";
// }
//
// function getCookies() {
//     alert(document.cookie);
// }
//
// var btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", setCookies, false);
//
// var btn2 = document.getElementById("btn2");
// btn2.addEventListener("click", getCookies, false);


// window.addEventListener("load", init, false);
//
// function init() {
//
//     var btn3 = document.getElementById("btn3");
//     btn3.onclick = function () {
//         window.sessionStorage.setItem("key", "value 007");
//         window.sessionStorage.keys = "key2", "key3";
//         window.sessionStorage.keys = ["key4","key5"];
//     }
//
//     var btn4 = document.getElementById("btn4");
//     var out = document.getElementById("output");
//
//     btn4.onclick = function () {
//         out.innerHTML = window.sessionStorage.getItem("key");
//         out.innerHTML += window.window.sessionStorage.keys;
//     }
//
//
// }



//Local storage

// HW Day or Night

// window.addEventListener("load", init, false);


// function init() {

//     var btn3 = document.getElementById("btn3");
//     var btn4 = document.getElementById("btn4");




//     btn3.onclick = function () {
//         window.localStorage.setItem("key", "white");
//         window.localStorage.setItem("key1", "Hello World");

//         show();

//     }


//     btn4.onclick = function () {
//         window.localStorage.setItem("key", "black");
//         window.localStorage.setItem("key1", "Good Night");
//         show();

//     }


//     function show() {
//         let out = document.getElementById("output");
//         let txt = document.getElementById("txt");

//         let getStorage = window.localStorage.getItem("key");
//         let getStorage1 = window.localStorage.getItem("key1");

//         out.style.backgroundColor = getStorage;

//         txt.style.color = "red";
//         txt.innerHTML= getStorage1;
//     };

//     show();

// }




// Exampl1 Arrow function

// const sum = function(first,second){
//     return first+second;
// }

// console.log(sum(10,20));


// Arrow 1

// const arrow = (first,second) =>{
//     return first+second;
// }

// console.log(arrow(30,20));

// Arrow 2

// const arrow2 = (first,second)=> first+second;
// console.log(arrow2(30,70));



// // Arrow 3 with single parameter

// const arrow3 = multiple => multiple*2;
// console.log(arrow3(70));
// console.log(typeof arrow3);



// Arrow 4 without  parameters

// const arrow4 = () => {
//     let arr = [1,2,3,4,5];
//     let result=0;
//     for (let i=0; i<arr.length;i++){
//         console.log(arr[i]);
//         result += arr[i];
//     }
// };
// arrow4();


// Cycle

// let arr = [1,2,3,4,5];
// let sum = 0;
// arr.forEach(i => sum +=i); 
// console.log(sum);


// const obj = {
//     name: "bill",

//     printName: function () {
//         setInterval(function () {
//             console.log("name:" + this.name);//Problem with thisn in ES6
//         }, 3000);
//     }
// }

// obj.printName();


// Same thing with arrow function

// const obj = {
//     name: "bill",

//     printName: function () {
//         setInterval( () => {
//             console.log("name:" + this.name);//Own context in ES6
//         }, 3000);
//     }
// }

// obj.printName();



// Calc

// const numbers = document.querySelectorAll(".num");
// const symbols = document.querySelectorAll(".symbol");
// const result = document.querySelector(".result");
// const cancel = document.querySelector(".cancel");
// const Screen = document.getElementById("screen");

// numbers.forEach((value, index) => {
//     value.addEventListener("click", Numberify, false);
// });

// symbols.forEach((value, index) => {
//     value.addEventListener("click", Sybolify, false);
// });



// function Numberify(e) {
//     let btn = e.target;
//     let num = parseInt(btn.innerText);

//     console.log(typeof num);

//     Screen.innerText += btn.innerText;
// };

// function Sybolify(e) {
//     let sym = e.target;
//     let symbol = sym.innerText;

//     console.log(typeof sym.innerText);

//     Screen.innerText += sym.innerText;
// };

// swith (){
//     case "*":

//     break;
// }




// Classwork 27.03.18

// const ADD_PERSON = (id,name)=>{
//     console.log(id,name);
// }

// ADD_PERSON(44,"Bill");


// const ADD_PERSON = (id,name,surname)=>{
//     console.log(id,name,surname);
// }

// ADD_PERSON(44,"Bill","Jackson");

// Spred

// const ADD_PERSON = (id,...Args)=>{
//     console.log(id,Args);
// }

// ADD_PERSON(44,"Bill","Jackson",21);



// const ADD_PERSON = (id, ...Args) => {
//     console.log(id, Args);
// }

// let arr = ["Tom", "Devis", 33];
// ADD_PERSON(44, ...arr);


// CW

// let arr1 = ["mon", "tue", "wed"];
// let arr2 = ["fri", "sat"];

// const WEEK = (...arr1, thu, ...arr2, sun) => {
//     console.log(...arr1, thu, ...arr2, sun);
// };
// WEEK(...arr1, "thu", ...arr2, "sun");


// const addPerson = (name,surname,age) =>  {
//    return {
//        name,
//        surname,
//        age,
//        getHobby(){
//            return "hacker";
//        }
//    }
// };


// const PERSON1 = addPerson("Bill","Gates",45);
// const PERSON2 = addPerson("Tom","Hanks",35);
// const PERSON3 = addPerson("Rob","Hater",55);


// console.log(PERSON1,PERSON1.getHobby(),PERSON2,PERSON2.getHobby(),PERSON3,PERSON3.getHobby());




// Example

// let obj ={
//     name:"Will",
//     age:58
// }

// let {name} =  obj;
// let {age} =  obj;

// console.log(name + " "+ age);

// // NEW

// let obj ={
//     name:"Bill",
//     age:58
// }

// let {name:newname} =  obj;//rename variable in object
// let {age} =  obj;

// console.log(newname + " "+ age);
// console.log(obj);

// // Example

// let arr =[
//     "stive",
//     "stivenson",
//     45
// ];

// let[name,surname,age] = arr;

// console.log(name,surname,age);


// let arr =[
//     "stive",
//     "stivenson",
//     45
// ];

// let[name, ,age] = arr;

// console.log(name,age);


// let arr = [
//     "stive",
//     "stivenson",
//     45
// ];


// let [, , , job = "worker"] = arr;

// console.log(arr);


// Example

// let name = "Bill";
// let age = 48;

// console.log(`Hello my name is  ${name} I'm ${age}`);


// One more Example

// let name = "Bill";
// let age = 48;

// let tag = `<div>
//             <h3> ${name}</h3>
//             <h4> I'm ${age}</h4>
//           </div> `;

// document.write(tag);                  


// 20.03.18 Class work

// let arr =[1,2,3,4,5,6,7];

// for (let item of arr){
//     console.log(item);
// }




//OOD IN JAVASCRIPT CLASSES AND OBJECT OF CLASS

// CLASS DOG

// class Dog {
//     constructor(name,type,age,energy){
//         this._name = name;
//         this._type = type;
//         this._age = age;
//         this._energy = energy;
//         this.getInfo();
//         // this.getPlay();
//         // this.getEat();
//         // this.getSleep();

//     }

//     getInfo(){
//         console.log(`${this._name}  ${this._type} ${this._age} ${this._energy}`);
//     }

//     getPlay(){
//          this._energy -=30;
//          this.getInfo();
//          this.getDie();
//     }
//     getEat(){
//         this._energy +=20;
//         this.getInfo();
//     }
//     getSleep(){
//         this._energy +=30;
//         this.getInfo();
//     }
//     getDie(){
//         if(this._energy<=0){
//             alert("Your dog "+this._name+" is dead!");
//         }

//     }
// }

// let Bobik = new Dog("Bobik","Dvorterer",18,100);
// let Gav = new Dog("GAV","Boxer",5,100);

// console.log(Bobik);
// console.log(Gav);
// Bobik.getInfo();
// Bobik.getPlay();

// // Changing name inside obj

// Bobik._name="Tuzik";
// console.log(Bobik._name);//in console will see Tuzik

// GETTER AND SETTER

// class Dog {
//     constructor(name, type, age, energy) {
//         this._name = name;
//         this._type = type;
//         this._age = age;
//         this._energy = energy;
//         this.getInfo();
//     }

//     getInfo() {
//         console.log(`${this._name}  ${this._type} ${this._age} ${this._energy}`);
//     }

//     get name() {
//         return this._name;
//     }
//     //Here I catch parameters from Bobik1
//     set name(name){
//         if(name != this._name){
//             this._name = name;
//         }
//     }


// }


// let Bobik = new Dog("Bobik", "Dvorterer", 18, 100);


// console.log(Bobik.name);

// Bobik.name = "Bobik1";//Here Bobik name changes on Bobik1

// console.log(Bobik.name);

// Bobik._name = "Bobik2"; // Here without getter and setter
// console.log(Bobik.name);


// DIFERENCES BETWEEN OBJECT DOG 
//Nasliduvannja

class Dog {
    constructor(name, type, age, energy) {
        this._name = name;
        this._type = type;
        this._age = age;
        this._energy = energy;
        // this._counter = 0;
        this.getInfo();
        // Dog.counter();
    }

    getInfo() {
        console.log(`${this._name}  ${this._type} ${this._age} ${this._energy}`);
    }

    // static counter() {
    //  this._counter ++;
    //      console.log(`Dog constructor ${this._counter}`);
    // }

}


let Bobik = new Dog("Bobik", "Dvorterer", 18, 100);

// Bobik.getInfo();
// console.log(Bobik.name);


class HunterDog extends Dog {
    constructor(name, type, age, energy, power) {
        super(name, type, age, energy);//Parent constructor parameters
        this._power = power;
        console.log("HUNTER DOG");

    }
    getInfo() {
        console.log(`${this._name}  ${this._type} ${this._age} ${this._energy} ${this._power}`);
    }

    canHunt() {
        // let timer = setInterval()
        this._energy -= 50;

    }
}

let Killer = new HunterDog("killer", "boxer", 1, 100, "crazy power");

// Killer.getInfo();
// Killer.canHunt();

// Killer.getInfo();

// console.log(Killer._energy);

// Dog.counter();


class CrazyDog extends Dog {
    constructor(name, type, age, energy, happiness) {
        super(name, type, age, energy);//Parent constructor parameters
        this._happiness = happiness;
        console.log("CRAZY DOG");

    }
    getInfo() {
        console.log(`${this._name}  ${this._type} ${this._age} ${this._energy} ${this._happiness}`);
    }

    canGoCrazy() {
        // let timer = setInterval()
        this._happiness -= 50;

    }
}

let Loco = new CrazyDog("Loco", "mops", 1, 100, 200);
Loco.canGoCrazy();
Loco.getInfo();