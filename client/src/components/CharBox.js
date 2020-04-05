import React, { useState, useEffect } from 'react';

import { useUserContext } from '../contexts/UserContext';
import Stats from '../components/Stats';
import Inventory from '../components/Inventory';

const CharBox = () => {
  const [state, dispatch] = useUserContext();
  const [name, setName] = useState();

  useEffect(() => {
    setName(state.user.name);
  }, [state.user.name]);

  return (

    <>
      <h5 className='center'>{name}</h5>
      <Stats />
      <Inventory />
    </>

  );
};

export default CharBox;
