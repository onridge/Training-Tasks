import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function Task2() {
    return (
        <Layout>
            <div>
                <h3> GIT. Как влить в ветку только 1 коммит из другой ветки?</h3>
            </div>
            <label>Для этого можно использовать команду git cherry-pick 'hash commit'</label>
        </Layout>
    )
}
