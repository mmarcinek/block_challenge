import React, { Component } from 'react';
import BlockItem from './BlockItem';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    var ITEMS = [
      { id: 1,
        topic: 'Embracing Discovery', 
        content: "Every creative endeavor requires that you take risks. If you try and don't succeed, you've still learned something. It took Thomas Edison more than 10,000 tries to invent a viable lightbulb. You're not failing. You're discovering what doesn't work.", 
        url: 'https://media.giphy.com/media/l0HlFFTVOQz0bKYJG/giphy.gif'
      },
      { id: 2,
        topic: 'Gaining Insight', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: ''
      },
      { id: 3,
        topic: 'Making it Real', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: 'https://media.giphy.com/media/l0HlFFTVOQz0bKYJG/giphy.gif'
      },
      { id: 4,
        topic: 'Love the work', 
        content: "Gochujang kombucha mixtape heirloom fashion axe tofu. Ennui copper mug ethical hammock literally cloud bread, four dollar toast schlitz. Literally leggings live-edge neutra.  Shoreditch post-ironic fashion axe adaptogen aesthetic retro mlkshk echo park ennui. Snackwave lyft dreamcatcher, aesthetic activated charcoal vice lomo disrupt art party.", 
        url: ''
      },
      { id: 5,
        topic: 'Have Fun', 
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