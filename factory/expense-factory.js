'use strict';

mainApp.factory('ExpenseFactory', ['$resource',
    function ($resource) {
        return $resource(APP_URL.add_expense,
            {},
            {
                getList: {method: 'GET',url:APP_URL.get_expense_list,params:{uid:"@uid",room_id:"@room_id"},isArray:true},
                create: {method: 'POST'},
                update: {method: 'PUT',url:APP_URL.update_expense},
                delete:{method:'DELETE',url:APP_URL.delete_expense,params:{id:"@id"}},
                getSummary:{method:"GET",url:APP_URL.get_expense_summary,params:{uid:"@uid",room_id:"@room_id"},isArray:true},
                endCalculation:{method:"PUT", url:APP_URL.end_expense,params:{uid:"@uid",room_id:"@room_id"}},
                hashExcept:{method:"GET", url:APP_URL.hash_except,params:{uid:"@uid",room_id:"@room_id"},isArray:true},
                getUidDetails:{method:"GET", url:APP_URL.uid_details,params:{uid:"@uid",room_id:"@room_id"},isArray:false},
                getRoomUID:{method:"GET", url:APP_URL.roomuid},
                startNewExpense:{method: "POST",url:APP_URL.start_new_expense},
                addUserToExpense:{method: "POST",url:APP_URL.add_user_expense}



            });
    }]);

