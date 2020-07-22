import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('ol',{className:'welcome message'},
 React.createElement('li',null,'Teja'),
 React.createElement('li',null,'suresh'),
 React.createElement('li',null,'jnani')
)

console.log(element)

ReactDOM.render(element,document.getElementById('root'))
