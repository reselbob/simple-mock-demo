'use strict';
const mockUser = require('../mocks/mockUser');
const user = require('./user');

module.exports.update = function update(user_data){
    let u = user;
    //check the development environment to see if we're in test
    if(process.env.DEV_ENV && process.env.DEV_ENV === 'test'){
        //if we are, use the mock
        u = mockUser;
    }

    let status = 'UNKNOWN'
    if(u.validate(user_data) === 'ERROR') return 'ERROR';
    // Check user exists
    const model = u.get(user_data);
    // Model create/update code
    if (model.id) {
        status = u.update(user_data);
    } else {
        status = u.create(user_data);
    }
    return status
}