import React, { useState } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
// function App() {
//   return (
//       <div classname = "App">
//         привет ариuuyyuyuyuyuyuuyuyuyuyuyuyuветеп
//       </div>
//   );
// }
//
// export default App;

function App() {

    // useEffect( () => {
    //         tg.ready();
    //     }, [])
    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
            сайт сайт сайт
            <button onClick={onClose}>Закрыть эту хрень</button>
        </div>
    )
}
export default App;

// function App() {
//     const [button1Clicked, setButton1Clicked] = useState(false);
//     const [button2Clicked, setButton2Clicked] = useState(false);
//     const [button3Clicked, setButton3Clicked] = useState(false);
//
//     return (
//         <div>
//             <button onClick={() => setButton1Clicked(true)}>Button 1</button>
//             <button onClick={() => setButton2Clicked(true)}>Button 2</button>
//             <button onClick={() => setButton3Clicked(true)}>Button 3</button>
//
//             {button1Clicked && <p>Button 1 was clicked!</p>}
//             {button2Clicked && <p>Button 2 was clicked!</p>}
//             {button3Clicked && <p>Button 3 was clicked!</p>}
//         </div>
//     );
// }
// export default App;