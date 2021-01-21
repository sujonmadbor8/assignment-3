//   https://github.com/sujonmadbor8/assignment-3

// 1. Convert into Kilometer to Meter program starts from here
function kilometerToMeter(number) {
    var Kilometer = 1000;
    var meter = number * Kilometer;
    if(number >= 1){
        return meter;
    }
    else{
    return "Not valid"; //if input digit is negative or others
    }
}
var convertion = kilometerToMeter(2);
console.log(convertion);
// ends here 



// 2. Making budget Calculator program starts from here
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    if((watchQuantity && phoneQuantity && laptopQuantity) >=1 ){
        var watchPrice = 50;
        var watchTotalPrice = watchPrice * watchQuantity;
        var phonePrice = 100;
        var phoneTotalPrice = phonePrice * phoneQuantity;
        var laptopPrice = 500;
        var laptopTotalPrice = laptopPrice * laptopQuantity;
        var totalBudget = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;
        return totalBudget;
    }
    else{
        return "Not valid"; //if input digit is negative or others
    }
}
var budget = budgetCalculator(2, 3, 1);
console.log(budget);
// ends here 


//  3. hotelCost software to calculate hotel bill program starts from here
function hotelCost(day) {
    if (day >= 1 && day <= 10) {
        return day * 100;
    } 
    else if (day >= 11 && day <= 20) {
        return day * 80;
    } 
    else if (day >= 21) {
        return day * 50;
    }
    else{
        return "not valid"; //if input digit is negative or others
    }
}
var totalCost = hotelCost(55);
console.log(totalCost);



// 4. Mega friends problem solving program starts from here
function megaFriend(stringArray){
        var arrayMax = stringArray[0];
    for( i=0; i<stringArray.length; i++){
        if(stringArray[i].length > arrayMax.length){
            arrayMax=stringArray[i];
        }
    }
    return arrayMax;
    }
var stringArray = ['sujon', 'rakib', 'afsarul', 'shahidul', 'shohag'];
var longestWord = megaFriend(stringArray);
console.log(longestWord);
// ends here