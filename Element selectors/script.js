/* element selectors = Methods used to target and manipulate HTML elements
                       They allow you to select one or multiple HTML elements
                       from the DOM (Document Object Model)
*/

/* 1. document.getElementbyId()       ELEMENT OR NULL
   2. document.getElementsClassName() HTML COLLECTION
   3. document.getElementsByTagName() HTML COLLECTION
   4. document.querySelector()        FIRST ELEMENT OR NULL
   5. document.querySelectorAll()     NODELIST
*/

/*1*/
// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

/*2*/
// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "red";
// fruits[1].style.backgroundColor = "yellow";
// fruits[2].style.backgroundColor = "orange";

// fruits[0].style.textAlign = "center";
// fruits[1].style.textAlign = "center";
// fruits[2].style.textAlign = "center";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
//     fruit.style.textAlign = "center";
// }

/*3*/
// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4Elements[1].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

/*4*/
// const element = document.querySelector("li");

// element.style.backgroundColor = "yellow";

/*5*/
// const fruits = document.querySelectorAll("li");

// fruits[5].style.backgroundColor = "yellow";