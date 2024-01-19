function onlyNumbers(a, b) {
  if (typeof a === 'number' && typeof b === 'number' && b > 0) {
    return a / b;
  }
  throw new Error(
    'Only Numbers are allowed and divisor should be greater than 0'
  );
}
try {
  console.log(`Ans after dividing a by b is ${onlyNumbers(100, 20)}`);
} catch (error) {
  console.log(error);
}
try {
  console.log(onlyNumbers(100, 0));
} catch (error) {
  console.log(error);
}
try {
  console.log(onlyNumbers('100', 20));
} catch (error) {
  console.log(error);
}
