import React from 'react';
import Layout from '../../../components/Layout/Layout';

export default function Task3() {
    return (
        <Layout>
            <div>
                <h3> GIT. Как отменить коммит? Как объединить коммиты в один? </h3>
            </div>
            <label>
                <br />Отменить коммит и создать новый можно при помощи команды git revert "hash commit"
                <br />Отменить изменения сделанные в коммите можно используя git reset --hard "hash commit"
                <br />Можно использовать git rebase --interactive установить флаг у первого комита pick, у остальных, которые необходимо объеденить - флаг squash
                <br />Пушить необходимо командой git push --force.
            </label>
        </Layout>
    )
}
