import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui-scrollable-tabs/Tabs';
import './BlockItem.css';

class BlockItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.goFullscreen = this.goFullscreen.bind(this);
  }

  handleChange(value){
    this.setState({
      value: value.props.index,
    });
  };

  contentArray(contents){
    return(
      contents.map(content => (
        <p key={content}>{content}</p>
      ))
    ) 
  }

  goFullscreen(image) {
    let element = this.refs[image];
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
   }
  }
  
  render(){
    return(
        <Tabs
          className="scroll-tab"
          tabType={'scrollable-buttons'}
          value={this.state.value}
        >
        <Tab className={"tabs-container" + (this.state.value === 0 ? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[0].topic} 
             onActive={this.handleChange = this.handleChange.bind(this)}
             >
          <div className="tabs-content">
            {(Array.isArray(this.props.items[0].content) ? this.contentArray(this.props.items[0].content) : this.props.items[0].content)}      
            <img ref="image" onClick={() => this.goFullscreen("image")} className="content-image" src={this.props.items[0].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === 1 ? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[1].topic} 
             value={this.props.items[1].id}
             onActive={this.handleChange = this.handleChange.bind(this)}
             >
          <div className="tabs-content">
            {(Array.isArray(this.props.items[1].content) ? this.contentArray(this.props.items[1].content) : this.props.items[1].content)}      
            <img ref="image-1" onClick={() => this.goFullscreen("image-1")} className="content-image" src={this.props.items[1].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === 2 ? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[2].topic} 
             value={this.props.items[2].id}
             onActive={this.handleChange = this.handleChange.bind(this)}
             >
          <div className="tabs-content">
            {(Array.isArray(this.props.items[2].content) ? this.contentArray(this.props.items[2].content) : this.props.items[2].content)}      
            <img ref="image-2" onClick={() => this.goFullscreen("image-2")} className="content-image" src={this.props.items[2].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === 3 ? ' tabs-active' : ' tabs-inactive')} 
             label={this.props.items[3].topic} 
             value={this.props.items[3].id}
             onActive={this.handleChange = this.handleChange.bind(this)}
             >
          <div className="tabs-content">
            {(Array.isArray(this.props.items[3].content) ? this.contentArray(this.props.items[3].content) : this.props.items[3].content)}      
            <img ref="image-3" onClick={() => this.goFullscreen("image-3")} className="content-image" src={this.props.items[3].url} alt=''/>
          </div> 
        </Tab>
        <Tab className={"tabs-container" + (this.state.value === 4 ? ' tabs-active' : ' tabs-inactive')}
             label={this.props.items[4].topic} 
             value={this.props.items[4].id}
             onActive={this.handleChange = this.handleChange.bind(this)}
             >
          <div className="tabs-content">
            {(Array.isArray(this.props.items[4].content) ? this.contentArray(this.props.items[4].content) : this.props.items[4].content)}      
            <img ref="image-4" onClick={() => this.goFullscreen("image-4")} className="content-image" src={this.props.items[4].url} alt=''/>
          </div> 
        </Tab>
      </Tabs>
    )
  }
}
export default BlockItem;