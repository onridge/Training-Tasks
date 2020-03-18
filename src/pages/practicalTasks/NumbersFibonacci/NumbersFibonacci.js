import React from 'react';
import Layout from '../../../components/Layout/Layout';

class NumbersFibonacci extends React.PureComponent{
    state = {};

    handleChange = (event) => {
        const { value } = event.target;

        this.setState({ value });
    };

    handleClick = () => {
        const { value } = this.state;

        this.setState({ result: this.fibonacci(value).toString() });
    };

    fibonacci = (num) => {
        if(typeof num !== 'number') {
            return undefined
        }
        if (num === 1) {
            return [0, 1];
        }
        const s = this.fibonacci(num - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    };

    render() {
        const { result } = this.state;

        return (
            <Layout>
                <h3>Числа Фиббоначи, вывести последовательность fib(previous, next, count)</h3>
                <label>Введите число</label>
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleClick}> Validation </button>
                <label>Результат: {result} </label>
            </Layout>
        );
    }
}

export default NumbersFibonacci;
