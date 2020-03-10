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
                        <CustomLink path='/patterns/task1'>
                            Паттерны и подходы
                        </CustomLink>
                        <CustomLink path='/patterns/task2'>
                            Как реализовать синглетон?
                        </CustomLink>
                        <CustomLink path='/patterns/task3'>
                            Используешь паттерн декоратор?
                        </CustomLink>
                        <CustomLink path='/patterns/task4'>
                            Что такое DI и IoC?
                        </CustomLink>
                        <CustomLink path='/react/task2'>
                            Как можно организовать связь между компонентами на одном уровне?
                        </CustomLink>
                        <CustomLink path='/js/task2'>
                            Как обмениваться информацией между вкладками?
                        </CustomLink>
                        <CustomLink path='/js/task3'>
                            Что такое критический путь рендринга?
                        </CustomLink>
                        <CustomLink path='/js/task4'>
                            Есть ли разница в 2-х записях?
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
                        <CustomLink path='/practical/task4'>
                            Есть 2 массива целый чисел (внутри одного массива все элементы уникальные). Нужно найти кол-во пересечений (одинаковых) элементов в массивах.
                        </CustomLink>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainPage;
