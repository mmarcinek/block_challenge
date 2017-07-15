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
    this.state = {
      value: 'a',
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
        onChange={this.handleChange}
      >
        <Tab label={this.props.topic} value={this.props.topic}>
          <div>
            <h2 style={styles.headline}>{this.props.topic}</h2>
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