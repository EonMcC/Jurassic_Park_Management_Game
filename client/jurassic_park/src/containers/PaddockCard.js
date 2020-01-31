import React, { Component } from 'react';
import DinoList from '../components/paddockCard/DinoList';

class PaddockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <p>I'm a PaddockCard</p>
        <DinoList />
      </>
     );
  }
}
 
export default PaddockCard;