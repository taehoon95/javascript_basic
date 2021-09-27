#  함수 사용하기 3가지

### Hoisting 가능
```
function f1() {
    console.log("1");
}
f1();
```

###  Hoisting 불가능 (변수 이름이므로)
```
let f2 = function () {
    console.log("2");
}
f2();

let f3 = () => console.log(3);
f3();
```
## Ex17) 즉시 실행 함수( IIFE )
### 즉시 실행 함수를 사용하려면 바로 전 코드에 ;이 필요하다.
```
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
```
## Ex18) 생성자 함수 : 클래스와 동격이다.
```
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
```
## Ex19) function에 return 있는 모습
```
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
```
## Ex20) 가변 인수 전달
```
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
```