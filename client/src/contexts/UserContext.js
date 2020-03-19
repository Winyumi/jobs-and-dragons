import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

const userReducer = (state, action) => {
  switch (action.type) {
    case 'user':
      return {
        user: action.payload,
        currentQuest: state.currentQuest
      };
    case 'quest':
      return {
        user: {
          ...state.user
        },
        currentQuest: action.payload
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
      name: 'Sal Tamay',
      hp: 10,
      jp: 2,
      strength: 12,
      speed: 3,
      intelligence: 6,
      inventory: {
        scroll: false,
        bow: false
      }
    },
    currentQuest: 'quest-01'
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
