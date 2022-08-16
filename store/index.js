// Vuexの読み込み
import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: 'Hello Vuex!'
      }
    },
    // mutations: {
    //   updateMessage: function(state) {
    //     state.message = "Updated!"
    //   }
    // }
    mutations: {
      updateMessage: function(state, payload) {
        state.message = payload
      }
    }
  })
}

// 下記記述で外部のファイルから参照できるように
export default createStore
