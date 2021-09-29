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

    배열             객체
     []               {}
  인덱스생성       속성생성
  forEach사용      forEach불가
  length사용       length불가

## Ex30) 객체 기본 사용
```js
let t = {
    name: "호랑이",
    age: 1,
    bl: true,
};

console.log(t);
console.log(t.name, t.age, t.bl);
console.log(t["name"], t["age"], t["bl"]);

for (const key in t) {
    // console.log(key);
    console.log(t[key]);
}

console.log(t.name, t.age);

with(t){
    console.log(name, age);
}
```

## Ex31)객체 

### 컴파일중 속성 추가,삭제
```js
let obj = {
    a : 10,
    b : 20,
    f1 : () => console.log('f1asdf'),
}

console.log(obj);
obj.b = 99;
obj.c = 30;
console.log(obj);

delete(obj.b);
console.log(obj);

obj.f2 = () => console.log("test");

obj.f2();

delete(obj.f1);
```

### 람다에서는 this를 사용할 수 없다.
```js
let obj = {
    a: 10,
    b: 20,
    f1: function () {
        console.log(this.a, this.b)
    },
    // f2: () => console.log(this.a, this.b),
    f2: function(){
        for (const key in this) {
            console.log(this[key]);
        }
    }
}

obj.f1();
obj.f2();  
```

### c가 가지고 있는값이 key값이 됨
```js
let c = "tiger";
let obj = {
    a: 10,
    b: 20,
    [c]: 30, 
}

for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
}
```
```js
let obj = {
    a: 10,
}

obj.b = 29;
console.log(obj);

obj['c'] = 30;
console.log(obj);

for (let i = 0; i < 4; i++) {
    obj['tiger' + i] = i*100;
}

console.log(obj);
```
## 스프레드 오퍼레이터
```js
let obj01 = {
    a:10,
    b:20,
}
let obj02 = {
    c:30,
    d:40,
}

let obj03 = Object.assign(obj01,obj02);
console.log(obj03);

let obj04 = {...obj01, ...obj02};
console.log(obj04);

let f1 = (o)=>{
    console.log(o.d);
}

f1({...obj01, ...obj02})
```
## Ex32) 배열
```js
let ar = [10,20,30];

console.log(ar);
console.log(ar.length);
console.log(typeof(ar));
console.log(Array.isArray(ar)); // 배열 확인 : true

let br = Array(); // []
let cr = Array(5);// 배열 크기
let dr = Array(10, 20, 30); // 배열 값 넣기

ar = [
    10,
    "호랑이",
    true, 
    [10, 20, 30],
    {
        name: "덕수리",
        age: 222,
    },
    function(){},
    undefined,
];

// index받기
for (const i in ar) {
    console.log(i, ar[i]);
}
console.log();

// 값 바로 받기
for (const value of ar) {
    console.log(value);
}
console.log();

ar.forEach(
    (v, i) => {
        console.log(v, i)
});
console.log();

let br = ar.map((num)=>{
    return num+ '💨';
});

console.log(br);


br = ar.map(num=> '🛀'+num );

console.log(br);

let cr = [0,1,2,3];
let dr = cr.map( num => (num % 2) ? "odd" : "even");
console.log(dr);

let ar = [
    {
        n:"호랑이",
        a:10,
    },
    {
        n:"코끼리",
        a:20,
    },
    {
        n:"독수리",
        a:30,
    },
];

console.log(ar);

for (const key in ar) {
    let e = ar[key];
    console.log(e.n, e.a);
    console.log(e['n'], e['a']);
}
let sum = 0;
for (const v of ar) {
    sum += v.a;
}
console.log(sum);

let br = ar.map((v,k) => v.n + "🍺")
console.log(br);
```

### Ex33) 배열의 함수
```js
let ar = [80, 20, 10, 15];
console.log(ar, typeof ar, Array.isArray(ar));

let br = ar.toString();
console.log(br, typeof br);

let st01= "80,20,10,15";
console.log(st01, typeof st01);

let date = new Date();
console.log(date);
console.log(date.toLocaleString());

let ar = [80,20,10,15];
// pop()*
let num = ar.pop();
console.log(num);
console.log(ar);
console.log(ar);

// push()*x
num = ar.push(20);
console.log(ar);
console.log(num);
```

#### reverse()
```js
let ar = [10,20,30];
console.log(ar.reverse());
```

#### shift,unshift
```js
let ar = [10,20,30];
console.log(ar.shift()); // [ 20, 30 ]
console.log(ar);
console.log(ar.unshift(40));
console.log(ar); //[ 40, 20, 30 ]
console.log(ar.unshift(50, 60, 70));//6
console.log(ar); //[ 50, 60, 70, 40, 20, 30 ]
```

#### sort : 문자로 비교 한다.(사전순)
```js 
let ar = [52, 273, 103, 32];

ar.sort();
console.log(ar); // [ 103, 273, 32, 52 ]

//순차정렬 

ar.sort(func);

// function func(a, b){
//     if(a > b){
//         return +1;
//     }else{
//         return -1;
//     }
// }


// function func(a, b) {
//     // return (a > b) ? +1 : -1;
//     return a - b;
// }

// 다양하게 활용 가능: 절대값 비교
function func(a, b) {
    let c = Math.abs(a);
    let d = Math.abs(b);
    return c - d;
}


console.log(ar);

let ar = [
    {
        n:30,
        s:"삼성",
    },
    {
        n:20,
        s:"롯데",
    },
    {
        n:10,
        s:"현대",
    },
];

// 다양하게 활용 가능 :객체안값 비교
function func(a, b) {
    return a.n - b.n;
}

ar.sort(func);
console.log(ar); //[ { n: 10, s: '현대' }, { n: 20, s: '롯데' }, { n: 30, s: '삼성' } ]
```
####  concat
```js
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

let ar = ["tiger","lion","cat"];
console.log(ar.join());
console.log(ar.join(''));
console.log(ar.join("-"));
```

#### slice
```js
let ar = [10,20,30,40,50,60];
// [2,4)
let br = ar.slice(2,4);
console.log(br);
```

#### splice
```js
let ar = [1, 2, 3];
// [시작위치, 삭제항목수, 추가항목,,,]

ar.splice(1, 0, 10, 20, 30); // 인덱스 1인 위치부터 0개 삭제후 그위치에 10,20,30을 넣는다.

console.log(ar); // [ 1, 10, 20, 30, 2, 3 ]

ar.splice(1, 2, 88, 99);
console.log(ar); //[ 1, 88, 99, 30, 2, 3]

let br = [66, 55, 44, 33];
ar.splice(0, 0, br); //[ [ 66, 55, 44, 33 ], 1, 88, 99, 30, 2, 3 ]
console.log(ar);
```

#### indexof : 검색
```js
let ar = ["tiger", "cat", "lion", "apple", "tiger"];
console.log(ar.indexOf("lion")); // 2 : 찾은 위치
console.log(ar.indexOf("lon")); // -1

console.log(ar.indexOf("lion", 3)); // -1, ar.indexOf("lion", 3)에서 3은 인덱스번호 3인곳 부터 찾아라 그래서 못찾음
console.log(ar.lastIndexOf("apple")); // 3

// 같은값 찾을때
console.log(ar.lastIndexOf("tiger")); // 4
console.log(ar.indexOf("tiger")); // 0
```

#### every : 결석데이터(있어야하는 데이터가 없거나, 없어야 되는 데이터 있는 경우) 찾을때 사용
```js
let ar = [1, 2, 10, 39, 20];
let br = [1, 2, 10, 50, 20];


let func = function (value) {
    return value < 40;
}

console.log(ar.every(func)); // true
console.log(br.every(v => v < 40)); // false
```

#### some : 하나만 만족 해도 true
```js
let ar = [1, 5, 11 ,39, 21 ];
console.log(ar.some(v => v % 2 == 0)); // false
```

#### filter : 특정 조건을 이용해서 원하는 데이터만 뽑아낸다.
```js
let ar = [1, 5, 11 ,39, 21 ];
let br = ar.filter( v => v < 15);
console.log(br); // [ 1, 5, 11 ]

// filter 예제 : ar배열안의 문자열 중 글자 크기가 3이하 인것들
let ar = ["tiger", "cat", "dog", "lion", "ai"];

let b = ar.filter(v => v.length < 4);

console.log(b); // [ 'cat', 'dog', 'ai' ]
```

#### length
```js
let ar = [1, 6, 11 ,39, 21 ];

console.log(ar.length); // 5

let st = "tiger"
console.log(st.length); // 5
```

### Ex34) 객체 안에서 람다 사용은 주의 해야한다.
#### this를 주의 하자

```js
let obj = { 
    num : 100,
    func01 : () => {
        console.log(this);
    },
    func02 : function(){
        console.log(this);
    },
    func03 (){
        console.log(this);
    },
}

obj.func01(); // {}
obj.func02(); // {num: 100, func01: ƒ, func02: ƒ, func03: ƒ}
obj.func03(); // {num: 100, func01: ƒ, func02: ƒ, func03: ƒ}
```

### Ex35) 생성자 함수(클래스) >> new
```js
function Func(){
    this.num = 100;
    this.obj = {
        num : 200,
        f2 : function(){
            console.log(this.num);
        },
        f1 : ()=>{
            console.log(this.num);
        },
    };
}

let ins = new Func();
ins.obj.f1();
ins.obj.f2();

let ins =new Ffff(); // ins : 인스턴스
```