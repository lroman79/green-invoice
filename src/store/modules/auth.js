import axios from 'axios';
//import mutations from '../mutations';

const auth = {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user : ''
      },
      mutations: {
        auth_success(state, {user, token}){
          state.status = 'success';
          state.user = user;
          state.token = token;
        },
        auth_error(state){
          state.status = 'error'
        },
      },
      actions: {
        signUserIn({commit}, user, token){
            return new Promise((resolve, reject) => {
              
              axios({url: 'https://sandbox.d.greeninvoice.co.il/api/v1/account/login', data: user, method: 'POST' })
              .then(resp => {
                const token = '$#&^%))(TOKEN';
                const user = resp.data;
                localStorage.setItem('token', token);
                localStorage.setItem('userInfo', JSON.stringify(user));
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', {user, token})
                resolve(resp.data)
              })
              .catch(err => {
                commit('auth_error')
                localStorage.removeItem(token)
                reject(err)
              })
            })
        },
    
      },
      getters : {
        getUser: state => {
          return state.user
        },
        isLoggedIn: state => state.token,
      }
   
  };
  
  export default auth;
  