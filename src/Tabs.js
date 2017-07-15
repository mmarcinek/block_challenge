import React, { Component } from 'react';
import Content from './Content'
import './Tabs.css';


class Tabs extends Component{
  constructor(props){
    super(props);
  }

  renderTabs(){    
    return(
      this.props.items.map(item =>(
        <Content
          key={item.topic}
          topic={item.topic}
          content ={item.content}
          url = {item.url}
        />
      ))
    );
  }

  render(){
    return(
      <div className="Tabs">
        {this.renderTabs()}
      </div>
    )
  }
}
export default Tabs;