import React from 'react';

import './App.css';

import AddProjectButton from './components/buttons/AddProjectButton';
import ThunkableHeader from './components/Header';

function App() {
  return (
    <div className="App">
      <ThunkableHeader />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: '130px',
      }}
      >
        <AddProjectButton />
      </div>
    </div>
  );
}

export default App;
