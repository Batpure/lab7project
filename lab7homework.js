var result = document.querySelector(".result");
var minus = document.querySelector('.minus');
var add = document.querySelector('.add');
var a = 0;
var b = 0;
console.log(minus);
console.log(add);
function calc(on){
    if(on==" add"){
        a++;
        result.innerText = ":"+(b+a);
    }else if(on==" minus"){
        b--;
        result.innerText = ":"+(a+b);
    }
}