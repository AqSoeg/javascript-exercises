const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.split(' ').join('');
    str = str.replace(/[!,.?]/g, '');
    return str == str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
