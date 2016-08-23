'use strict';
mainApp.factory('AuthFactory', ['$resource', '$rootScope', '$cookies', '$location','CookieManager', function ($resource, $rootScope, $cookies, $location,CookieManager) {
        var user;
        return{


            
            logout: function () {
                CookieManager.clearUser();
                $location.path("/login");
            },
            isLoggedIn: function () {
                return(CookieManager.getUser()) ? true : false;
            },
            getUser:function() {
                return CookieManager.getUser();
            }
            ,
            login: function (username, password, callback) {
                var self = this;
                var Login = $resource(APP_URL.login, {},
                        {
                            login: {method: "POST"}
                        }
                );
                var promise = Login.login({email: username, password: password}).$promise;
                promise.then(function (result) {
                    if (result.token) {
                       // console.log(result.token);
                        result.user['token'] = result.token;
                        CookieManager.setUser(result.user);
                        callback(null);
                    }

                }, function (error) {
                    callback(error)
                });
            },
            /** for social network login **/
            loginWithToken: function (token, callback) {
                var self = this;
                self.setAuthorizationHeaderSocial(token);
                var Login = $resource(APP_URL.userbytoken, {}, {
                    query: {method: 'GET', headers: HEADERS, isArray: false},
                });
                var promise = Login.query({token: token}).$promise;
                promise.then(function (result) {

                    if (result) {
                        console.log(token);
                        result['token'] = token;
                        self.setUser(result);
                        callback(null);
                    }


                }, function (error) {
                    console.log(error);
                    callback(error)
                });
            }
        }
    }]);