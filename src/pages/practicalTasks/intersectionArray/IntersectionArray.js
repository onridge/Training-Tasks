import React from 'react';
import Layout from '../../../components/Layout/Layout';
import styles from './IntersectionArray.css';

class IntersectionArray extends React.PureComponent{

    state={};

    handleChangeFirstArray = (event) => {
        const { value } = event.target;

        this.setState({ firstValue: value })
    };

    handleChangeSecondArray = (event) => {
        const { value } = event.target;

        this.setState({ secondValue: value })
    };

    handleClick = () => {
        const { firstValue, secondValue } = this.state;
        const firstArray = firstValue.split(',');
        const secondArray = secondValue.split(',');

        this.setState({ result: this.intersection(firstArray, secondArray).toString() });
    };

    intersection = (array1, array2) => {
        const hashmap = {};
        const intersectionArray = [];

        array1.forEach((element)=>{
            hashmap[element] = 1;
        });

        array2.forEach((element) => {
            if (hashmap[element] === 1) {
                intersectionArray.push(element);
                hashmap[element]++;
            }
        });

        return intersectionArray;
    };

    render() {
        const { result } = this.state;
        return (
            <Layout>
                <h3>Найти пересечение в 2-х массивах</h3>
                <div className={styles.container}>
                    <label>Введите числа в поля ввода через запятую</label>
                    <input type='text' onChange={this.handleChangeFirstArray} />
                    <input type='text' onChange={this.handleChangeSecondArray} />
                    <button onClick={this.handleClick}> Find Intersection </button>
                    <label>Одинаковые элементы в массивах: {result} </label>
                </div>
            </Layout>
        );
    }
}

export default IntersectionArray;
