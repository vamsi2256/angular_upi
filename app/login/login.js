'use strict';

angular.module('loginComponent',[]);

angular.module('loginComponent').component('loginComponent',{
    templateUrl: "login/login.html",
    controller: [function AppController(){
        var self = this;
        self.mobile_number = "Nithish";
        self.pwd = "1234";
    }]
})