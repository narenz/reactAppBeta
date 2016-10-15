import React from 'react';
import { render } from 'react-dom';

const Hello = () => (
    <div> Hey world </div>
);

render(<Hello/>, document.getElementById('app'));