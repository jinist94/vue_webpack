export default {
  namespaced: true,
  state() {
    return {
      msg: 'Store Module'
    };
  },
  getters: {
    reverseMsg(state){
      return state.msg.split('').reverse().join('');
    }
  },
  mutations : {
    changeMsg(state){
      state.msg = 'Change Message';
    },
    updateMsg(state, newMsg){
      state.msg = newMsg;
    }
  },
  actions: {
    async fetchTodo({commit}){
      const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json());
      console.log(todo),
      commit('updateMsg', todo.title);
      // 해당 module 안에 존재하기 때문에 경로 입력 X
    }
  }
};
