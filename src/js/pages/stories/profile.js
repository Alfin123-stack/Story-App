import CheckUserAuth from "./auth/check-user-auth";

const Profile ={
    async init(){
      CheckUserAuth.checkLoginState()
    },

}

export default Profile;