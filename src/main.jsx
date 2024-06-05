import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// カードをシャッフル（Fisher-Yates shuffle algorithm）
// 再レンダリングごとに同時に複数回shuffleされることを防ぐため、以下のコードはApp.jsxではなくmain.jsxに書く必要がある
const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const nums = Array.from({ length: 18 }, (_, i) => i + 1);
const shuffledNumbers = shuffle(nums);  // nums自体もshuffleされるのでpropsとしてnumsは渡せない

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(
    <StrictMode>
        <App shuffle={shuffle} shuffledNumbers={shuffledNumbers} />
    </StrictMode>
);
