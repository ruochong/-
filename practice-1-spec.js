/*global collectSameElements*/
'use strict';

describe('当输入的number=\'1234\' ', () => {

  it('当给的num=\'5678\' ,应当输出 \'0A0B\'  ', () => {
const number='1234';
const num='5678';
    const result = flag(num,number);

    expect(result).toEqual('0A0B');
  });
   it('当给的num=\'5178\'  ,应当输出\' 0A1B\'  ', () => {
const number='1234';
const num='5178';
    const result = flag(num,number);

    expect(result).toEqual('0A1B');
  });
   it('当给的num=\'5148  ,应当输出\'0A2B\'   ', () => {
const number='1234';
const num='5148';
    const result = flag(num,number);

    expect(result).toEqual('0A2B');
  });
   it('当给的num=\'5123\'  ,应当输出 \'0A3B\'  ', () => {
const number='1234';
const num='5123';
    const result = flag(num,number);

    expect(result).toEqual('0A3B');
  });
   it('当给的num= \'4321 ,应当输出\'0A4B\'   ', () => {
const number='1234';
const num='4321';
    const result = flag(num,number);

    expect(result).toEqual('0A4B');
  });
   it('当给的num= \'1568\' ,应当输出 \'1A0B\'  ', () => {
const number='1234';
const num='1568';
    const result = flag(num,number);

    expect(result).toEqual('1A0B');
  });
   it('当给的num= \'1562\' ,应当输出 \'1A1B\'  ', () => {
const number='1234';
const num='1562';
    const result = flag(num,number);

    expect(result).toEqual('1A1B');
  });
   it('当给的num= \'1425\' ,应当输出 \'1A2B\'  ', () => {
const number='1234';
const num='1425';
    const result = flag(num,number);

    expect(result).toEqual('1A2B');
  });
   it('当给的num= "1423" ,应当输出 "1A3B"  ', () => {
const number='1234';
const num='1423';
    const result = flag(num,number);

    expect(result).toEqual('1A3B');
  });
   it('当给的num="1256"  ,应当输出"2A0B"   ', () => {
const number='1234';
const num='1256';
    const result = flag(num,number);

    expect(result).toEqual('2A0B');
  });
   it('当给的num= "1253" ,应当输出 "2A1B"  ', () => {
const number='1234';
const num='1253';
    const result = flag(num,number);

    expect(result).toEqual('2A1B');
  });
  it('当给的num= "1243" ,应当输出 "2A2B"  ', () => {
const number='1234';
const num='1243';
    const result = flag(num,number);

    expect(result).toEqual('2A2B');
  });
  it('当给的num="1235"  ,应当输出"3A0B"   ', () => {
const number='1234';
const num='1235';
    const result = flag(num,number);

    expect(result).toEqual('3A0B');
  });
  it('当给的num="1234"  ,应当输出 "4A0B"  ', () => {
const number='1234';
const num='1234';
    const result = flag(num,number);

    expect(result).toEqual('4A0B');
  });
});
