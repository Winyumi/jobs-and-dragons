import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

const userReducer = (state, action) => {
  switch (action.type) {
    case 'user':
      console.log(action.payload);
      return {
        user: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

const UserProvider = ({
  value = {
    user: {
      name: 'Sal Tamay'
    }
  },
  ...props
}) => {
  const [state, dispatch] = useReducer(userReducer, { ...value });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
