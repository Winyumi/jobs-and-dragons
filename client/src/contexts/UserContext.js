import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

const userReducer = (state, action) => {
  switch (action.type) {
    case 'user':
      return {
        user: action.payload,
      };
    case 'quest':
      return {
        user: {
          ...state.user,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

const UserProvider = ({
  value = {
    user: {
      _id: '',
      name: '',
      email: '',
      picture: '',
      gamestats: {
        publicRepos: 0,
        followers: 0,
        numOfStars: 0,
        jp: 20,
        speed: 75,
      },
      inventory: {
        brand: false,
        scroll: false,
        bow: false,
        quill: false,
        net: false,
      },
      experience: [],
      education: [],
      skills: [],
      projects: [],
      expertise: [],
      jobsearch: [],
    },
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
