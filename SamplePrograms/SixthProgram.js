let year = 2000;

function isLeapYear(){
    let leapYear = year%4
    if(leapYear==0){
        console.log(`${year} is a leap year`);
    }
    else {
        console.log(`${year} is not a leap year`);
        }
}
isLeapYear();