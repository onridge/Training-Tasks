import React from 'react';
import Layout from '../../../components/Layout/Layout';

class MonotoneArray extends React.PureComponent{
    state = {};

    handleChange = (event) => {
        const { value } = event.target;

        this.setState({ value });
    };

    handleClick = () => {
        const { value } = this.state;
        const array = value.split(',');

        this.setState({ result: this.monotoneArray(array).toString() })
    };

    monotoneArray = (array) => {
        if(array.length <=2){
            return true;
        }
        let diff = 0;
        for (let i = 0; i < array.length; ++i){
            const newDiff = array[i] - array[i - 1];

            if(newDiff * diff < 0){
                return false;
            }
            diff = newDiff;
        }
        return true;
    };

    render() {
        const { result } = this.state;

        return (
            <Layout>
                <h3>Проверить массив на монотонность</h3>
                <label>Введите числа через запятую</label>
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleClick}> Validation </button>
                <label>Результат: {result} </label>
            </Layout>
        );
    }
}

export default MonotoneArray;
