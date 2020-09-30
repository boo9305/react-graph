import React from 'react';
import logo from './logo.svg';
import MyGraph from './MyGraph';

function App() {
  return (
    <div className="App">
        <MyGraph id="g1" width="300" height="300"></MyGraph>
        <MyGraph id="g2" width="700" height="300"></MyGraph>
    </div>
  );
}

export default App;
