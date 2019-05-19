import firebase from 'firebase'

export default {
  state: {
    user: {
      isAuth: false,
      userId: null
    }
  },
  mutations: {
    //
  },
  actions: {
    signup({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log(user)
      })
      .catch(function(error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
  }
}