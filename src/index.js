import React from 'react';
import ReactDOM from 'react-dom';

const people = [
  { name : 'teja'},
  { name : 'suresh'},
  { name : 'jnani' }
]

const element = React.createElement('ol',{className:'welcome message'},
 people.map((person) => (
   React.createElement('li',{ key:person.name },person.name)
 ))
)

console.log(element)

ReactDOM.render(element,document.getElementById('root'))
