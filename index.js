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

window.addEventListener("load", init, false);


function init() {

    show();

    var btn3 = document.getElementById("btn3");

    btn3.onclick = function () {
        window.localStorage.setItem("key", "white");
        show();
    }

    var btn4 = document.getElementById("btn4");


    btn4.onclick = function () {
        window.localStorage.setItem("key", "black");
        show();

    }



    function show() {
        let out = document.getElementById("output");
        let getStorage = window.localStorage.getItem("key");
        out.style.backgroundColor = getStorage;
    };



}

<<<<<<< HEAD
// show me this commit
=======

// New commit
>>>>>>> 8a85e80285c86002db9a59f2360b98c29191b0c7
