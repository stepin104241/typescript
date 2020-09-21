function sumOf(...num:number[]){
    var sums = 0;
    num.forEach((ele)=>{
        sums+=ele;     
        
    });
    console.log(sums);
}
sumOf(10,20,30,40)
