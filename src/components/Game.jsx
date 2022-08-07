import { useState } from "react"
import '../Game.css'

const Game = (props) => {
    const [players, setPlayers] = useState([
        { name: 'Klee', id: 0 },
        { name: 'Kazuha', id: 1 },
        { name: 'Eula', id: 2 },
        { name: 'Zhongli', id: 3 },
        { name: 'Raiden Shogun', id: 4 },
        { name: 'Ganyu', id: 5 },
        { name: 'Sakura', id: 6 },
        { name: 'Heizou', id: 7 },
        { name: 'Reizor', id: 8 },
    ]);

    const randomArray = array => {
        const arrayCopy = [...array];

        for (let i = arrayCopy.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
        }

        return arrayCopy
    }

    const updatePlayerState = () => {
        const updateState = randomArray(players)
        setPlayers(updateState)
    }

    return (
        <div className="cards">
            {players.map(player => {
                return (
                    <div key={player.id} className='card' onClick={() => {
                        props.handleScore(player)
                        updatePlayerState()
                    }}>
                        <img className="image" id={player.id} draggable={false} src={require(`../assets/card/${player.name}.webp`)} alt={player.name} />
                        <span className="name">{player.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Game;