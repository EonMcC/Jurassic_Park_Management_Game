import React, { Component } from 'react';
import Dino from './Dino';

class DinoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <p>I'm the DinoList</p>
        <Dino />
      </>
     );
  }
}
 
export default DinoList;