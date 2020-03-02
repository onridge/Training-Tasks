import React from 'react';
import Layout from '../../../components/Layout/Layout';
import styles from './Storage.css';

class Storage extends React.PureComponent{
    state = {};

    handleChangeKey = (event) => {
        const { value } = event.target;

        this.setState({ key: value })
    };

    handleChangeValue = (event) => {
        const { value } = event.target;

        this.setState({ value })
    };

    handleClickCreateStorage = () => {
        const { key, value } = this.state;

        localStorage.setItem(key, value);
    };

    handleClickGetData = () => {
        const { key } = this.state;
        const data = localStorage.getItem(key);

        this.setState({ data })
    };

    clearLocalStorage = () => localStorage.clear();

    render() {
        const { data } = this.state;

        return (
            <Layout>
                <div>
                    <h3>
                        Отличие localStorage от sessionStorage? Написать функции для работы со storage
                    </h3>
                </div>
                <div>
                    <label>
                        localStorage и sessionStorage - это способы хранения данных на стороне пользователя в его web-браузере. Отличие между
                        ними в том,сколько времени данные хранятся.
                        При использовании sessionStorage данные хранятся в рамках текущей сессии и очистятся при закрытии вкладки.
                        При использовании localStorage данные хранятся неограниченное количество времени и могут быть очищены или посредством
                        вызова метода clear(), или очисткой самим пользователем при помощи devtools в браузере.
                    </label>
                </div>
                <div className={styles.container}>
                    <div>
                        <label>Enter key</label>
                        <input type='text' onChange={this.handleChangeKey} />
                        <label>Enter value</label>
                        <input type='text' onChange={this.handleChangeValue} />
                        <button onClick={this.handleClickCreateStorage}>Create Storage</button>
                    </div>
                    <div>
                        <input type='text' onChange={this.handleChangeKey} />
                        <button onClick={this.handleClickGetData}>Get Data</button>
                        <div>
                            <label>{data}</label>
                        </div>
                    </div>
                    <div>
                        <button onClick={this.clearLocalStorage}>Clear Storage</button>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Storage;
