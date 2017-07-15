import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import './Content.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Content extends Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      value: [0],
    };
  }
    

  handleChange(value){
    this.setState({
      value: value,
    });
  };

  render(){
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange = this.handleChange.bind(this)}
      >
        <Tab label={this.props.topic} value={this.props.topic}>
          <div>
            <p>
              {this.props.content}
            </p>
          </div>
        </Tab>
      </Tabs>
      );
  }
}


export default Content;