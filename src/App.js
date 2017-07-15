import React, { Component } from 'react';
import BlockItem from './BlockItem';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
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
      <MuiThemeProvider>
        <div className="App">
          <BlockItem items={ITEMS} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;