import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function Task5() {
    return (
        <Layout>
            <div>
                <h3> GIT. Как временно убрать изменения в git? </h3>
            </div>
            <label>
                Убрать сделанные изменения для перехода на другую ветку можно при помощи команды git stash или при использовании
                IDE через вкладку VCS - раздел GIT - пункт Stash Changes.
            </label>
        </Layout>
    )
}
