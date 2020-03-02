import React from 'react';
import Layout from "../../../components/Layout/Layout";

class DelegationEvent extends React.PureComponent{
        state = {};
        ulRef = React.createRef();


    componentDidMount () {
        const ul = this.ulRef.current;

        ul.addEventListener('click', this.addSign);
    }

    componentWillUnmount() {
        const ul = this.ulRef.current;

        ul.removeEventListener('click', this.addSign);
    }

    addSign = (event) => {
        event.target.innerHTML = event.target.innerHTML + '!';
    };

    onClickHandler = (event) => {
        const { num } = event.target.dataset;

        this.setState({ num })
    };

    render() {
        const { num } = this.state;
        return (
            <Layout>
                <div>
                    <h3>Реализовать пример делегирование событий на VanillaJS и ReactJS.</h3>
                </div>
                <div>
                    <ul onClick={this.onClickHandler}>
                        <li data-num="1">1</li>
                        <li data-num="2">2</li>
                        <li data-num="3">3</li>
                        <li data-num="4">4</li>
                    </ul>
                </div>
                <label>Цифра по которой осущиствлялось нажатие: {num}</label>
                <div>
                    <ul ref={this.ulRef}>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </div>
            </Layout>
        );
    }
}

export default DelegationEvent;
