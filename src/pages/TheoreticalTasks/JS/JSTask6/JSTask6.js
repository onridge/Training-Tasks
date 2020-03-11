import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function JSTask6() {
    return (
        <Layout>
            <div>
                <h3> Для чего используют Object.create(null)? Что делает эта команда? </h3>
            </div>
            <label>
                Object.create(null) - используется для того чтобы создать легкий объект, в котором будут отсутствовать
                методы объекта. Метод Object.create() в качестве аргументов принимает prototype родителя, это
                необходимо при наследовании, чтобы дочернний объект мог получить методы родителя.
            </label>
        </Layout>
    )
}
