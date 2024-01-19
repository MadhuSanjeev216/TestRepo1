var obj = `{
    "name": "JSON",
    "type": "Exchange Format",
    "similarTypes": ["xml", "yml", "csv", "EXL"],
    "rating": 10
    }`;

var obj1 = JSON.parse(obj);
console.log(obj1);
