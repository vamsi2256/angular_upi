angular.module('amountComponent',['ngRoute'])
angular.module('amountComponent').component('amountComponent',{
    templateUrl:"amount/amount.html",
    controller:
        function amountController($http,$routeParams){
            var self=this;
            self.dataObj=$routeParams.obj
            self.rname=dataObj.rname
            dataObj.amount=self.amount
            if(self.amount>0){
                if(dataObj.balance>self.amount){
            $http.post("http://localhost:3001/pay",{obj:dataObj}).then((res)=>{
                    self.msg="sucess"
            })
        }
    }

}
})
