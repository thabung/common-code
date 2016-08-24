'use strict';
mainApp.factory('RoomFactory', ['$resource',
    function ($resource) {
        return $resource(APP_URL.rooms,
            {},
            {
                getList: {method: 'GET', isArray: true},
                get: {method: 'GET',url:APP_URL.get_room,params:{id:"@id"}},
                deleteRoom: {method: 'DELETE',url:APP_URL.delete_room,params:{id:"@id"}},
                createRoom: {method: 'POST', params: {}},
                getRoomMemberList: {method: 'GET',  params: {id:"@id"},url:APP_URL.room_member_list,isArray:true},
                addMemberToRoom:{method:'POST',url:APP_URL.add_room_user, params: {id:"@room_id"}},
                deleteMemberFromRoom:{method:'DELETE',url:APP_URL.delete_room_user, params: {room_id:"@room_id",user_id:"@user_id"}},
                getLatestRoom:{method:'GET',url:APP_URL.get_my_latest_room}



            });
    }]);
