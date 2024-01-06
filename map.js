
const person = new Map([]);
console.log( person.size );
person.set( 'firstName', 'Sanjeev' );
person.set( 'lastName' , 'Ch');
person.set( 'city', 'Cary');
person.set( 'Mobile', 4524523619 )

//size of Map
console.log( person.size );

//print keys of Map
console.log( person.keys() );

//print values of Map
console.log( person.values() );

//print key value pairs of Map
console.log( person.entries() );

//print by Map.get
console.log(person.get('firstName'));

//print map by loops
for ( let keys of person.keys() ){
    console.log( keys );
}

for ( let values of person.values() ){
    console.log( values );
}

for (let [key, values] of person.entries() ){
    console.log(`Key - ${key} : value -  ${values}`);
}

// Delete a value from Map
person.delete('Mobile')
console.log( person.size );
 
// Checking whether a key exists
console.log( person.has( 'city' ) );
console.log( person.has( 'City' ) );

// Delete all values in a Map
person.clear();
console.log( person.size );