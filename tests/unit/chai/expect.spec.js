'use strict';
const expect = require('chai').expect;


describe('chai', () => {

    it('should test expect', () => {
        //some actions
        const result = 1;
        expect(result).to.eql(1);
        expect(typeof 'test').to.be.a('string');
        expect(new Promise()()).to.eval
    });
});