// happy coding 👻
// @ts-ignore

const calculateValue = (input: number): number => {
    if (input < 1) return 0;
    if (input < 2) return 1;
    return calculateValue(input - 2) + calculateValue(input - 1);
};
let sum = 0;
for (let n = 1; n < 11; ++n) {
    const value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
    sum += value;
console.log(sum);
}

