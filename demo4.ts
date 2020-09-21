var num1=[10,20,30];
var num2=[40,50,60];
var num=[...num1,...num2];
var sums=0;
num.forEach((element) => {
    sums+=element;

    
});
console.log(sums);
