let numbers = [1,2,3,4,5,6,7,8,9,10];
let squareNumArr = [];

function squareNumbers(){
    
    numbers.forEach((number)=>{
        squareNumArr.push(number*number);
    })

    squareNumArr.forEach((sqrNum)=>{
        console.log(sqrNum);
    })
}

squareNumbers();