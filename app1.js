"use strict"
// DOM ------ Document Object Model
// The process of reaching elements in html page and using it in javascript is known as querying DOM

//  document.body.style.backgroundcolor = "yellow";
// document.body.style.color = "pink";

// lets set a variable to avoid repetition DRY(dont repeat urself)
// let body = document.body.style
// body.backgroundColor = "yellow";
// body.color = "pink";

// so lets dive in properly
// getElementById()
// select d element u want
// Decide d element u want to apply to the selection
// getElementById("element") -- make sure the id matches
// we can assign to a variable or go straight using document. continously
// Lets do sth basic so u understand cause we would go into complex things which in turn would need the basic things you learnt
 
// document.getElementById('heading-1').style.color = 'red';
// document.getElementById("heading-1").style.backgroundColor = 'yellow';

let headingTag = document.getElementById("heading-1").style;
headingTag.color ='red';
headingTag.backgroundColor ='yellow';

// getElementsByTagName()
// Html-collection which is almost similar to an array like object
// index, length properties wud work bt not all array methods wud work

let headingTwoTag = document.getElementsByTagName("h2");
console.log(headingTwoTag);
// headingTwoTag.color = "green"
// headingTwoTag.forEach((singleTag)=>singleTag.style.color= "green")

let newHeading = [...headingTwoTag]
newHeading.forEach((singleTag)=> singleTag.style.color ="green")

// getElementsByClassName()
// Html-collection which is almost similar to an array like object
// index, length properties wud work bt not all array methods wud work

 //let listItems = document.getElementsByClassName("state");
 // console.log(listItems.length);
 // let newListItx = [...listItems];
// Our last 2 method
// queryselector("any css") -- it selects d first element that matches d selector picked
// querySelectorAll("any css")-- select all, forEach method wud work here
// ---- Select d element or grp of element or grp of element u want
// ---- Decide the effect you want to apply

// ==============================
// querySelector('any css')
// ==============================

// let listedItem = document.querySelector(".state")
// console.log(listedItem);
// listedItem.style.color = 'blue';

// ============================
// querySelectorAll('any css')
// ============================


let listedItem = document.querySelectorAll('.state');
console.log(listedItem);
listedItem.forEach((singleLi)=>singleLi.style.color = 'red')
 // listedItem.style.color = 'red';

 // innerText()
 let pTag = document.querySelector('p');
 console.log(pTag);
 console.log(pTag.innerText);
//pTag.innerText += " none of the above";

 // textContent
  // console.log(pTag.textContent);

 // innerHtml
 let newPara = document.querySelector("p");
 newPara.innerHtml = "<h1> We don change am</h1>";

 // changing attribute
 const link = document.querySelector('a');
 console.log(link.getAttribute("href"));

 link.setAttribute('href',"https://facebook,com")

 link.innerText = 'link to facebook';

 // classList
 // className
 // contain
 let headingTag5 = document.querySelector("h5");
 console.log(headingTag5);
 console.log(headingTag5.className);
 console.log(headingTag5.classList.contains('red'));

 let hasClass = headingTag5.classList.contains('red')
 if(hasClass){
    console.log("e get am");
 }else{
    console.log("e nr get am!");
 }

 // events
 // select d element and decide de effect
 // what events
 // addEventListener()

 let btn = document.querySelector('.btn2');
 let paraTag = document.querySelector('.para');

 let hasBlue = paraTag.classList.contains('blue');

function changeColor(){
    let hasBlue = paraTag.classList.contains("blue");
    if(hasBlue){
    paraTag.classList.remove('blue')
    }else{
        paraTag.classList.add('blue')
    }
}

let body = document.querySelector("body");
let img = document.querySelector("img");
let changeMode = () => {
  let bodyClass = body.classList.contains("dark");
  console.log(bodyClass);

  if (bodyClass) {
    body.classList.remove("dark");
    img.setAttribute('src', './assets/dark_mode_FILL0_wght400_GRAD0_opsz24.svg')
  } else {
    body.classList.add("dark");
    img.setAttribute('src', './assets/light_mode_FILL0_wght400_GRAD0_opsz24.svg')

  }
};
img.addEventListener('click',changeMode)

let form = document.querySelector('form');
let btn22 = document.querySelector('.btnn');

function showAndHide(){
  let hasHide = form.classList.contains('hide');
  if(hasHide){
   form.classList.remove('hide')
  }else{
    form.classList.add('hide')
  }

}

btn22.addEventListener('click',showAndHide)
