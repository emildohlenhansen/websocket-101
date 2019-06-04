import * as React from 'react';
import {useState} from 'react';

const PlayerList: React.FunctionComponent<any> = (props) => {
    const [players, setPlayers] = useState<string[]>([]);

    const {socket} = props;

    socket.on('playerlist', (players: string []) => {
        setPlayers(players);
    });

    return (
        <section className="player-container border">
            <h2>Players</h2>
            <div className="player-list">
                <ul>
                    {players.map(player => (
                        <li key={player}>
                            <div className="cursor-icon red"/>
                            {player}
                        </li>))}
                </ul>
            </div>
        </section>
    );
};

export default PlayerList;
