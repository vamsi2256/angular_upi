'use strict';

angular.module('upiApp',[]);

angular.module('upiApp').component('loginComponent',{
    templateUrl: "login/login.html",
    controller: [function AppController(){
        var self = this;
        self.mobile_number = "Nithish";
        self.pwd = "1234";
    }]
})