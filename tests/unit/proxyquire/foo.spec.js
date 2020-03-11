'use strict';
const proxyquire = require('proxyquire').noPreserveCache;
const expect = require('chai').expect;

describe('foo', () => {

    it('should get ext for a file', () => {
        const foo = proxyquire('./foo', {
            'path': {
                extname: () => 'exe'
            }
        });
        expect(foo.extnameAllCaps('test.exe')).to.equal('exe');
    });
});