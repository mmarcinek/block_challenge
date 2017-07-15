import React, { Component } from 'react';
import Content from './Content'
import './BlockItem.css';


class BlockItem extends Component{
  renderBlockItem(){    
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
      <div className="BlockItem">
        {this.renderBlockItem()}
      </div>
    )
  }
}
export default BlockItem;