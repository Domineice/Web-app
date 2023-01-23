// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

// Posawat Tangon 6213129
function computeCost() {
//add your code here
 var french = document.getElementById("french").value;

 var coffee = document.getElementById("coffee").value;
 var tea = document.getElementById("tea").value;
 if(french>5||french<0)
 {
   french = 0;
   alert("French value must between 0 - 5");
 }
 if(coffee>5||coffee<0)
 {
  coffee = 0;
  alert("Coffee value must between 0 - 5");
 }
 if(tea>5||tea<0)
 {
  tea = 0;
  alert("Tea value must between 0 - 5");
 }
// Compute the cost
  totalCost = french*3.49+coffee*2.5+tea*1.5; 
  document.getElementById("cost").value = totalCost
  
}  //* end of computeCost
