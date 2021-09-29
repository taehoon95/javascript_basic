// Ex34) concat()
let ar = [10,20,30];
let br = ar.concat(40);
console.log(ar);
console.log(br);

let cr = [40,50,60];
let dr = ar.concat(cr)
console.log(dr); // (6) [10, 20, 30, 40, 50, 60]

console.log("test");

let er = [...ar,...cr]; //[10, 20, 30, 40, 50, 60]
console.log(er);

ar.push(cr); //[ 10, 20, 30, [ 40, 50, 60 ] ]
console.log(ar);