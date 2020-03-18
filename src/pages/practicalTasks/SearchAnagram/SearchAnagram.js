import React from 'react';
import Layout from '../../../components/Layout/Layout';

class SearchAnagram extends React.PureComponent{
    state = {};

    handleFirstChange = (event) => {
        const { value } = event.target;

        this.setState({ firstWord: value });
    };

    handleSecondChange = (event) => {
        const { value } = event.target;

        this.setState({ secondWord: value });
    };

    handleClick = () => {
        const { firstWord, secondWord } = this.state;

        this.setState({ result: this.searchAnagram(firstWord, secondWord).toString() })
    };

    searchAnagram = (words1, words2) => {
            const str1 = words1
                .toLowerCase()
                .split('')
                .sort()
                .join('');

            const str2 = words2
                .toLowerCase()
                .split('')
                .sort()
                .join('');

            return str1 === str2;
    };

    render() {
        const { result } = this.state;

        return (
            <Layout>
                <h3>Написать программу для поиска анаграмм.</h3>
                <label>Введите первое слово</label>
                <input type='text' onChange={this.handleFirstChange} />
                <label>Введите второе слово</label>
                <input type='text' onChange={this.handleSecondChange} />
                <button onClick={this.handleClick}> Validation </button>
                <label>Результат: {result} </label>
            </Layout>
        );
    }
}

export default SearchAnagram;
