function sumOf() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sums = 0;
    num.forEach(function (ele) {
        sums += ele;
    });
    console.log(sums);
}
sumOf(10, 20, 30, 40);
