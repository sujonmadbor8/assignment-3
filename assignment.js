//   https://github.com/sujonmadbor8/assignment-3

// Convert into Kilometer to Meter
function kilometerToMeter(number){
    var Kilometer=1000;
    var meter = number * Kilometer;
    return meter;
}
var convertion = kilometerToMeter(5);
console.log(convertion);


// Make budget Calculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
    var watchPrice = 50;
    var watchTotalPrice = watchPrice * watchQuantity;
    var phonePrice = 100;
    var phoneTotalPrice = phonePrice * phoneQuantity;
    var laptopPrice = 500;
    var laptopTotalPrice = laptopPrice * laptopQuantity;
    var totalBudget = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;
    return totalBudget;
}
var budget = budgetCalculator(2, 2, 1);
console.log(budget);