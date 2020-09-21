/*function calcSum (n1: number,n2: number) {
    console.log(n1+n2);
}

console.log(calcSum(10,20));
function greetUser(name: string):void{
    console.log('welcome '+name);
}
greetUser('Ram')

let greet = function(name: string):string{
    return 'good day' +name;

}
console.log(greet('Rohan'));
let sum = (n1:number,n2:number)=>{
    console.log('sum'+(n1+n2));
}*/
function calcsum (n1:number,n2:number): number{
    return(n1+n2);
}
console.log(calcsum(23,33));

function greetmyuser(name:string):void{
    console.log('Great day '+name);
}
greetmyuser('Junnu');

let greetstu = function(name:string):string{
    return('good day student '+name);
}
console.log(greetstu('Swarnim'));

//Lambda expressions
let sum = (n1:number,n2:number)=>{
    console.log('Sum : '+(n1+n2));
}
sum(23,11);