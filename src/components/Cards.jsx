import { useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

const Cards = ({ isFlipped, setIsFlipped, setClickedCards, clickedCards, setMatchedPairs, setScore, matchedPairs, shuffledNumbers }) => {

    const handleClick = (num) => {
        if (!isFlipped[num]) {
            setIsFlipped(prev => ({ ...prev, [num]: true }));
            setClickedCards(new Set([...clickedCards, num]));
        }
    };

    useEffect(() => {
        if (clickedCards.size === 2) {
            const [first, second] = [...clickedCards];
            const firstSrc = getCardId(first);
            const secondSrc = getCardId(second);

            if (firstSrc === secondSrc) {  // 成功
                setClickedCards(new Set());
                setMatchedPairs(prev => [...prev, first, second]);
                setScore(prev => prev + 1);
            } else {  // 失敗
                setClickedCards(new Set());
                setScore(prev => prev - 1);
                setTimeout(() => {
                    setIsFlipped(prev => ({ ...prev, [first]: false, [second]: false }));
                }, 800)
            }
        }
    }, [clickedCards]);
    
    useEffect(() => {
        console.log(shuffledNumbers);
    }, []);

    const getCardId = (num) => {
        if (!matchedPairs.includes(num)) {
            switch (num) {
                case shuffledNumbers[0]:
                case shuffledNumbers[1]:
                    return './react.svg';
                case shuffledNumbers[2]:
                case shuffledNumbers[3]:
                    return './vite.svg';
                case shuffledNumbers[4]:
                case shuffledNumbers[5]:
                    return './python.svg';
                case shuffledNumbers[6]:
                case shuffledNumbers[7]:
                    return './cplus.svg';
                case shuffledNumbers[8]:
                case shuffledNumbers[9]:
                    return './vuejs.svg';
                case shuffledNumbers[10]:
                case shuffledNumbers[11]:
                    return './ruby.svg';
                case shuffledNumbers[12]:
                case shuffledNumbers[13]:
                    return './javascript.svg';
                case shuffledNumbers[14]:
                case shuffledNumbers[15]:
                    return './typescript.svg';
                case shuffledNumbers[16]:
                case shuffledNumbers[17]:
                    return './java.svg';
                default:
                    return;
            }
        } else {
            switch (num) {
                case shuffledNumbers[0]:
                case shuffledNumbers[1]:
                    return './reactslash.svg'
                case shuffledNumbers[2]:
                case shuffledNumbers[3]:
                    return './viteslash.svg';
                case shuffledNumbers[4]:
                case shuffledNumbers[5]:
                    return './pythonslash.svg';
                case shuffledNumbers[6]:
                case shuffledNumbers[7]:
                    return './cplusslash.svg';
                case shuffledNumbers[8]:
                case shuffledNumbers[9]:
                    return './vuejsslash.svg';
                case shuffledNumbers[10]:
                case shuffledNumbers[11]:
                    return './rubyslash.svg';
                case shuffledNumbers[12]:
                case shuffledNumbers[13]:
                    return './javascriptslash.svg';
                case shuffledNumbers[14]:
                case shuffledNumbers[15]:
                    return './typescriptslash.svg';
                case shuffledNumbers[16]:
                case shuffledNumbers[17]:
                    return './javaslash.svg';
                default:
                    return;
            }
        }
    };

    const nums = Array.from({ length: 18 }, (_, i) => i + 1);

    return (
        <div className='container'>
            {
                nums.map(num => (
                    <ReactCardFlip
                        key={num}
                        isFlipped={isFlipped[num]}
                        flipDirection="horizontal"
                    >
                        <img
                            id={num}
                            src="./cardimage.png"
                            className="card-back"
                            onClick={() => handleClick(num)}
                            alt="トランプ裏面のpngが表示されませんでした"
                        />
                        <img
                            id={num}
                            src={getCardId(num)}
                            className="card-front"
                            onClick={() => handleClick(num)}
                            alt="ロゴのsvgが表示されませんでした"
                        />
                    </ReactCardFlip>
                ))
            }
        </div>
    )
}

export default Cards;
