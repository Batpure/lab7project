// for
for(var i=1;i<=5;i++){
    console.log("for:" +i);
}
// while
var a=1;
while(a<=5){
    console.log("while:" +a);
    a++;
}
// do while --> hamgiin hurdan
var k=1;
do{
    console.log("do while:"+k);
    k++;
}while(k<=5);
// // nested loop -> davhar davtalt
// for(var i=1; i<=5;i++){
//     console.log('i:'+i)
//     for(var j=1; j<=5; j++){
//         console.log("j:"+j)
//     }
// }
// // 1-10 hurtleh buh hurd
// for(var i=1; i<=10;i++){
//     console.log("urjver:"+i)
//     for(var j=1; j<11; j++){
//         urjver = i * j;
//         console.log(i + "*" + j + "=" + urjver)
//     }
// }
// // od hevleh
// // *
// // **
// // ....
// for(var i=1;i<=10;i++){
//     var space="";
//     for(var j=1; j<=i;j++){
//         space = space+ "*";
//     }
//     console.log(space);
// }
//  //i=1 -> 1<=5 -> true -> j=1 1<=1 true -> *
// // for(var i=1;i<=5;i++){
// //     var space= "";
// //     for(var j=1; j<=i;i++){
// //     space = space + j;
// //     }
// //    console.log(space)
// // }
// for(var i=5;i>=1;i--){
//     var space = "";
//     for(var j=1; j<=i; j++){
//         space = space + "*";
//     }
//     console.log(space);
// }
var randomNumber = Math.floor(Math.random()*10)+1;
console.log (randomNumber);
alert("1-10 hurtleh random toog taan uu");
var chance=3;
for(var i=1; i<=3;i++){
    var myNumber = +prompt("1-10 hurtleh random toog oruulnuu");
    if(randomNumber==myNumber){
        alert(i+"dhi orldlgo.Ta taaj chadlaa");
        break;
    }else if(myNumber<1 || myNumber>10 || myNumber==""){
        alert("1ees ih 10aas baga too oruul.");
        
    }else if(myNumber<randomNumber){
        alert("baga bn");
    }else if(myNumber>randomNumber){
        alert("ih bna");
    }else{
        alert("dahin orldnuu");
    }
    if(i>chance){
        alert("ta hojigdloo")
    }
    
}
// 1.Hooson utga, 1-ees baga 10aas ih utga oruulval alert gargaj irh
// 2.hint ogdog bolgoh buyu taaj baigaa toonoos ih too oruulval ih bina esvel baga baina gej hint uguh
// 3.heden oroldlogoor yalj baigaaag gargaj irh
// 4.ta hojigdloo gej gargaj irh