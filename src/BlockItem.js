import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import './BlockItem.css';

class BlockItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: props.items[0].id,
    };
  }

  handleChange(value){
    this.setState({
      value: value,
    });
  };

  contentArray(contents){
    return(
      contents.map(content => (
        <p key={content}>{content}</p>
      ))
    ) 
  }

  renderBlockItem(){  
    return(
      this.props.items.map(item =>(
        <Tabs key={item.id} 
              value={this.state.value}
              onChange={this.handleChange = this.handleChange.bind(this)}>
          <Tab buttonStyle={{flexDirection:'row'}} className={"tabs-container" + (this.state.value === item.id ? ' tabs-active' : ' tabs-inactive')} 
               label={item.topic} 
               value={item.id}>
            <div className="tabs-content">
              {(Array.isArray(item.content) ? this.contentArray(item.content) : item.content)}      
              <img src={item.url} alt=''/>
            </div>
          </Tab>
        </Tabs>
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
