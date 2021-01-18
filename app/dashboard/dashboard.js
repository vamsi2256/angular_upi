angular.module('dashboardComponent',['balanceComponent','transactionComponent','payComponent'])

angular.module('dashboardComponent').component('dashboardComponent',{
    templateUrl:"dashboard/dashboard.html",
    controller:function dashboardController($http,$location){
        var self=this;
        let mobile=localStorage.getItem("mobile")
        let balance=localStorage.getItem("balance")
        if(!(mobile&&balance)){
            $location.path("/")
        }
        self.logout=()=>{
            $http.get("http://localhost:3001/logout")
            localStorage.removeItem("mobile")
            localStorage.removeItem("balance")
            $location.path("/")

        }

    }
})