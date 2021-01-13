var app=angular.module('registerComponent',[]);

app.component('registerComponent',{
    templateUrl:"register/register.html",
    controller:function registerController($http){
        var self=this;
        self.name=""
        self.email=""
        self.city=""
        self.mobile_number=""
        self.pwd=""
        self.register=()=>{
            $http.post("http://localhost:3001/Register",{
                name:self.name,
                email:self.email,
                city:self.city,
                mobileNumber:self.mobile_number,
                password:self.pwd
            }).then((response)=>{
                if (response.data==='data Inserted'){
                     self.msg = "Data Submitted Successfully!";
                    //  $loction.path("")
                     console.log("sucess")}
                else{
                    self.msg = "Service not Exists";
                    console.log("failure")
                    }
                });
        }
    }
})
