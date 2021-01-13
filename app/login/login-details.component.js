'use strict';
angular.module('login').component('loginComponent',{
    templateUrl: 'login/login-details.template.html',
    controller: [function loginDetails(){
        var self=this
        self.uname="9876543210"
        self.pwd="xxxxxxx"
        self.login=($http)=>{
            $http.get("http://localhost:3001/login").then(console,log("success"))
        }
    }
]
})