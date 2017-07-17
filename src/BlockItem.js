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

  render(){
    return(
      <Tabs
        tabItemContainerStyle={{display: 'flex', whiteSpace: 'wrap', height: 80 + 'px'}}
        value={this.state.value}
        onChange={this.handleChange = this.handleChange.bind(this)}
      >
        <Tab className={"tabs-container" + (this.state.value === this.props.items[0].id? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[0].topic} 
             value={this.props.items[0].id}>
          <div className="tabs-content">
            {(Array.isArray(this.props.items[0].content) ? this.contentArray(this.props.items[0].content) : this.props.items[0].content)}      
            <img className="content-image" src={this.props.items[0].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === this.props.items[1].id ? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[1].topic} 
             value={this.props.items[1].id}>
          <div className="tabs-content">
            {(Array.isArray(this.props.items[1].content) ? this.contentArray(this.props.items[1].content) : this.props.items[1].content)}      
            <img className="content-image" src={this.props.items[1].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === this.props.items[2].id ? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[2].topic} 
             value={this.props.items[2].id}>
          <div className="tabs-content">
            {(Array.isArray(this.props.items[2].content) ? this.contentArray(this.props.items[2].content) : this.props.items[2].content)}      
            <img className="content-image" src={this.props.items[2].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === this.props.items[3].id ? ' tabs-active' : ' tabs-inactive')} 
             label={this.props.items[3].topic} 
             value={this.props.items[3].id}>
          <div className="tabs-content">
            {(Array.isArray(this.props.items[3].content) ? this.contentArray(this.props.items[3].content) : this.props.items[3].content)}      
            <img className="content-image" src={this.props.items[3].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === this.props.items[4].id ? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[4].topic} 
             value={this.props.items[4].id}>
          <div className="tabs-content">
            {(Array.isArray(this.props.items[4].content) ? this.contentArray(this.props.items[4].content) : this.props.items[4].content)}      
            <img className="content-image" src={this.props.items[4].url} alt=''/>
          </div> 
        </Tab>
      </Tabs>
    )
  }
}
export default BlockItem;
