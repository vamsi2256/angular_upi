angular.module('transactionComponent',[])

angular.module('transactionComponent').
    factory("PagerService",PagerService).
    component('transactionComponent',{
    templateUrl:"transactions/transaction.html",
    controller: function transactionController($http,PagerService){
    let mobile=JSON.parse(localStorage.getItem("mobile"))
    var self=this;
    self.trans_array=[];
        $http.post("http://localhost:3001/getTransactions",{mobile:mobile}).then((res)=>{
            self.trans_array=res.data
            // self.dummyItems = _.range(1, 151); // dummy array of items to be paged
        self.pager = {};
        self.setPage = setPage;

        initController();

        function initController() {
            // initialize to page 1
            self.setPage(1);
        }

        function setPage(page) {
            if (page < 1 || page > self.pager.totalPages) {
                return;
            }

            // get pager object from service
            self.pager = PagerService.GetPager(self.trans_array.length, page);

            console.log(self.pager.pages)

            // get current page of items
            self.items = self.trans_array.slice(self.pager.startIndex, self.pager.endIndex + 1);
        }
        })
}
})

function PagerService() {
    // service definition
    var service = {};

    service.GetPager = GetPager;

    return service;

    // service implementation
    function GetPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        function range(start, end) {
            var ans = [];
            for (let i = start; i <= end; i++) {
                ans.push(i);
            }
            return ans;
        }

        // create an array of pages to ng-repeat in the pager control
        var pages = range(startPage, endPage );

        // console.log({totalItems: totalItems,
        //     currentPage: currentPage,
        //     pageSize: pageSize,
        //     totalPages: totalPages,
        //     startPage: startPage,
        //     endPage: endPage,
        //     startIndex: startIndex,
        //     endIndex: endIndex,
        //     pages: pages})

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}