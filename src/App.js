import React from 'react';
import {Route} from 'react-router-dom'
import Main from './main';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Route exact path='/' component={Main}/>
      <Route exact path='/projects' component={Projects}/>
    </div>
  );
}

export default App;
