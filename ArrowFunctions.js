
//this code works the same as the ones below
//this is an arrow function
var add = (no1, no2) => no1+no2;
console.log(add(93,21));

//this is a function literal 
var add = function(no1, no2){
    return no1 +no2
};
console.log(add(31,14))

//this is a function statement
function add(no1, no2){
    return no1 +no2
};
console.log(add(15,35))

//function to print the length of elements

var elements = ['Hydrogen','Helium','Lithium','Beryllium'];

elements.map(function(element){
  return element.length
});


//arrow alternative
console.log(elements.map((element => element.length)));



const hummus = function(factor){
    const ingredient= function(amount, unit, comName){
       let ingredientAmount= factor*amount;
            if (ingredientAmount > 1) {
                unit += 's'
            }
            console.log(`${ingredientAmount} ${amount} ${comName}`);
        }
        ingredient(1, 'can' ,'chickenpeas')
        ingredient(0.25, 'cup', 'tahini')
        ingredient(0.25, 'cup','lemon juice')
    }

console.log(hummus(2));



