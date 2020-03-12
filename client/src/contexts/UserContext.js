import React, { createContext, useReducer, useContext } from 'react';
import { api } from '../utils/api';

const UserContext = createContext();
const { Provider } = UserContext;

const userReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      api.addUserInfo(action.user).then(res => ({ ...state, ...res }));
      break;
    default:
      console.log(action.user);
  }
};

const UserProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(userReducer, { user: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
