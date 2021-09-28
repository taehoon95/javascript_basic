#  함수 사용하기 

### Hoisting 가능
```js
function f1() {
    console.log("1");
}
f1();
```

###  Hoisting 불가능 (변수 이름이므로)
```js
let f2 = function () {
    console.log("2");
}
f2();

let f3 = () => console.log(3);
f3();
```
## Ex17) 즉시 실행 함수( IIFE )
### 즉시 실행 함수를 사용하려면 바로 전 코드에 ;이 필요하다.
```js
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
```js
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
```js
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
```js
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

##  Ex21) 내부함수
```js
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
```
## Ex22) 콜백함수 : 함수를 파라미터로 받는 경우
```js
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
```
## Ex23) 함수를 리턴하는 함수
```js
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
```
## Ex24) 리턴값이 함수인 즉시시행 함수
```js
(function(){
    console.log(1);
    return function(){
        console.log(2);
    }
})()();
```

## Ex25) 클로즈함수 : 지역변수가 사라지지않고 계속 사용할수 있도록 만들어 놓는것(생명연장)
```js
let f1 = function () {
    let a = 100;
    return function () {
        console.log(a);
    }
}

f1()();
```

## Ex26) 람다함수
```js
let f1 = function (a) {
    console.log(a);
}
f1(1);

// (a) => {}
f1 = (a) => {
    console.log(a)
};
f1(2);

// (a) => {(b) = > {}}

f2 = function (a) {
    console.log(a);
    f3 = function (b) {
        console.log(b);
    }
    f3(a+4);
}
f2(1);
```

## Ex27) 람다함수 문제
### 1
```js
((a) => {(b) => {}})();

((a) => {
    (b) => {
    }
})();

(function(a){
    return function(b){ }
})();
```

### 2
```js
((a) => {((b) => {})()})();

((a) => {
    ((b) => {})()
})();

(function(a) {
    return (function(b){

    })();
})();
```

## 3
```js
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
```
## 3-2
```
let f1 = function (fc) {
    fc(11);
};

f1(((a) => {
    ((b) => {
        console.log(a + b)
    })(20)
}));
```
### 4
```js
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
```

### 람다함수 return 생략가능
```js
let f1 = () => {
    return 100;   
};

let f2 = () => 100;

let f3 = () =>{
    return console.log(1);
};

let f4 = () => console.log(1);
```

### 5. 인수 없을때 
```js
let t = () => () => 100;

t = function () {
    return function () {
        return 100;
    }
};

console.log(t()());
```

### 6.인수있을때
```js
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
```
