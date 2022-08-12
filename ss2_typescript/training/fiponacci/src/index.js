// happy coding 👻
// @ts-ignore
var calculateValue = function (input) {
    if (input < 1)
        return 0;
    if (input < 2)
        return 1;
    return calculateValue(input - 2) + calculateValue(input - 1);
};
var sum = 0;
for (var n = 1; n < 11; ++n) {
    var value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
    sum += value;
    console.log(sum);
}
