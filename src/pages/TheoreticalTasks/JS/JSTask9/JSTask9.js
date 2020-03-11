import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function JSTask9() {
    return (
        <Layout>
            <div>
                <h3> Пример функции-конструктор с приватным, публичным и статическим свойством. </h3>
            </div>
            <label>
                <br />{`function User (age) {`}
                <br />{`    this.age = age`}
                <br />{`    const name = 'Dima'`}
                <br />{`}`}
                <br />{`User.legs = 2`}
            </label>
        </Layout>
    )
}
