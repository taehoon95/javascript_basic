//            문자열       배열        객체
//length        O           O           X
//forEach       X           O           X
//forIn         O           O           O
//forOf         O           O           X
//map           X           O           X

// // 1.문자열
// // 1-1 length
// str = "tiger";
// console.log(str.length);
// // 1-2 foreach
// // str.forEach(element => { 안댐
// //     console.log(element);
// // });
// // 1-3 forIn
// for (const key in str) {
//     console.log(`${key} :  ${str[key]}`);
// }
// // 1-4 forOf
// for (const iterator of str) {
//     console.log(iterator);
// }
// 1-5 map

// 2. 배열
// arr = ["1","12","toggi","3","tiger",];
// console.log(arr.length);
// arr.forEach(element => {
//     console.log(element);
// });

// for (const key in arr) {
//     console.log(`${key} ${arr[key]}`);
// }

// for (const iterator of arr) {
//     console.log(iterator);
// }

// arr.map((item)=>{
//     console.log(item+"🚚");
// })

// 3. 객체
obj = {
    name : "tiger",
    age : 10
}; 
// console.log(obj.length); //undefined
// obj.forEach(element => {
//     console.log(element);
// });

for (const okey in obj) {                               //name tiger age 10    
    console.log(`${okey} ${obj[okey]}`);
}

// for (const iterator of obj) {
//     console.log(iterator);
// }

// obj.map((item)=>{
//     console.log(item+"🚚");
// })