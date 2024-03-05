/* DOM Navigatiob = The process of navigating through the structure
                    of an HTML document using IavaScript.
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/

/* ---------- .firstElementChild ---------- */

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow"
// });

/* ---------- .lastElementChild ---------- */

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });

/* ---------- .nextElementChild ---------- */

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

/* ---------- .previousElementChild ---------- */

// const element = document.getElementById("deserts");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow";

/* ---------- .parentElement ---------- */

// const element = document.getElementById("cake");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

/* ---------- .children ---------- */

const element = document.getElementById("deserts");
const children = element.children;

children[1
].style.backgroundColor = "yellow";