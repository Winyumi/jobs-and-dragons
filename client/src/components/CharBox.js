import React from 'react';
import { useUserContext } from '../contexts/UserContext';

const CharBox = () => {
  const [state, dispatch] = useUserContext();
  return (
    <div className='row'>
      <h5 className='center'>{state.user.name}</h5>
    </div>
  );
};

export default CharBox;
