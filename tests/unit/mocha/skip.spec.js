'use strict';

describe('skip tests', () => {
    it.skip('should skip this', () => {

    });
    it('should not skip this', () => {
    });

    it('should only test in the correct environment', function () {
        /* check test environment */
        if (process.env.NODE_ENV === 'Devlopment') {
            // make assertions
        } else {
            this.skip();
        }
    });
    describe.skip('describe skip', () => {
        it('should skip this test', () => {
        });
    });
});