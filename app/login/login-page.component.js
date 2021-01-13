'use strict';

angular.module('upiApp',[]);

angular.module('upiApp').component('loginPage',{
    templateUrl: "login/login.html",
    controller: [function AppController(){
        var self = this;
        self.name = "Nithish";
        self.pass = "1234";
    }]
})