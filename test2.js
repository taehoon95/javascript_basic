// Ex35) 생성자 함수(클래스) >> new

let obj = { // obj는 객체
    n : 10,
    obj2:{
        f1(){
            console.log(this);
            console.log(this.n);
        }
    },
}

obj.obj2.f1();

function Ffff(){

}
let ins =new Ffff(); // ins : 인스턴스