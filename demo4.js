var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var num1 = [10, 20, 30];
var num2 = [40, 50, 60];
var num = __spreadArrays(num1, num2);
var sums = 0;
num.forEach(function (element) {
    sums += element;
});
console.log(sums);
