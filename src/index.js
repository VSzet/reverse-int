module.exports = function reverse(n) {
    let rev = Math.abs(n);
    return rev.toString().split("").reverse().join("");
};
