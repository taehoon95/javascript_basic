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