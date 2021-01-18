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
                        $http.post("http://localhost:3001/checkBalance",{mobileNumber:self.mobile_number}).then((response)=>{
                        let obj=response.data
                        self.balance=obj.balance
                        localStorage.setItem("balance",JSON.stringify(self.balance))
                            }).then(()=> $location.path("/dashboard"))
                    }
                    else{
                        $location.path("/register")
                        }
                });
                
        }
    }
})