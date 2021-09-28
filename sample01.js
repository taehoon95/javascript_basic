//Ex 6) var , let 차이
var a = 10;

if (true) {
    var a = 20;
    console.log(a); // 20
}

console.log(a); // 20

let b = 10;

if (true) {
    let b = 20;
    console.log(b); // 10, 지역성 유지
}

console.log(b); // 10

//Ex 7) const
const a = 10;
a = 20;
console.log(a);

//Ex8) 문자열 더하기
let str = "호랑이";
str += "독수리";

console.log(str);

// Ex9) 숫자 -> 문자열, 문자열 -> 숫자
let s = "1000";
let n = 222;

console.log(`${typeof(s)}  ${typeof(n)}`);

console.log(Number(s) + n);
console.log(parseInt(s) + n);

let r1 = s;
let r2 = +s; // 문자열 -> 숫자
console.log(`${typeof(r1)}  ${typeof(r2)}`)
console.log()

console.log(String(n) + 11);

// 산술연산, 비교연산, 논리연산 
// 증가연산, 감소연산
// += 복합대입연산자
// 제어문, 삼항연산
// true,false

//Ex10)
console.log(Math.pow(3, 4)); // 제곱
console.log(3 ** 4 ** 2); // ** : 제곱

//Ex11) Date()
let nn = new Date();

console.log(nn.getFullYear(), "년");

// 0월 부터 시작
console.log(nn.getMonth(), "월");
console.log(nn.getDate(), "일");

// 0일 부터 시작
console.log(nn.getDay(), "요일");
console.log(nn.getHours(), "시");
console.log(nn.getMinutes(), "분");
console.log(nn.getSeconds(), "초");

//Ex12) 시간 지연
let start = new Date().getTime();

console.log("로딩중...");

while (new Date().getTime() < start + 2000);

console.log("호랑이");

//Ex13) 값비교 ==, 값,타입 둘다 비교 === 
console.log(100 == 100) //true
console.log(100 == "100") //true
console.log(100 === "100") //false

//Ex14)
let a = 10;

if (a > 3) {
    console.log("test");
}
a > 3 && console.log("test");

//Ex15)
if(!false){
    console.log("test");
}

false || console.log("test");

// Ex16) 함수 사용하기 3가지

// Hoisting 가능
function f1() {
    console.log("1");
}
f1();

// Hoisting 불가능 (변수 이름이므로)
let f2 = function () {
    console.log("2");
}
f2();

let f3 = () => console.log(3);
f3();

// Ex17) 즉시 실행 함수( IIFE )
// 즉시 실행 함수를 사용하려면 바로 전 코드에 ;이 필요하다.
(function () {
    console.log("2");
})();

(() => console.log("2"))();

function f4(num) {
    console.log(num);
}
f4(100);

(function(num) {
    console.log(num);
})(200);

((dt) => {
    let start = new Date().getTime();
    while(new Date().getTime() < start + dt);
})(0);
console.log("test");

// Ex18) 생성자 함수 : 클래스와 동격이다.
function Fff555(){
    this.num1 = 10; // 멤버 변수 선언
    this.num2 = 20;
    this.m1 = function(){
        console.log(this.num1);
    };
    this.m2 = () => console.log(this.num2);
}

let ins = new Fff555();
ins.m1();
ins.m2();
new Fff555().m1();

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

// Ex20) 가변 인수 전달
function t5(){
    console.log(arguments); // [Arguments] { '0': 10, '1': 20, '2': 30 }
    console.log(typeof(arguments)); 
    console.log(arguments.length); 

    let sum = 0;
    for (let key in arguments) {
        sum += arguments[key];
        console.log(sum);
        console.log(arguments[key]);
    }
}

t5(10, 20, 30);

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
    let f2 = function () {
        console.log(4);
    }
    f2();
}
f1();

// Ex22) 콜백함수 : 함수를 파라미터로 받는 경우

let f1 = function(fc){
    console.log(1);
    fc();
}

let f2 = function(){
    console.log(2);
}

// 방법1
f1(f2);

// 방법2
f1(function(){
    console.log(3);
});

// 방법3
f1(()=> console.log(4));

// Ex23) 함수를 리턴하는 함수

let f1 = function(fc){
    console.log(1);
    let f2 = function(){
        console.log(2);
    }
    return f2; // return f2();
}
f1()();

f3 = function(fc){
    console.log(3);
    return function(){
        console.log(4);
    }
}
f3()();

// Ex24) 리턴값이 함수인 즉시시행 함수
(function(){
    console.log(1);
    return function(){
        console.log(2);
    }
})()();

// Ex25) 클로즈함수 : 지역변수가 사라지지않고 계속 사용할수 있도록 만들어 놓는것(생명연장)
let f1 = function () {
    let a = 100;
    return function () {
        console.log(a);
    }
}

f1()();

// Ex27) 람다함수 문제
//1
((a) => {(b) => {}})();

((a) => {
    (b) => {
    }
})();

(function(a){
    return function(b){ }
})();

//2
((a) => {((b) => {})()})();

((a) => {
    ((b) => {})()
})();

(function(a) {
    return (function(b){

    })();
})();

//3
((a) => {
    ((b) => {
        console.log(a + b)
    })(20)
})(10);

((function(a){
    (function(b){
        console.log(a + b);
    })(20)
}))(11);

//3-2
let f1 = function (fc) {
    fc(11);
};

f1(((a) => {
    ((b) => {
        console.log(a + b)
    })(20)
}));

//4
f1 = () => 100
f1 = function(){
    return 100;
}
console.log(f1());

f2 = () => console.log(111);
f2 = function(){
    console.log(111);
}
f2();

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


// // Ex28) 비동기: 순서 안지키는 것들을 -> 순서를 꼭지킬수 있게 만든다.
let num = 0;
let id = setInterval(
    () => {console.log(num++);},2000
);
console.log(2);


setTimeout(
    () => {
        clearInterval(id)
    }, 100
);

for (let i = 0; i < 3; i++) {
    (function (x){
        setTimeout(
            () => {console.log(x);},i*1000
        )
    })(i);
};

//Ex29)eval(); -> 가급적 사용을 자제하는게 좋다.

let str = '';
str += "let a = 10;";
str += "console.log(a)";
console.log(str);
eval(str);

