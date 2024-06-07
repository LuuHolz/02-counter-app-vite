import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelloWordApp } from './HelloWordApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './Styles.scss';


const App = () => {
    return (<h1> Hola Mundo </h1>);
}

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 5 }/>
        {/* <FirstApp title='Hola, Luciana' subTitle='subtitulo'/> */}
    </React.StrictMode>
)