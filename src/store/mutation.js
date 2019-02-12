import state from './state'

const mutation = {
  increment: (dispatch, data) => {
    console.log('mutation', dispatch, data)
    state.a = data
  }
};

export default mutation;
