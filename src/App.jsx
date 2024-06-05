import { useState } from 'react';
import Shuffle from './components/Shuffle';
import Cards from './components/Cards';
import Clear from './components/Clear';
import './components/style.css';

const App = ({ shuffle, shuffledNumbers }) => {
    const [isFlipped, setIsFlipped] = useState({});
    const [clickedCards, setClickedCards] = useState(new Set());
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [score, setScore] = useState(0);

    return (
        <>
            <Shuffle
                setIsFlipped={setIsFlipped}
                setClickedCards={setClickedCards}
                setMatchedPairs={setMatchedPairs}
                setScore={setScore}
                shuffle={shuffle}
                shuffledNumbers={shuffledNumbers}
            />

            <Cards
                clickedCards={clickedCards}
                setClickedCards={setClickedCards}
                setMatchedPairs={setMatchedPairs}
                setScore={setScore}
                setIsFlipped={setIsFlipped}
                matchedPairs={matchedPairs}
                shuffledNumbers={shuffledNumbers}
                isFlipped={isFlipped}
            />

            <Clear matchedPairs={matchedPairs} score={score} />
        </>
    )
}

export default App;
