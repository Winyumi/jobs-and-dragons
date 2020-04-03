import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

const userReducer = (state, action) => {
  switch (action.type) {
    case 'user':
      return {
        user: action.payload,
        // currentQuest: state.currentQuest
      };
    case 'quest':
      return {
        user: {
          ...state.user,
        },
        // currentQuest: action.payload
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
        scroll: false,
        bow: false,
      },
      experience: [],
      education: [],
      skills: [],
      projects: [],
      expertise: [],
      jobsearch: [],
    },
    // currentQuest: 'quest-01'
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
