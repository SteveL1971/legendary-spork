import axios from '@/axios'
import router from '@/router'
import jwt_decode from "jwt-decode";

export default {
  state: {
    userToken: null,
    loggedIn: false,
    loggedInId: null,
    loggedInFirstName: null
  },
  getters: {
    loggedIn: state => state.loggedIn,
    loggedInId: state => state.loggedInId,
    loggedInFirstName: state => state.loggedInFirstName
  },
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
        var decoded = jwt_decode(token)
        state.loggedInId=decoded.id
      } else {
        state.userToken = null
        state.loggedIn = false
        state.loggedInId= null
      }
    },
    CHECK_USER: state => {
      try {
        let token = localStorage.getItem('token')
        if(token) {
          state.userToken = token
          state.loggedIn = true
          var decoded = jwt_decode(token)
          state.loggedInId=decoded.id
        } else {
          state.userToken = null
          state.loggedIn = false
          state.loggedInId= null
        }
      }
      catch(err) {
        console.log(err)
      }
    }
  },
  actions: {
    register: async ({dispatch}, _user) => {
      const user = {
        email: _user.email,
        password: _user.password
      }
      await axios.post('/users/register', _user)
      dispatch('login', {user})
    },
    login: ({commit}, payload) => {
      axios.post('/users/login', payload.user)
        .then(res => {
          if(res.status === 200) {
            
            localStorage.setItem('token', res.data.token)
            commit('SET_USER', res.data.token)

            if(payload.route) {
              router.push(payload.route)
            } else {
              router.push('/')
            }
          }
        })
    },
    checkUser: ({commit}) => {
      commit('CHECK_USER')
    },
    logout: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        localStorage.removeItem('token')

        commit('SET_USER', null)
      }
    }
  }
}