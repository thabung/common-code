mainApp.controller('authController', ['$scope', 'AuthFactory', '$rootScope', '$location','$state', function ($scope, Auth, $rootScope, $location,$state) {
    $scope.loginData = {}
        $scope.login = function () {
            
            Auth.login($scope.loginData.email,$scope.loginData.password,function(err) {
                if (err) {
                    $scope.errorMsg = err.data.msg;
                } else {


                    $state.go(window.__env.landingState);
                }
                
            });
        }


    if ($location.path() == "/logout") {
        Auth.logout();
    }



    }]);
