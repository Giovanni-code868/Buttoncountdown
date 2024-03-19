let dec = document.querySelector('.dec');
let inc = document.querySelector('.inc');
let res = document.querySelector('.res');
let h1 = document.querySelector("h1");
let body = document.querySelector("body")

//function to update background color based on value
function updatebackgroundcolor() {
  if(parseInt(h1.innerText) < 0){
    document.body.style.backgroundColor= "red";

  }else if (parseInt(h1.innerText)===0){
    document.body.style.backgroundColor= "yellow";
    
  }else {
    document.body.style.backgroundColor= "green";
}
}
//decrease
function decremental(){
  h1.innerText--;
  updatebackgroundcolor();

}
dec.addEventListener("click", decremental);

//increase

function incremental(){
  h1.innerText++;;
  updatebackgroundcolor();

}
inc.addEventListener("click", incremental);

//reset
function reset(){
  h1.innerText=0;
  updatebackgroundcolor();
}
res.addEventListener("click", reset);

