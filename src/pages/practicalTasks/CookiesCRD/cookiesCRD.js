import React from 'react';
import Layout from '../../../components/Layout/Layout';

export default class cookiesCRD extends React.PureComponent{
    state = {};

   createCookies = (name, value, expires, path, domain, secure) => {
       document.cookie = name + '=' + escape(value) +
           (expires ? '; expires=' + expires : '') +
           (path ? '; path=' + path : '') +
           (domain ? '; domain=' + domain : '') +
           (secure ? '; secure' + secure : '')
    };

    getCookies = (name) => {
        const cookie = " " + document.cookie;
        const search = " " + name + "=";
        let setStr;
        let offset = 0;
        let end = 0;
        if (cookie.length > 0) {
            offset = cookie.indexOf(search);
            if (offset != -1) {
                offset += search.length;
                end = cookie.indexOf(";", offset);
                if (end == -1) {
                    end = cookie.length;
                }
                return setStr = decodeURI(cookie.substring(offset, end));
            }
        }
        return setStr;
    };

    deleteCookies =(name) => this.createCookies(name, '', -1);

    handleClickGet = () => this.setState( {value: this.getCookies('name') });

    handleClickDelete = () => this.deleteCookies('name');

    render() {
        const { value } = this.state;
        return (
            <Layout>
                <div>
                    <button onClick={this.createCookies}>Create Cookies</button>
                </div>
                <div>
                    <button onClick={this.handleClickGet}>Get Cookies</button>
                    <label>{value}</label>
                </div>
                <div>
                    <button onClick={this.handleClickDelete}>Delete Cookies</button>
                </div>
            </Layout>
        );
    }
}
