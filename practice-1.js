const readlineSync = require('readline-sync');
//const num='1234';
function getRandom(){
    var number=[];
    number[0]=parseInt(10*Math.random());
    for(var i=1;i<4;i++){
       var a=parseInt(10*Math.random());
        if(number.indexOf(a)===-1){
            number[i]=a;
        }
        else{
            i=i-1;
        }
    }
    return number.join('');
}
function flag(){
    var number=getRandom();
    var num=readlineSync.question(`System generate random number is ${number}\n
    Please input your guessed number: `);

    var result;
    var countA=0;
    var countB=0;
    //console.log(number);
    //console.log(num);

    for(var i=0;i<4;i++){
    
        if(num[i]===number[i]){
            countA++;
        }
        if(number.indexOf(num[i])!=-1){
            countB++;
        }
    }
    countB=countB-countA;
    result=countA.toString()+'A'+countB.toString()+'B';

    return result;
}
//console.log(flag());
module.exports.getRandom=getRandom;
module.exports.flag=flag;