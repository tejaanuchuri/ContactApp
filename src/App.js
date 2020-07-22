import React, { Component } from 'react';
class ContactList extends Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
          <ContactList contacts={[
           { name : 'teja'},
           { name : 'suresh'},
           { name : 'jnani'}
          ]} />
          <ContactList contacts={[]} />
      </div>
    );
  }
}

export default App;
