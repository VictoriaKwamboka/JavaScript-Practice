//forEach

// var total = 0;
// var summands = [1,2,3,4,5];
// summands.forEach(function(summand){
//     total += summand
// });
// console.log (total)



//map to triple numbers

// var numbers = [3,9,19,34];
// var tripledNumbers = numbers.map(function(number){
//     return number*3;
// });
// alert (tripledNumbers)


//map to add one to each element of an array

// var numbers = [2,3,4,5,6,7]
// var addOne = numbers.map(function(number){
//     return number +1
// });
// alert(addOne)

//map to return uppercase of array elements

// var lowerCases = ['victoria', 'peter','mercy','mitchelle']
// var upperCases = lowerCases.map(function(lowerCase){
//     return lowerCase.toUpperCase();
// });

// alert(upperCases)

//greeting

var friends = ['dolvine','sam','chacha','bill','reuben'];
var greeting = friends.forEach(function(friend){
    alert ('Hello ' + friend);
});

