var obj=[

    {name:"One",val:55},
    
    {name:"Two",val:48},
    
    {name:"Three",val:2},
    
    {name:"Four",val:105},
    
    {name:"Five",val:65},
    
];

/**Use forEach method to print only the objects having even val in the above array of objects.
Use Filter method to create a new array of object having val greater than 50. And print that new array of object.
Use the map method to create a new array of objects having val as the square of its initial val and print that new array of objects. */
console.log('---->using forEach method');
obj.forEach( function(value){
    if( value.val % 2 == 0){
        console.log(value);
    }
});

console.log("---->using filter method");
console.log(obj.filter( function(value)  {
    if(value.val > 50){
        return true
    }
}));

var mappedObj=obj.map(function(item){
    item.val=item.val*item.val;
    return item;
});
console.log("Object with the square of their val: ",mappedObj);


