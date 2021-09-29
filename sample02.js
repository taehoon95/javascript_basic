// Ex34) 

// reduce 함수

// 배열 안 각 요소 개수를 객체로 변환하기
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ; // tally[fruit]가 없으면 = 0, 있으면 +1을 해준다     기본값이 0
  return tally;
} , {})

// console.log(count) // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// 중첩배열 평탄화
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

// console.log(flat) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// 배열 안, 객체 안에 있는 배열의 정보 가져오기 :
const d = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = d.reduce((total, amount) => {
    amount.c.forEach(color => {
        total.push(color);
    });
    return total;
}, []);

console.log(colors);
// 여러 함수들을 입력한 값에 순차적으로 적용하기
const uniqueColors = d.reduce((total, amount) => {
    amount.c.forEach( color => {
        total.indexOf(color) === -1 && total.push(color);
    });
    return total;
},[])

console.log(uniqueColors);

//여러 함수들을 입력한 값에 순차적으로 적용하기
let increment = input => input + 1;
let decrement = input => input - 1;
let double = input => input * 2;

let pipeline = [increment, double, decrement];
const result = pipeline.reduce((total, func) => func(total),1);
console.log(result);














