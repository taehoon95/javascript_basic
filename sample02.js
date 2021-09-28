// 람다함수 return 생략가능
let f1 = () => {
    return 100;   
};

let f2 = () => 100;

let f3 = () =>{
    return console.log(1);
};

let f4 = () => console.log(1);

// 5. 인수 없을때 
let t = () => () => 100;

t = function () {
    return function () {
        return 100;
    }
};

console.log(t()());

// 6.인수있을때
t = a => b => 100;

t = a => {
    return b => {
        return 100
    };
};

t = function (a) {
    return function (b) {
        return a+b;
    };
};

console.log(t(10)(20));

t = (a) => (b) => a + b; // t = a => b => a + b; 동격코드





