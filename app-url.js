var HEADERS = {};
var API_ENGINE_URL = location.origin;
var headerss = {Authorization : "dfsdfsdfsfs"};
var APP_URL = {
    // authenticate
    login: API_ENGINE_URL + "/api/login",
    forgot_password:API_ENGINE_URL,
    //user
    signup:"",
    get_user:"/api/users/:id",
    update_user:"/api/user",
    update_password:"/api/change-password",
    activate_account:"/api/activate-account",
    profile_avatars:"/api/profile-avatars",
    update_profile_pic:"/api/profile-pic",
    send_forgot_password_link:"/api/forgot-password",
    reset_password:"/api/reset-password",
    // expense
    add_expense:API_ENGINE_URL + "/api/expense",
    update_expense:API_ENGINE_URL + "/api/expense",
    delete_expense:API_ENGINE_URL + "/api/expense/:id",
    get_expense_list:API_ENGINE_URL + '/api/rooms/:room_id/expense/:uid',
    get_expense_summary:API_ENGINE_URL + '/api/rooms/:room_id/expense-summary/:uid',
    end_expense:API_ENGINE_URL + '/api/rooms/:room_id/end-expense/:uid',
    hash_except:API_ENGINE_URL + '/api/rooms/:room_id/hash-except/:uid',
    uid_details:API_ENGINE_URL + '/api/rooms/:room_id/uid-details/:uid',
    roomuid:API_ENGINE_URL + '/api/roomuid',
    start_new_expense:API_ENGINE_URL + '/api/start-new-expense',
    add_user_expense:API_ENGINE_URL + '/api/add-user-expense',
    
    // room
    rooms:API_ENGINE_URL + "/api/rooms",
    delete_room:API_ENGINE_URL + "/api/rooms/:id",
    get_room:API_ENGINE_URL + "/api/rooms/:id",



    //room member list
    room_member_list:API_ENGINE_URL + "/api/rooms/:id/user",
    add_room_user:API_ENGINE_URL + "/api/rooms/:id/user",
    delete_room_user:API_ENGINE_URL + "/api/rooms/:room_id/user/:user_id",



    create_user:API_ENGINE_URL + "/api/users",
    // friendlist
    friend_list:API_ENGINE_URL + "/api/friends/:id"


    
    
};