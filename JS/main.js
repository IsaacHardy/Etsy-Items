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
  return code.currency_code === 'GBP';
});

console.log(currency);

// Display on page using innerHTML to change HTML content
document.getElementById('answer-three').innerHTML = currency[0].title + ' costs &#163;' + currency[0].price;


//-----------------------------Answer 4-------------------------------------//


// Filter out all items made out of wood

var wood = items.filter(function (knock) {
  return knock.materials.indexOf('wood') != -1;
});

console.log(wood);

// Display on page using innerHTML to change HTML content
document.getElementById('answer-four').innerHTML = 
  wood[0].title + ' is made of wood.' + '<br />' +
  wood[1].title + ' is made of wood.' + '<br />' +
  wood[2].title + ' is made of wood.' + '<br />' +
  wood[3].title + ' is made of wood.' + '<br />' +
  wood[4].title + ' is made of wood.';


//-----------------------------Answer 5-------------------------------------//

// Filter out all objects with the array material with 8 items or more.
var eight = items.filter(function (mats) {
  return  mats.materials.length >= 8;
});

console.log(eight);

// Display on page using innerHTML to change HTML content
document.getElementById('answer-five').innerHTML = 
  eight[0].title + ' has ' + eight[0].materials.length + ' materials: ' + '<br />' + 
    eight[0].materials[0] + '<br />' + 
    eight[0].materials[1] + '<br />' + 
    eight[0].materials[2] + '<br />' + 
    eight[0].materials[3] + '<br />' +
    eight[0].materials[4] + '<br />' +
    eight[0].materials[5] + '<br />' +
    eight[0].materials[6] + '<br />' +
    eight[0].materials[7] + '<br />' +
    eight[0].materials[8] + '<br />' + '<br />' +
  eight[1].title + ' has ' + eight[1].materials.length + ' materials: ' + '<br />' + '<br />' + 
    eight[1].materials[0] + '<br />' + 
    eight[1].materials[1] + '<br />' + 
    eight[1].materials[2] + '<br />' + 
    eight[1].materials[3] + '<br />' +
    eight[1].materials[4] + '<br />' +
    eight[1].materials[5] + '<br />' +
    eight[1].materials[6] + '<br />' +
    eight[1].materials[7] + '<br />' +
    eight[1].materials[8] + '<br />' +
    eight[1].materials[9] + '<br />' +
    eight[1].materials[10] + '<br />' +
    eight[1].materials[11] + '<br />' +
    eight[1].materials[12] + '<br />';

//-----------------------------Answer 6-------------------------------------//

// Filter all objects that have 'i_did' as their 'who_made'
var who = items.filter(function (what) {
  return what.who_made === 'i_did';
});

console.log(who);
// Display on page using innerHTML to change HTML content
document.getElementById('answer-six').innerHTML = who.length + ' were made by their sellers';




}());