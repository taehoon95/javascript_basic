// // 1. 중첩 배열 펼치기
// const arr1 = [[0, 1], [2, 3], [4, 5]];

// let arrayConnect = (arr, dataValue) => {
//     return arr.concat(dataValue);
// }

// let res = arr1.reduce(arrayConnect, []);

// console.log(res);

// // 2.객체 내의 값 인스턴스 개수 세기
// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// // let countFruit = (fruits,fruit) => {
// //     if(fruit in fruits){
// //         fruits[fruit]++;
// //     }else{
// //         fruits[fruit] = 1;
// //     }
// //     return fruits;
// // };

// let countFruit = (fruits,fruit) => {
//     fruits[fruit] = (fruits[fruit] || 0) + 1 ; 
//     return fruits;
// };

// let cf = fruitBasket.reduce(countFruit,{});


// console.log(cf);

// // 3.속성으로 객체 분류하기
// var people = [
//     { name: 'Alice', age: 21 , sex : "female"},
//     { name: 'Max', age: 20 , sex : "female"},
//     { name: 'Max', age: 20 , sex : "female"},
//     { name: 'Jane', age: 20 , sex : "male"},
// ];

// let groupBy = (peopleObjArr,value)=>{
//     return peopleObjArr.reduce((res,pObj)=>{
//         const pKey = pObj[value]; // 1번째 수행 pKey = pObj[age] -> pKey = 21
//         // if(!res[pKey]){
//         //     res[pKey] = 1
//         // }else{
//         //     res[pKey]++;
//         // }
//         console.log((res[pKey] || 0) + 1); // res[21] 이 생기고 
//         res[pKey] = (res[pKey] || 0) + 1;
//         return res;
//     },{});
// }


// console.log(groupBy(people,"age"));

// // 4.확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기
// let friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
//   }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
//   }, {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
//   }];

// let allBooks = friends.reduce((bArr,frBooks)=>{
//     return [...bArr,...frBooks.books];
// }, []);

// console.log(allBooks);

// // 5. 배열의 중복 항목 제거 : sort를 이용하여 정렬
// let arr2 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

// let resA = arr2.sort().reduce((noArr, num)=>{
//     const length = noArr.length;
//     if(length === 0 || noArr[length-1] !== num){
//         console.log(`length : ${length}, noArr[length-1] : ${noArr[length-1]}, num : ${num}`)
//         noArr.push(num);
//     }
//     return noArr;
// },[]);

// console.log(resA);

// // 6. 함수 구성을 위한 파이프 함수
// let double = x => x + x;
// let triple = x => 3 * x;
// let quadruple = x => 4 * x;


// const pipe = (...functions) => input => 
// functions.reduce((acc, fn) => {
//         fn(acc),input
// });

// const multiply6 = pipe(double, triple);
// multiply6(6);
    
// // 7.reduce()로 map()작성
// if(!Array.prototype.mapUsingReduce){
//     Array.prototype.mapUsingReduce = function(callback, thisArg){
//         return this.reduce(function(mappedArray, currentValue, index, array){
//             mappedArray[index] = callback.call(thisArg, currentValue, index, array);
//             return mappedArray;
//         },[]);
//     };
// }

// let ad = [1,2, ,3].mapUsingReduce(
//     (currentValue, index, array) => currentValue + index + array.length
// );

// console.log(ad);

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  let totalYears = pilots.reduce((total, item)=>total + item.years,0);

// console.log(totalYears);
  //가장 오래 일한 파일럿

  let oldPilot = pilots.reduce((pilot, value)=> {
    return (pilot.years || 0) >  value.years ? pilot : value
  }, {})

// console.log(oldPilot);

var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

let d = pilots.filter((item) => item.faction === "Rebels");
let e = pilots.filter((item) => item.faction === "Empire");

// console.log(d);
// console.log(e);


var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
];

// let isForceUser = personnel.filter((item)=> item.isForceUser === true);
// let totalScore = isForceUser.map(item => item.pilotingScore + item.shootingScore);
// let totot = totalScore.reduce((totalS, value)=>totalS + value,0);
  
//   console.log(isForceUser);
// console.log(totalScore);


let totot = personnel
    .filter((item)=> item.isForceUser === true)
    .map(item => item.pilotingScore + item.shootingScore)
    .reduce((totalS, value)=>totalS + value,0);
    
console.log(totot);