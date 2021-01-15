angular.module('balanceComponent',[])

angular.module('balanceComponent').component('balanceComponent',{
    templateUrl:"balance/balance.html",
    controller:function balanceController($location,$http){
        let mobile=JSON.parse(localStorage.getItem("mobile"))
        var self=this;
        self.name=""
        $http.post("http://localhost:3001/checkBalance",{mobileNumber:mobile}).then((response)=>{
            let obj=response.data
            self.balance=obj.balance
            localStorage.setItem("balance",JSON.stringify(self.balance))
            self.name=obj.name
        }).catch((err)=>{
            self.msg="something went wrong"
        })
    
    
    }


})