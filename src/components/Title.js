import React from 'react';

const Title = props => 
    <div>
        <h1>{props.title}</h1>
        <p>Number of tasks: {props.count}</p>
    </div>

export default Title;