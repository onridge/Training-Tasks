import React from 'react';
import Layout from '../../../../components/Layout/Layout';

export default function PatternTask1() {
    return (
        <Layout>
            <div>
                <h3> Паттерны и подходы </h3>
            </div>
            <label>
                Паттерны делятся на: Структурные, Порождающие и Поведенчиские.
                <br /> К Порождающим паттернам относятся: Singleton, Factory, Abstract Factory, Builder, Prototype;
                <br /> К Структурным паттернам относятся: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy;
                <br /> К Поведенчиским паттернам относятся: Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor
                <br /> Паттерны, которые знаю и смогу назвать: Observer, Singleton, Factory, Decorator. Использую Decorator, Observer,
                Singleton. В React используется Decorator к примеру при использовании HOC. Observer при использовании redux, по сути
                мы подписываемся на изменения стора и при его изменении происходит re-render.
            </label>
        </Layout>
    )
}
