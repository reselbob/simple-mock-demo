'use strict';

module.exports= new User()

function User(){
    this.create = function create(user_data){
        throw new Error('Not Implemented');
    };
    this.update = function update(user_data){
        throw new Error('Not Implemented');
    };
    this.get = function get(user_data){
        throw new Error('Not Implemented');
    };
    this.validate = function validate(user_data){
        throw new Error('No Implemented');
    };
};