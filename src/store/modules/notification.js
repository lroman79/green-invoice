import mutations from '../mutations';

const { MESSAGE } = mutations;

const emptyMsg = {
  title: 'Success',
  type: 'success',
  message: '',
};

const notificationStore = {
  state: {
    messagePool: [],
  },
  getters: {
    lastMessage: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    [MESSAGE](state, msg) {
      state.messagePool.push(msg);
    },
  },
  actions: {
    loadMessage({ commit }, msgPayload = {}) {
      const msg = { ...emptyMsg, ...msgPayload };
      commit(MESSAGE, msg);
    },
  },
};

export default notificationStore;
