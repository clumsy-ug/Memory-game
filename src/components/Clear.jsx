import { GiPartyPopper } from "react-icons/gi";
import { LiaGrinBeamSweat } from "react-icons/lia";
import toast, { Toaster } from 'react-hot-toast';

// 全てのカードをめくったときに出る演出の処理を実装したコンポーネント
const Clear = ({ matchedPairs, score }) => {

    const perfectToast = () => {
        if (score === 9) {
            toast('なんてことだ！強運の持ち主が現れた！🥳', {
                icon: '🥳',
            });
        }
    };

    return (
        <>
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
                                <li>ノーミスの場合</li>
                            </ul>
                        </ul>
                    </>
                    :
                    false
            }
            {perfectToast()}
            <Toaster />
        </>
    )
}

export default Clear;
