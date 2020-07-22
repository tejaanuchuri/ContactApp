import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactList extends Component {
  render() {
    const people = [
      { name : 'teja'},
      { name : 'suresh'},
      { name : 'jnani' }
    ]

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}
console.log(ContactList)

ReactDOM.render(<ContactList />,document.getElementById('root'))
