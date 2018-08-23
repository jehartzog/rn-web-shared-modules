import React from 'react';

import { alert, invertString } from './modules/functions';
import FancyText from './modules/fancy-text';

export default class Main extends React.Component {
    componentDidMount() {
        alert('This is an alert');
    }

    render() {
        const helloReversed = invertString('hello');

        return (
            <div>
                <FancyText>{helloReversed}</FancyText>
            </div>
        )
    }
};
