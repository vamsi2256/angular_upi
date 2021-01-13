var app=angular.module('upiApp',[]);

app.component('registerComponent',{
    templateUrl:"register/register.html",
    controller:[function registerController(){
        var self=this;
        self.name=""
        self.email=""
        self.city=""
        self.mobile_number=""
        self.pwd=""
    }]
})
