import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function PatternTask4() {
    return (
        <Layout>
            <div>
                <h3> Что такое DI и IoC? </h3>
            </div>
            <label>
                DI(Dependency Injection) - это подход к передаче даннных из одного компонента для использования в другом.
                На примере React'a данные передаются от родительского к дочерним, и через все вложенности.
                В React подход DI реализован при помощи Контекста, где мы можем использовать его в одном компоненте и
                позже получать данные в другом не дочернем компонете.
                <br /> IoC (Inversion of Control) - это набор рекомендаций для написания слабо связанного кода. Суть
                которого в том, что каждый компонент системы должен быть как можно более изолированным от других, не
                полагаясь в своей работе на детали конкретной реализации других компонентов.
            </label>
        </Layout>
    )
}
