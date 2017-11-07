'use strict';

module.exports = new MockUser;

function MockUser(){
    this.create = function create(user_data){
        user_data.id = 1;
        return user_data;
    };
    this.update = function update(user_data){
        return user_data ? "OK" : "ERROR";
    };
    this.get = function get(user_data){
        if( user_data){
            user_data.id = 1;
            user_data.isMock = true;
            return user_data;
        }
        return "ERROR";

    };
    this.validate = function validate(user_data){
        return user_data ? "OK" : "ERROR";
    };
};
