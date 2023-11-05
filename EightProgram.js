//patternPrinting();
function patternPrinting(){
    let pattern ='';
    for(let i = 0; i<=5; i++){
        for(let j=i; j<=5; j++){
            pattern += '*';
        }
        pattern +='\n';
    }
    for(let i = 1; i<=5; i++){
        for(let j=0; j<=i; j++){
            pattern += '*';
        }
        pattern +='\n';
    }
    console.log(pattern);
}
//loopForIn();
/**  The for...inloop is used to loop through the properties of an object. 
 It iterates over the enumerable properties of an object in an arbitrary order, 
 where the property names are assigned to the loop variable.
 
 Syntax:
 for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/
function loopForIn(){
    const person =[ {name: 'John', age: 30, gender: 'male'},
                    {name: 'James', age: 31, gender: 'male'},
                    {name: 'Rose', age: 26, gender: 'Female'}
                  ];
    for (let prop in person) {
        console.log(prop,':', person[prop]);
    }

}



//looForOf();
/*
The for...ofloop was introduced in ECMAScript 6 (ES6) and provides a cleaner syntax for iterating over an iterableobject.
It does not iterate over object properties like the for...inloop, but instead directly accesses the values of the iterable object

Syntax:
for (const iterator of object) {
    
}*/

function looForOf(){
    const arr = [1, 2, 3, 4, 5];
    for (let num of arr) {
        console.log(num);
    }
}


LoopForEach();
/*
array.forEach(element => {
    
});
*/

function LoopForEach(){
    const arr = [1, 2, 3, 4, 5];
    arr.forEach(ele =>{
        console.log(ele);
    })
}