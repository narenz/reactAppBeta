import React from 'react';
import { render } from 'react-dom';


class Hello extends React.Component {
    render() {
        return (
            <div>Hello suzhali!</div>
        )
    };
}

render(<Hello/>, document.getElementById('app'));