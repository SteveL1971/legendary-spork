import axios from '@/axios'
import router from '@/router'
import jwt_decode from "jwt-decode";

export default {
  state: {
    userToken: null,
    loggedIn: false,
    loggedInFirstName: null,
    loggedInUser: {
      id: '...',
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  getters: {
    loggedIn: state => state.loggedIn,
    loggedInFirstName: state => state.loggedInFirstName,
    loggedInUser: state => state.loggedInUser,
  },
  mutations: {
    SET_USER: (state, token ) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
        var decoded = jwt_decode(token)
        state.loggedInUser= {
          id: decoded.id,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          email: decoded.email,
          exp: decoded.exp
        }
        state.loggedInFirstName=decoded.firstName
        console.log(state.cart)
      } else {
        state.userToken = null
        state.loggedIn = false
        state.loggedInUser= {
          id: '',
          firstName: '',
          lastName: '',
          email: ''
        }
      }
    },
    CHECK_USER: state => {
      try {
        let token = localStorage.getItem('token')
        if(token) {
          const decoded = jwt_decode(token)
          if (decoded.exp < new Date().getTime()/1000) {
            // console.log("EXPIRED");
            state.userToken = null
            state.loggedIn = false
            state.loggedInUser= {
              id: '',
              firstName: '',
              lastName: '',
              email: ''
            }
          } else {
            // console.log("ACTIVE")
            state.userToken = token
            state.loggedIn = true
            state.loggedInUser= {
              id: decoded.id,
              firstName: decoded.firstName,
              lastName: decoded.lastName,
              email: decoded.email,
              exp: decoded.exp
            }
            state.loggedInUser.id=decoded.id
            state.loggedInUser.firstName=decoded.firstName
            state.loggedInUser.lastName=decoded.lastName
            state.loggedInUser.email=decoded.email
          }
        } else {
          state.userToken = null
          state.loggedIn = false
          state.loggedInUser= {
            id: '',
            firstName: '',
            lastName: '',
            email: ''
          }
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
            commit('SET_USER', res.data.token )
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
        commit('SET_USER', null )
      }
    }
  },
}