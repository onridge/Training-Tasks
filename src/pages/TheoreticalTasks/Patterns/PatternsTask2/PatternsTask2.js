import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import styles from './PatternsTask2.css';

export default function PatternTask2() {
    return (
        <Layout>
            <div>
                <h3> Как реализовать синглетон? </h3>
            </div>
            <label>Шаги для реализации паттерна Singleton</label>
            <ul>
                <li>Добавьте в класс приватное статическое поле, которое будет содержать одиночный объект.</li>
                <li>Объявите статический создающий метод, который будет использоваться для получения одиночки.</li>
                <li>Добавьте «ленивую инициализацию» (создание объекта при первом вызове метода) в создающий метод одиночки.</li>
                <li>Сделайте конструктор класса приватным.</li>
                <li>В клиентском коде замените вызовы конструктора одиночка вызовами его создающего метода.</li>
            </ul>
            <label>Пример Singleton</label>
            <div className={styles.codeContainer}>
                <br />{`function Singleton () {`}
                <br /> { `some code` }
                <br /> {`}`}
                <br />{`Singleton.instance = null;`}
                <br />{`Singleton.getInstance = function() {`}
                <br />{`  if (Singleton.instance) {`}
                <br />{`    return Singleton.instance;`}
                <br />{`  } else {`}
                <br />{`        Singleton.instance = new Singleton();`}
                <br />{`	}`}
                <br />{`}`}
            </div>
        </Layout>
    )
}
