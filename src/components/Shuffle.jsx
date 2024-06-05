const Shuffle = ({ setIsFlipped, setClickedCards, setMatchedPairs, setScore, shuffle, shuffledNumbers }) => {
    
    const restart = () => {
        setIsFlipped({});
        setClickedCards(new Set());
        setMatchedPairs([]);
        setScore(0);
        // shuffleした際にすでにめくられているlogoがあった場合、そのlogoのshuffle後の新しいlogoが一瞬見えてしまうのを阻止するためのsetTimeout
        setTimeout(() => {
            shuffle(shuffledNumbers);
        }, 100);
        setTimeout(() => {
            console.log(shuffledNumbers);
        }, 200);
    }

    return (
        <div className="shuffle-div">
            <button onClick={restart} type="button" className="btn btn-primary">shuffle & play</button>
        </div>
    )
}

export default Shuffle;
