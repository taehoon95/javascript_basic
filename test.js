// 3.나이 체크
var people = [
    { name: 'Alice', age: 21 , sex : "female"},
    { name: 'Max', age: 99 , sex : "female"},
    { name: 'Moxa', age: 27 , sex : "female"},
    { name: 'Jane', age: 20 , sex : "male"},
];

let i = people.reduce((members,value)=>{
    // console.log(`${members.age} ${value}`) 빈객체 체크
    if(!Object.keys(members).length || members.age < value.age){
        members = value;
    }
    return members    
},{})

console.log(i);