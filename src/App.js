import React, { useState } from 'react';
import './App.css';
import Button from "./Components/Button/Button";
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
            <Button title={'Test'} disable={false} />
        </div>
    )
}
export default App;