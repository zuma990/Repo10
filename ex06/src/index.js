// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
}
// ENnd of lion object 

// Create a function below this line
function myFunction(param1, param2) {
    lion[param1] = param2;
    return lion;
}
myFunction("roar", "roar-roar");
console.log(myFunction("roar", "roar-roar"));
// End of function

module.exports = myFunction;