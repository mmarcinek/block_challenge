import React, { Component } from 'react';
import './Content.css';



class Content extends Component{
  render(){
    return(
      <div className="Content">
        <div>{this.props.topic}</div>
        <div>{this.props.content}</div>
        {/* <img href={this.props.url} alt="content"/> */}
      </div>
    )
  }
}

export default Content;