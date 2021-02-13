import React, { Component } from 'react';
import './App.css';

import ContenidoPrincipal from './componentes/js/contenido';

class App extends Component {
  render(){
    return(
      <div className="fondoprincipal">
        <ContenidoPrincipal />
      </div>);
  }
    
}

export default App;
