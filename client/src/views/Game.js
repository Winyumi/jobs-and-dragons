import React from 'react';
import { Row, Col } from 'react-materialize';

import Questmap from '../components/Questmap';
import backgroundDark from '../assets/dark-honeycomb.png';

const Game = () => {
  return (
    <>
      <div style={PageStyles}>
        <Row>
          <Col s={1} />
          <Col s={10} style={GameBoxStyles}>
            <Questmap />
          </Col>
          <Col s={1} />
        </Row>
      </div>
    </>
  );
};

export default Game;

const PageStyles = {
  paddingTop: "100px",
  paddingBottom: "150px",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${backgroundDark})`,
};

const GameBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
};
