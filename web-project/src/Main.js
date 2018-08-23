import React from 'react';

import { alert, invertString } from './modules/functions';

export default class Main extends React.Component {
    componentDidMount() {
        alert('This is an alert');
    }

    render() {
        const helloReversed = invertString('hello');

        return (
            <div>


            </div>
        )
    }
};
