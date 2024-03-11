const sumAll = function(from, end) {
    if (!Number.isInteger(from) || !Number.isInteger(end))
        return "ERROR";
    if (from < 0 || end < 0) 
        return "ERROR";
    if (from > end) {
        let t = end;
        end = from;
        from = t;
    }
    let sum = 0;
    for (let i = from; i <= end; i ++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
