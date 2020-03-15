import React from 'react';
import World from '../components/World';
import Dialogue from '../components/Dialogue';
import CharBox from '../components/CharBox';
import { PlayerProvider } from '../contexts/PlayerContext';


import 'materialize-css';

const Game = () => (
    <div className="row"
        style={{
            marginTop: '100px'
        }}
    >
        <div className="col s3 charnav">
            <Dialogue />
            <CharBox />
        </div>
        <div className="col s9">
            <PlayerProvider>
                <World />
            </PlayerProvider>
        </div>
    </div>
);

export default Game;