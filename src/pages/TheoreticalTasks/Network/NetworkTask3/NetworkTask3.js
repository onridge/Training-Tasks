import React from 'react';
import Layout from '../../../../components/Layout/Layout';

function retrier(url, countRetry) {
    return fetch(url).then(res => {
        if(res.ok){
            return res
        }
        if(countRetry){
            return retrier(url, countRetry - 1)
        }
        throw res.error
    })
}

export default function NetworkTask3() {
    return (
        <Layout>
            <label>
                <h3>Написать функцию, которая делает запрос на сервер и в случае неуспеха повторяет его</h3>
                <plaintext>{retrier.toString()}</plaintext>
            </label>
        </Layout>
    )
}
