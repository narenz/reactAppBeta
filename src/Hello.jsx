import React from 'react';
import { render } from 'react-dom';

const Hello = (props) => (
    <div> Hey {props.name} </div>
);

render(<Hello name='world'/>, document.getElementById('app'));