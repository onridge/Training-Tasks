import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import ElementList from "../../../../components/ElementList/ElementList";
import { objectCreate, newAssign, newPromiseAll, newBind, myNew } from "./polyfill";

export default function JSTask10() {
    return (
        <Layout>
            <div>
                <h3> Полифилы </h3>
            </div>
            <ul>
                <ElementList description='Object.create'>
                    <plaintext>
                        {objectCreate.toString()}
                    </plaintext>
                </ElementList>
                <ElementList description='bind'>
                    <plaintext>
                        {newBind.toString()}
                    </plaintext>
                </ElementList>
                <ElementList description='new'>
                    <plaintext>
                        {myNew.toString()}
                    </plaintext>
                </ElementList>
                <ElementList description='Promise.all'>
                    <plaintext>
                        {newPromiseAll.toString()}
                    </plaintext>
                </ElementList>
                <ElementList description='Object.assign'>
                    <plaintext>
                        {newAssign.toString()}
                    </plaintext>
                </ElementList>
            </ul>
        </Layout>
    )
}
