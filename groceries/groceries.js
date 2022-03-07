var groceries = prompt('Please enter a list of items that you need from the store. Remember to separate them using a comma: ')
groceriesArray = groceries.split(',')
var grocery_list = groceriesArray.map(function(grocery){
    alert(grocery)
});


