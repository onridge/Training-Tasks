import React from 'react';
import CustomLink from '../../components/CustomLink/CustomLink';
import styles from './MainPage.css';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.description}>
                    <h2> Theoretical Tasks </h2>
                </div>
                <div>
                    <ul className={styles.list}>
                        <CustomLink path='/git/task1'>
                            GIT. Как изменить имя пользователя и email автора коммита, перед коммитом? и вернуть обратно для следующих коммитов?
                        </CustomLink>
                        <CustomLink path='/git/task2'>
                            GIT. Как влить в ветку только 1 коммит из другой ветки?
                        </CustomLink>
                        <CustomLink path='/git/task3'>
                            GIT. Как отменить коммит? Как объединить коммиты в один?
                        </CustomLink>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainPage;
