import { authConstants } from '../actions/constants';

const initState = {
};

export default (state = initState, action) => {
    console.log(state)
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      };
      break;
  }

  return state;
};
