const removeFromArray = function(arr, ...nums) {
    for (n of nums) {
        arr = arr.filter(e => e !== n);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
