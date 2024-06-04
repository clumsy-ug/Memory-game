import './components/style.css';
import Card from "./components/Card";

const App = () => {
    
    // Fisher-Yates shuffle algorithm
    const shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const numbers = Array.from({ length: 18 }, (_, i) => i + 1);
    const shuffledNumbers = shuffle(numbers);

    return (
        <>
            <Card shuffle={shuffle} shuffledNumbers={shuffledNumbers} />
        </>
    )
}

export default App;
