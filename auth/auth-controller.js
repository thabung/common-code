mainApp.controller('authController', ['$scope', 'AuthFactory', '$rootScope', '$location', function ($scope, Auth, $rootScope, $location) {
    $scope.loginData = {}
        $scope.login = function () {
            
            Auth.login($scope.loginData.email,$scope.loginData.password,function(err) {
                if (err) {
                    $scope.errorMsg = err.data.msg;
                } else {


                    $location.path("/expense");
                }
                
            });
        }


    if ($location.path() == "/logout") {
        Auth.logout();
    }



    }]);
