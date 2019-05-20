import firebase from 'firebase'

export default {
  state: {
    user: {
      isAuth: false,
      userId: null
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user.isAuth = true
      state.user.userId = payload
    },
    unsetUser(state) {
      state.user = {
        isAuth: false,
        userId: null
      }
    }
  },
  actions: {
    signup({commit}, payload) {
      commit("setProcessing", true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setUser", user.userId)
          commit("setProcessing", false)
        })
        .catch(function(error) {
          commit("setProcessing", false)
          commit("setError", error.message)
        });
    },
    signin({commit}, payload) {
      commit("setProcessing", true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setUser", user.userId)
          commit("setProcessing", false)
        })
        .catch(function(error) {
          commit("setProcessing", false)
          commit("setError", error.message)
        });
    },
    stateChanged({commit}, payload) {
      if(payload) {
        commit("setUser", payload.userId)
      } else {
        commit("unsetUser")
      }
    }
  },
  getters: {
    isUserAuth: (state) => state.user.isAuth
  }
}