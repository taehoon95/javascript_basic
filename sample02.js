// Ex21) 내부함수
let f1 = function () {
    console.log(1);
    let f2 = function () {
        console.log(2);
    }
    f2();
}
f1();

f1 = function () {
    console.log(3);
    f2 = function () {
        console.log(4);
    }
    f2();
}
f1();