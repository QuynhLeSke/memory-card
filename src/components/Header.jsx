import '../Header.css'
const Header = (props) => {
    return (
        <div className="header">
            <div className='title'>
                <h1>Memory Game</h1>
                <p>Click on image to get points, don't click twice</p>
            </div>
            <div className='scoreSection'>
                <h3>Score: {props.score}</h3>
                <h3>Highscore: { props.highScore}</h3>
            </div>
        </div>
    )
}

export default Header