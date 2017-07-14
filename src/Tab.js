import React, { Component } from 'react';
import Block from './Block';
import './Tab.css';

class Tab extends Component{
  constructor(props){
    super(props)
    this.state = {topic: []}
  }

  renderTabs(){
    return(
      this.state.topics.map(topic => (
        <Tab 
        key={topic} 
        topic={topic} 
        />
      )
    ));
  }
  
  render(){
    return(
      <div className="Tab">
        <Tab />
      </div>
    )
  }
}

export default Tab;