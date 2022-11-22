import React from 'react';
 
import './App.css';

import MyProjectsDashboard from './components/dashboard/MyProjectsDashboard';
import ThunkableHeader from './components/header/Header';

function App() {
  return (
    <div className="App">
      <ThunkableHeader />
      <MyProjectsDashboard />
    </div>
  );
}

export default App;
