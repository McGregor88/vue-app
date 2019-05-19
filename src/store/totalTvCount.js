export default {
  state: {
    totalTvCount: 10,
    isLarryHappy: true,
    isJennyHappy: true
  },
  getters: {
    happyStaff: state => {
      return state.isLarryHappy && state.isJennyHappy
    }
  },
  mutations: {
    // Jenny
    removeTv(state, amount) {
      state.totalTvCount -= amount
    }
  },
  actions: {
    // Larry
    removeTv(context, amount) {
      if(context.state.totalTvCount >= amount) {
        context.commit("removeTv", amount)
      }
    }
  }
}
