import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
const tg = window.Telegram.WebApp;
function App() {

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
    // const onSendData = useCallback(() => {
    //     // Ваше сообщение
    //     const data = chatId;
    //     tg.sendData("handleSubmitActive-----");
    // }, [])

    // useEffect(() => {
    //     tg.onEvent('mainButtonCliked', onSendData)
    //     return () => {
    //         tg.offEvent('mainButtonCliked', onSendData)
    //     }
    // }, []);

    const [chatIdData, setChatIdData] = useState('');
    const [Price, setPrice] = useState('');
    const [Maximum_sers, setMaximum_sers] = useState('');
    const [Descr, setDescr] = useState('');
    const handleChange1 = (e) => {
        setChatIdData(e.target.value);
    };
    const handleChange2 = (e) => {
        setPrice(e.target.value);
    };
    const handleChange3 = (e) => {
        setMaximum_sers(e.target.value);
    };
    const handleChange4 = (e) => {
        setDescr(e.target.value);
    };

    const handleSendData = () => {
        const data = chatIdData + ';sub';
        // console.log(data);
        tg.sendData(data);
    };

    const handleSendDataCreate = () => {
        const data = chatIdData + ';create';
        // console.log(data);
        tg.sendData(data);
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Здесь можно выполнить отправку chatId на сервер или другие действия с ним
    //     console.log('Chat ID:', chatId);
    //     // Очистка поля после отправки, если необходимо
    //     setChatId('');
    // };

    return (
        <div className="App">
            <h3>Enter the data</h3>

            <input
                className={'input'}
                type="text"
                placeholder={'Chat ID'}
                value={chatIdData}
                onChange={handleChange1}
            />
            <h3></h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Price'}
                value={Price}
                onChange={handleChange2}
            />
            <h3></h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Maximum users'}
                value={Maximum_sers}
                onChange={handleChange3}
            />
            <h3></h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Description'}
                value={Descr}
                onChange={handleChange4}
            />
            <h3></h3>
            {/*<button onClick={onClose}>Закрыть эту хрень</button>*/}
            {/*<Button title={'Закрыть эту хрень'} disable={false} onClick={onClose}/>*/}
            {/*<Button title={'кнопка снизу'} disable={false} onClick={onToggleButton}/>*/}
            {/*<Button title={'вывод сообщения'} disable={false} onClick={handleClick}/>*/}
            {/*<Button title={'subscribe'} disable={false} onClick={handleSendData}/>*/}
            <Button title={'create community'} disable={false} onClick={handleSendDataCreate}/>
        </div>
    )
}

export default App;