(function (){
//-----------------------------Answer 1-------------------------------------//
// Create array of the prices
var prices = items.map(function (item) {
  return item.price;
})
console.log(prices);

// Add the prices together
var sum = prices.reduce(function (prev, next) {
  return prev + next;
});
console.log(sum);

// Divide by total number of items
var avg = sum / prices.length;
console.log(avg);

// Convert to two decimal places
var converted = avg.toFixed(2);
console.log(converted);

// Make it a string
var str = 'The average price is ' + converted;
console.log(str);

// Display it on the page under answer 1

  // Find out answer element
var answerOne = document.querySelector('#answer-one');
  // Create a node from our above answer ready for the DOM
var textNode = document.createTextNode(str);
  // Append newly created node to our answer element
answerOne.appendChild(textNode);
//-----------------------------Answer 2-------------------------------------//

//-----------------------------Answer 3-------------------------------------//

//-----------------------------Answer 4-------------------------------------//

//-----------------------------Answer 5-------------------------------------//

//-----------------------------Answer 6-------------------------------------//






}());