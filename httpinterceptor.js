mainApp.factory('httpinterceptor', ['$q', '$location', '$rootScope', '$cookies', 'CookieManager', '$window', function ($q, $location, $rootScope, $cookies, CookieManager, $window) {
        var httpIntercpetor = {};
        httpIntercpetor.hideLoader = function () {
            var loader = $window.document.getElementById("httploader");
            if (loader) {
                loader.style.display = 'none';
            }

        };
        httpIntercpetor.showLoader = function () {
            var loader = $window.document.getElementById("httploader");
            if (loader) {
                loader.style.display = 'block';
            }
        };
        httpIntercpetor.request = function (req) {
            httpIntercpetor.showLoader();
            req.headers.Authorization = CookieManager.getAuthHeader();
            return req;
        };
        httpIntercpetor.response = function (response) {
            httpIntercpetor.hideLoader();
            
            

            if (response.status === 401) {
                $location.path("/");
                //AuthFactory.logout();
            }
            return response || $q.when(response);
        };
        httpIntercpetor.responseError = function (rejection) {
            httpIntercpetor.hideLoader();
            if (rejection.status == 500) {
                $rootScope.show_loader--;

                swal({title: "Something went wrong", text: "Please relogin", type: "warning"});
                $location.path("/");
            }

            if (rejection.status === 401) {
                console.log("Response Error 401", rejection);
                $rootScope.user = undefined;
                //$cookies.remove("user");
                //HEADERS = null;
                // $location.path("/login");
            } else {
                console.log(rejection);


            }
            return $q.reject(rejection);
        }
        return httpIntercpetor;
    }])
        .config(['$httpProvider', function ($httpProvider) {
                //Http Intercpetor to check auth failures for xhr requests
                $httpProvider.interceptors.push('httpinterceptor');
            }]);
