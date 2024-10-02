const removeFromArray = function(array, itemOne, itemTwo, itemThree, itemFour) {
    for(let i = array.length - 1; i>=0; i--){
       
        if(array[i]===itemOne || array[i]===itemTwo || array[i]===itemThree || array[i]===itemFour){
            array.splice(i, 1);
        }
       
    }
    return array;
};

removeFromArray([1,2,3,4], 3);
removeFromArray([1,2,3,4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
