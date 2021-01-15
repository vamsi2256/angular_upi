angular.module('payComponent',['ngRoute','amountComponent']);
angular.module('payComponent').component('payComponent',{
    templateUrl:"pay/pay.html",
    controller:function payController($http,$location){
        var self=this;
        self.payCheck=()=>{
            console.log(self.rnumber)
            $http.post("http://localhost:3001/transaction",{rnumber:self.rnumber}).then((res)=>{
            let mobile=JSON.parse(localStorage.getItem("mobile"))  
            let balance=JSON.parse(localStorage.getItem("balance"))  
            let obj1=res.data
            let obj={}
                obj.rname=obj1.name
                obj.rnumber=self.rnumber
                obj.sender=mobile
                obj.balance=balance
                console.log(obj.rnumber+"   "+obj1)
                if(obj1.name!=="no user"){
                    console.log(obj1.name)
                    $location.path("/amount/"+JSON.stringify(obj))
                }
            })
        }
    }
})