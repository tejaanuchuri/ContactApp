import React from 'react';
import ReactDOM from 'react-dom';

const people = [
  { name : 'teja'},
  { name : 'suresh'},
  { name : 'jnani' }
]

const element = <ol>
   {people.map((person) => (
     <li key={person.name}>{person.name}</li>
   ))}
</ol>
console.log(element)

ReactDOM.render(element,document.getElementById('root'))
