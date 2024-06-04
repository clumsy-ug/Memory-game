import ReactCardFlip from 'react-card-flip';
import { GiPartyPopper } from "react-icons/gi";
import { LiaGrinBeamSweat } from "react-icons/lia";
import { useEffect, useState } from 'react';

const Card = ({ shuffle, shuffledNumbers }) => {
    const [isFlipped, setIsFlipped] = useState({});
    const [clickedCards, setClickedCards] = useState(new Set());
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [score, setScore] = useState(0);

    const handleClick = (num) => {
        if (!isFlipped[num]) {
            setIsFlipped(prev => ({ ...prev, [num]: true }));
            setClickedCards(new Set([...clickedCards, num]));
        }
    };

    useEffect(() => {
        if (clickedCards.size === 2) {
            const [first, second] = [...clickedCards];
            const firstSrc = getCardImage(first);
            const secondSrc = getCardImage(second);

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

    const getCardImage = (num) => {
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

    // useEffect(() => {
    //     console.log(shuffledNumbers);
    // }, []);

    const restart = () => {
        setIsFlipped({});
        setClickedCards(new Set());
        setMatchedPairs([]);
        setScore(0);

        // shuffleした際に表面があった場合、その表面のshuffle後の新しい表面が一瞬移ってしまうのを阻止するためのsetTimeout
        setTimeout(() => {
            shuffle(shuffledNumbers);
        }, 100);
    }

    const numbers = Array.from({ length: 18 }, (_, i) => i + 1);

    return (
        <>
            <div className="shuffle-div">
                <button className='shuffle-button' onClick={restart}><span>shuffle & play</span></button>
            </div>

            <div className='container'>
                {numbers.map(num => (
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
                            src={getCardImage(num)}
                            className="card-front"
                            onClick={() => handleClick(num)}
                            alt="ロゴのsvgが表示されませんでした"
                        />
                    </ReactCardFlip>
                ))}
            </div>
            {
                matchedPairs.length === 18
                    ?
                    <>
                        <br />
                        <span><b className='clear-b'>クリア！</b></span>
                        {
                            score === 9
                            ? <h1 className='excellent-h1'>Excellent!!!</h1>
                            : false
                        }
                        <hr />
                        <ul className='clear-ul'>
                            <li className='clear-li'>
                                あなたの得点は<b>{score}点</b>です
                                {
                                    score >= 4
                                        ? <GiPartyPopper className='clear-icon-good' />
                                        : <LiaGrinBeamSweat className='clear-icon-bad' />
                                }
                                &nbsp;(ミス{9 - score}回)
                            </li>
                            <li className='clear-li'><b>計算方法 ： </b>初期値0点、ミス-1点、ペア発見+1点</li>
                            <li className='clear-li'>どんなに運が悪くても必ず4点以上取ることができます</li>
                            <ul>
                                <li>4点以上を確実に取れるように訓練しましょう！</li>
                            </ul>
                            <li className='clear-li'>理論値最高点は9点です</li>
                            <ul>
                                <li>運が良い、かつノーミスの場合</li>
                            </ul>
                        </ul>
                    </>
                    :
                    false
            }
        </>
    )
}

export default Card;
