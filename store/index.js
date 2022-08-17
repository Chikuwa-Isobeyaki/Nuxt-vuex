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
    },
    // actions: {
    //   updateMessageAction(context) {
    //     context.commit('updateMessage', 'Commit with payload')
    //   }
    // }
    actions: {
      updateMessageAction(context, payload) {
        context.commit('updateMessage', payload)
      }
    }
  })
}

// 下記記述で外部のファイルから参照できるように
export default createStore
