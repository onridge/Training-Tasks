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
                        <CustomLink path='/git/task4'>
                            GIT. Как смотреть историю коммитов?
                        </CustomLink>
                        <CustomLink path='/git/task5'>
                            GIT. Как временно убрать изменения в git?
                        </CustomLink>
                        <CustomLink path='/network/task1'>
                            Отличия get запроса от post?
                        </CustomLink>
                        <CustomLink path='/js/task1'>
                            Как сравнить объекты в js? Один из самых простых способов? Какое сравнение реализовано в PureComponent?
                        </CustomLink>
                        <CustomLink path='/react/task1'>
                            Как можно управлять обновлением компонента в React?
                        </CustomLink>
                    </ul>
                </div>
                <div className={styles.description}>
                    <h2> Practical Tasks </h2>
                </div>
                <div>
                    <ul className={styles.list}>
                        <CustomLink path='/practical/task1'>
                            Отличие localStorage от sessionStorage? Написать функции для работы со storage
                        </CustomLink>
                        <CustomLink path='/practical/task2'>
                            Написать функции чтения/записи/очистки кук на VanillaJS.
                        </CustomLink>
                        <CustomLink path='/practical/task3'>
                            Реализовать пример делегирование событий на VanillaJS и ReactJS.
                        </CustomLink>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainPage;
