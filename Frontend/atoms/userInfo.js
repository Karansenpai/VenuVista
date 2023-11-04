import {atom} from "recoil"

export const userInfo= atom({
    key: 'userInfo', 
    default: {
        username: null,
        email: null,
        password: null,
        isLoading: true
    }, 
  });