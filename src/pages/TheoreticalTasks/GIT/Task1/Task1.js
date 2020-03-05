import React from 'react';
import Layout from '../../../../components/Layout/Layout'

export default function Task1() {
    return (
        <Layout>
            <div>
                <h3> GIT. Как изменить имя пользователя и email автора коммита, перед коммитом? и вернуть обратно для следующих коммитов?</h3>
            </div>
            <label>
                <br />Изменить имя пользователя можно при помощи команды git config --global user.name "Name"
                <br />Изменить email автора можно при помощи команды git config --global user.email "email@address.com"
                <br />Для проверки указанных данных можно при помощи команды git config --list
            </label>
        </Layout>
    )
}
