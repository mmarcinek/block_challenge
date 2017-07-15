import React, { Component } from 'react';
import Tabs from './Tabs';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {items: []};
  }
  
  render() {
    var ITEMS = [
      { topic: 'Tab 1', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: 'https://media.giphy.com/media/l0HlFFTVOQz0bKYJG/giphy.gif'
      },
      { topic: 'Tab 2', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: ''
      },
      { topic: 'Tab 3', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: 'https://media.giphy.com/media/l0HlFFTVOQz0bKYJG/giphy.gif'
      },
      { topic: 'Tab 4', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: ''
      },
      { topic: 'Tab 5', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: ''
      }
    ]

    return (
      <div className="App">
        <Tabs items={ITEMS} />
      </div>
    );
  }
}

export default App;