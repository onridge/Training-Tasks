import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function Task4() {
    return (
        <Layout>
            <div>
                <h3> GIT. Как смотреть историю коммитов? </h3>
            </div>
            <label>
                При использовании IDE Webstorm историю коммитов можно посмотреть нажав на нижней панели вкладку Version Control
                и выбрать вкладку Log. Ниже будет отображено дерево коммитов с названием, датой, и человеком сделавшим коммит.
                При выборе конкретного коммита, в правой части будут отображены все измененные файлы, при двойном нажатии на
                любой из них откроется окно в котором будут отображаться все изменения сделанные в этом файле.
                <br /> Также можно узнать историю изменений файла, необходимо открыть нужный файл, в IDE нажать ПКМ выбрать раздел GIT
                и после этого пункт Show History. Внизу откроется список изменений с указанием автора, датой и временем, и названием комита.
                При выборе одного из вариантов будут показаны изменения сделаны в этом файле.
            </label>
        </Layout>
    )
}
