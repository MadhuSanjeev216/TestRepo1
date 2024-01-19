let week = ['Monday','Tuesday','wednesday'];

function arrayOperations(){
    week.forEach((weekday)=>{
        console.log(weekday);
    })
    //Adding the elements

    // Inserts the element at ending
    week.push("Thursday");

    //Inserts the element at starting 
    week.unshift("Sunday");
    console.log('\n');

    week.forEach((weekday)=>{
        console.log(weekday);
    })
    //Removing the elements

    //Removes the element from ending
    week.pop();
    console.log('\n');
    week.forEach((weekday)=>{
        console.log(weekday);
    })

    //Removes the element from starting
    week.shift();
    console.log('\n');

    week.forEach((weekday)=>{
        console.log(weekday);
    })

    
}
arrayOperations();