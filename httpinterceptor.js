mainApp.factory('httpinterceptor',['$q','$location','$rootScope','$cookies','CookieManager',function($q,$location,$rootScope,$cookies,CookieManager){
    return {
        request: function (req) {
            req.headers.Authorization = CookieManager.getAuthHeader();
            return req;
        },
        response: function(response){
            if (response.status === 401) {
                $location.path("/");
                //AuthFactory.logout();
            }
            return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status == 500) {
                $rootScope.show_loader--;

                swal({title:"Something went wrong",text:"Please relogin",type:"warning"});
                $location.path("/");
            }

            if (rejection.status === 401) {
                console.log("Response Error 401",rejection);
                $rootScope.user = undefined;
                //$cookies.remove("user");
                //HEADERS = null;
                // $location.path("/login");
            } else {
                console.log(rejection);
                

            }
            return $q.reject(rejection);
        }
    }
}])
    .config(['$httpProvider',function($httpProvider) {
        //Http Intercpetor to check auth failures for xhr requests
        $httpProvider.interceptors.push('httpinterceptor');
    }]);