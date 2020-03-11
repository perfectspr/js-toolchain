'use strict';
describe('hook',()=>{
    before(()=> {
        console.log('before');
    });
    beforeEach(()=>{
        console.log('beforeEach');
    })
    afterEach(()=>{
        console.log('afterEach');
    })
    after(()=> {
        console.log('after');
    });
    it('test case 1', ()=>{
        console.log('test case 1');
    });
    it('test case 2', ()=>{
        console.log('test case 2');
    });
});