'use strict';
const randomModule=require('./practice-1.js');
const readLineSync=require('readline-sync');
const sinon=require('sinon');
function text() {
    const num=sinon.stub(readLineSync,'question').returns('1234');
    const number=sinon.stub(randomModule,'getRandom').returns('1234');
    const expectResult='4A0B';
    const  result=randomModule.flag();
    console.log(result);
    num.restore();

}