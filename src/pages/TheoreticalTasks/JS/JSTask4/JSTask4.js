import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function JSTask4() {
    return (
        <Layout>
            <div>
                <h3> Есть ли разница в 2-х записях? {`const {manager = EMPTY_OBJECT} = app.decision; и
                    const manager = app.decision.manager || EMPTY_OBJECT;`}  </h3>
            </div>
            <label>
                Да, есть разница, в случае если у нас в manager пустая строка, тогда при 1-ом варианте в переменную manager запишется пустая строка,
                во втором случае в переменную запишеться EMPTY OBJECT, потому как пустая строка приравняется к false, и соответственно логическое ИЛИ
                вернет true для строки 'EMPTY OBJECT'.
            </label>
        </Layout>
    )
}
