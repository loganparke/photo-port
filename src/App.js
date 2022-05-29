import React from 'react';
import Nav from './components/nav/index.js';
import About from './components/about/index.js';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />        
      </main>
    </div>
  );
}

export default App;
