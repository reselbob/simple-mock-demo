'use strict';
const chai = require('chai');
chai.should();
const assert = require('chai').assert;
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const customer = require('../models/customer');

/************ IMPORTANT *******************
When running these tests with the intention to use mocks, make
sure that the environment variable setting, DEV_ENV is set to 'test'.
 ******************************************/

describe('Basic Tests: ', () => {

    it('Can update customer', done => {
        const data = {};
        data.id = 1;
        data.firstName = 'Bob';
        data.lastName = 'Reselman';
        data.dob = new Date('7/29/1906');

        assert.equal(customer.update(data), 'OK', `Could not get status for ${data}`);
        done();
    });

    it('Cannot update customer', done => {
        assert.equal(customer.update(), 'ERROR', `Could not get status when passing null data to the function`);
        done();
    });
});
