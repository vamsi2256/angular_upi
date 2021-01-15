angular.module('amountComponent',['ngRoute'])
angular.module('amountComponent').component('amountComponent',{
    templateUrl:"amount/amount.html",
    controller:
        function amountController($http,$routeParams,$location){
            var self=this;
            let dataObj=JSON.parse($routeParams.obj)
            console.log(dataObj)
            self.rname=dataObj.rname
            self.send=()=>{
            if(self.amount>0){
                if(dataObj.balance>self.amount){
                    dataObj.amount=self.amount
            $http.post("http://localhost:3001/pay",{obj:dataObj}).then((res)=>{
                    $location.path("/dashboard");
            })
        }
    }}

}
})
