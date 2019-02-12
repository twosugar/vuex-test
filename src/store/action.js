import store from "../store";

const action = {
  increment: (dispatch, data) => {
    console.log('action',data)
    store.commit('increment', data)
  }
};

export default action;
