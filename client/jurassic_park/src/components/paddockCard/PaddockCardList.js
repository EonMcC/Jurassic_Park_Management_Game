import React, { Component } from 'react';
import PaddockCard from './PaddockCard';

class PaddockCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <PaddockCard />
     );
  }
}
 
export default PaddockCard;