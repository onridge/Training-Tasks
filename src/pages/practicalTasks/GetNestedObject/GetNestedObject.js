import React from 'react';
import Layout from '../../../components/Layout/Layout';

class GetNestedObject extends React.PureComponent{
    state = {};

    handleChange = (event) => {
        const { value } = event.target;

        this.setState({ value });
    };

    handleClick = () => {
        const { value } = this.state;

        this.setState({ result: this.getNestedObject(value), isDone: 'Проверьте консоль' })
    };

    getNestedObject =(str) => {
        if(typeof str !== 'string'){
            return undefined;
        }
        const arrayWords = str.split('.');

        return arrayWords.reduceRight((obj, value) => {
            const newObj = {
                [value]: obj,
            };

            return newObj;
        }, null);
    };

    render() {
        const { result, isDone } = this.state;
        console.log(result);

        return (
            <Layout>
                <h3>Напишите функцию которая на вход принимает аргумент "a.b.c.d", а на выходе возвращает вложенный объект.</h3>
                <label>Введите буквы через точку</label>
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleClick}> Validation </button>
                <plaintext>Результат: {isDone} </plaintext>
            </Layout>
        );
    }
}

export default GetNestedObject;
