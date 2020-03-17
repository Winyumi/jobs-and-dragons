import React from 'react';
import { useUserContext } from '../contexts/UserContext';
import Stats from '../components/Stats';
import Inventory from '../components/Inventory';

const CharBox = () => {
  const [state, dispatch] = useUserContext();
  return (
    <div className='row'>
      <h5 className='center'>{state.user.name}</h5>
        <Stats />
        <Inventory />
    </div>
  );
};

export default CharBox;
