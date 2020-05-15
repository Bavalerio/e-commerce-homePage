import React, { useState } from 'react';

import Card from '../card/card.component';

const useStateExample = () => {
  const [name, setName] = useState('Brayan');
  const [address, setAddress] = useState('Costa Rica');

  return (
    <Card>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <button onClick={() => setName('Arturo')}>Set Name to Arturo</button>
      <button onClick={() => setName('Panamá')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Brayan',
      address: 'Costa Rica',
    };
  }

  render() {
    return (
      <Card>
        <h1>{this.state.name}</h1>
        <button onClick={this.setState({ name: 'Arturo' })}>
          Set name to Arturo
        </button>
        <button onClick={this.setState({ address: 'Panamá' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default useStateExample;
