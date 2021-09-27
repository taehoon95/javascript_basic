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