// Ex19) function에 return 있는 모습
function t1(){
    console.log(1);
}

function t2(n, s){
    console.log(n+s);
}

function t3(){
    console.log(3);
    return 't3';
}

function t4(n){
    console.log(4);
    return n*2;
}

t1();
t2(2,3);
console.log(t3());
console.log(t4(12));