import React, { Component } from 'react';
import NewDino from './NewDino';

class AddDinoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <NewDino />
     );
  }
}
 
export default AddDinoList;