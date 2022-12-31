import React from 'react';
import './style/App.css';
import { Container } from 'react-bootstrap';
import Landing from './components/landing';

function App() {
  return (
    <Container className='App' fluid>
        <Landing />
    </Container>
  );
}

export default App;
