const repeatString = function(string, num) {
    let result = "";
    for(let i=1;i<=num;i++){
        result += string;
    }

    return result;
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('odin', Math.floor(Math.random()*10));
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
