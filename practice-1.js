const number='1234';
//const num='1253';

function flag(num,number){
    var result;
    var a=[];
    var b=[];
    a=num.split('');
    b=number.split('');
    var countA=0;
    var countB=0;
    for(var i=0;i<a.length;i++){
    
        if(a[i]===b[i]){
            countA++;
        }
    }
    for(var j=0;j<a.length;j++){

        if(b.indexOf(a[j])!=-1){
            countB++;
        }
    }
    countB=countB-countA;
    result=countA.toString()+'A'+countB.toString()+'B';

    return result;
}
console.log(flag(num,number));