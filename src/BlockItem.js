import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import './BlockItem.css';


class BlockItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange(value){
    this.setState({
      value: value,
    });
  };

  renderBlockItem(){    
    return(
      this.props.items.map(item =>(
        <Tabs
          value={this.state.value}
          onChange={this.handleChange = this.handleChange.bind(this)}
        >
          <Tab label={item.topic} value={item.id}>
            <div>  
              <p>
                {item.content}
              </p>
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