function square (x){
    print("Area of square is: ",x*x);
}
    
function rectangle (x,y){
    print("Area of rectangle is: ",x*y);
}
function circle (r){
    print("Area of circle is: ",3.14*r*r);
}
var print= function print(shape,val){
    console.log(shape,val);
}
Object.setPrototypeOf(square,print);
Object.setPrototypeOf(rectangle,print);
Object.setPrototypeOf(circle,print);
square(5);
rectangle(2,5);
circle(4);

console.log();