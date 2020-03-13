import React from 'react';
import Layout from '../../../components/Layout/Layout';

class ValidatingBrackets extends React.PureComponent{

    state={};

    handleChange = (event) => {
        const { value } = event.target;

        this.setState({ value })
    };

    handleClick = () => {
        const { value } = this.state;
        const expression = value.split('');

        this.setState({ result: this.validatingBrackets(expression).toString() });
    };

    validatingBrackets = (expression) => {
        const stack = [];
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        for (let i = 0; i < expression.length; i++) {
            if(Object.keys(map).some(key => key === expression[i])) {
                stack.push(expression[i]);
            } else {
                if(!Object.keys(map).some(key => key === expression[i] || map[key] === expression[i])) {
                    continue
                }
                if(map[stack.pop()] !== expression[i]) {
                    return false
                }
            }
        }
        return stack.length === 0;
    };

    render() {
        const { result } = this.state;
        return (
            <Layout>
                <h3>Проверить валидацию скобок</h3>
                <label>Введите выражение</label>
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleClick}> Validation </button>
                <label>Результат: {result} </label>
            </Layout>
        );
    }
}

export default ValidatingBrackets;
