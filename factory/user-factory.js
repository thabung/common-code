'use strict';
mainApp.factory('UserFactory', ['$resource',
    function ($resource) {
        return $resource(APP_URL.create_user,
            {},
            {
                getList: {method: 'GET', isArray: true},
                get: {url:APP_URL.get_user,method: 'GET', params: {id:"@id"}},
                createUser: {method: 'POST', params: {}},
                getRoomMemberList: {method: 'GET',  params: {id:"@id"},url:APP_URL.room_member_list,isArray:true},
                addMemberToRoom:{method:'POST',url:APP_URL.add_room_user, params: {id:"@room_id"}},
                update:{method:'PUT',url:APP_URL.update_user,params:{}},
                changePassword:{method:'PUT',url:APP_URL.update_password,params:{}},
                activateAccount:{method:'POST',url:APP_URL.activate_account,params:{}},
                profileAvatars:{method:'GET',url:APP_URL.profile_avatars,params:{},isArray:true},
                updateProfilePic:{method:'PUT',url:APP_URL.update_profile_pic,params:{}},
                sendResetPasswordLink:{method:"POST",url:APP_URL.send_forgot_password_link},
                resetPassword:{method:"POST",url:APP_URL.reset_password},
		userSocialNetwork:{method:"POST", url:APP_URL.auth_social}

            });
    }]);
