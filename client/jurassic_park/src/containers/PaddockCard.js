import React, { Component } from 'react';
import DinoList from '../components/paddockCard/DinoList';

class PaddockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="paddock-card">
        <p>I'm a PaddockCard</p>
        <DinoList />
      </div>
     );
  }
}
 
export default PaddockCard;