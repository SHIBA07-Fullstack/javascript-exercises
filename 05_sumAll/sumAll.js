const sumAll = function(int1, int2) {
    let result = 0;
    if(int1>int2){
        for(let i = int2;i<=int1;i++){
            result += i;
        }
    }
    else {
        for(let i = int1;i<=int2;i++){
            result += i; 
        }
    }
    return result;
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
