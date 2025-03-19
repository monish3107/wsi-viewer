import React from 'react';
import LeftPanel from './components/LeftPanel';
import WSIViewer from './components/WSIViewer';
import { sampleDetails } from './data';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <LeftPanel sampleDetails={sampleDetails} />
      <WSIViewer />
    </div>
  );
};

export default App;