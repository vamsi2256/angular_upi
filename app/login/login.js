'use strict';

angular.module('loginComponent',[]);

angular.module('loginComponent').component('loginComponent',{
    templateUrl: "login/login.html",
    controller: function AppController($http,$location){
        var self = this;
        self.mobile_number = "";
        self.pwd = "";
        self.register=()=>{
            $location.path("/register")
        }
        self.login=()=>{
                $http.post("http://localhost:3001/login",{
                    mobileNumber:self.mobile_number,
                    password:self.pwd
                }).then((response)=>{
                    if (response.data==='user present'){
                        localStorage.setItem("mobile",JSON.stringify(self.mobile_number))
                        $location.path("/dashboard")
                    }
                    else{
                        $location.path("/register")
                        }
                });
        }
    }
})