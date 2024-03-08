import React, {useCallback, useEffect, useState} from 'react';
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

    const onToggleButton = () =>{
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }

    const handleClick = () => {
        // Ваше сообщение
        alert("Кнопка нажата");
    };

    const handleSendData = () => {
        const data = "handleSubmitActive";
        console.log(data);
        tg.sendData(data);
    };

    const onSendData = useCallback(() => {
        // Ваше сообщение
        tg.sendData("handleSubmitActive");
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonCliked', onSendData)
        return () => {
            tg.offEvent('mainButtonCliked', onSendData)
        }
    }, []);


    return (
        <div className="App">
            {/*<button onClick={onClose}>Закрыть эту хрень</button>*/}
            <Button title={'Закрыть эту хрень'} disable={false} onClick={onClose} />
            <Button title={'кнопка снизу'} disable={false} onClick={onToggleButton} />
            <Button title={'вывод сообщения'} disable={false} onClick={handleClick} />
            <Button title={'subscribe'} disable={false} onClick={handleSendData} />
        </div>
    )
}
export default App;