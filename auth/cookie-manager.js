'use strict';
mainApp.factory('CookieManager', [ '$cookies', function ( $cookies) {
    var user;
    return{

        clearUser:function() {
            $cookies.remove("user");
        },
        getUser:function() {
            var user= $cookies.get("user");
            if (user) {
                user = JSON.parse(user);
                return user;
            } else {
                return null;
            }
        },
        getAuthHeader:function() {
            var user = this.getUser();
            if (user) {
                return user.token;
            } else {
                return false;
            }


        },
        setUser: function (aUser) {
            $cookies.put('user', JSON.stringify(aUser));
        }
    }

}]);