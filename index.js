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


const btn = document.querySelectorAll("button");

btn.forEach((value, index) => {
   // console.log(value);
    value.addEventListener("click", init, false);

});


function init(e) {
    let btn = e.target;
    console.log(btn.innerText);

const Screen = document.getElementById("screen");
Screen.innerText += btn.innerText;
}


