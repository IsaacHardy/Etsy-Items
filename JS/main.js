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




// Filter array to grab correctly priced objects
var filt = items.filter(function (num) {
  return num.price > 14 && num.price < 18;
});

console.log(filt);

// Create var array 
var titleArry = [];

// Push each title attribute from array filt into new titleArry
filt.forEach(function (item2) {
  titleArry.push(item2.title);
  console.log(filt);
});


// Display on page

  // Change HTML content with innerHTML
document.getElementById('answer-two').innerHTML = titleArry[0] + "<br />" + titleArry[1] + "<br />" + titleArry[2];



//-----------------------------Answer 3-------------------------------------//


// Filter items to get the object with a code of GBP and specfic ID
var currency = items.filter(function (code) {
  return code.currency_code = 'GBP' && code.listing_id === 189187176;
});

console.log(currency);

// Third
document.getElementById('answer-three').innerHTML = currency[0].title + ' costs &#163;' + currency[0].price;
//-----------------------------Answer 4-------------------------------------//

//-----------------------------Answer 5-------------------------------------//

//-----------------------------Answer 6-------------------------------------//






}());