import React, { Component } from 'react';
import BlockItem from './BlockItem';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    var ITEMS = [
      { id: 1,
        topic: 'Embracing Discovery', 
        content: ["Wow, I am definitely a React.js convert! Honestly, this is the first project I have built in React(outside of some really interesting reading) and it was quite a joy to experience.",
        "I feel like this gif accurately describes how I data moves through React via importing and extension of state and props from related components:"],
        url: 'https://media.giphy.com/media/l0HlFFTVOQz0bKYJG/giphy.gif'
      },
      { id: 2,
        topic: 'Gaining Insight', 
        content: ["Take a look at the branch called 'tabs' on this repo. Here, I tried to dynamically generate the tabs and content through a fun functional map, spoiler alert, it failed to render properly. I really want to figure out how to solve the problem I was encountering with this methodology and have a guess.",
        "To save time, I used npm to install material-ui for react, and well, by adding a <div> into the JSX render block, I am guessing the DOM node index is off for material-ui's tab mapping, so the flex container will not change direction to row and stacks vertically.",
        "I am going to try breaking down the Tabs components into smaller parts instead of mapping the Tabs as one component, this will not solve my issue with node indexes, but hopefully it will make the custom CSS required to hack material-ui a bit more sane.",
        "Hopefully you like what you see, and we will have a chance to talk about it, I am really looking forward to hearing and appyling feedback from a more experienced React developer. :)"
        ], 
        url: ''
      },
      { id: 3,
        topic: 'Making it Real', 
        content: ["Yes, I love to write code! I find programming to be challenging, fun, and greatly rewarding!",
        "I am also a visual artist, and that is what I studied in college. I really love photography, film(as in motion pictures, and yes, I still shoot film for stills as well as digital!), and printmaking. I like objects that are reproducable, I guess that is why I like programming too.",
        "Most of my subject matter is related to the landscape and are serial documentary images. Here is an image from Boomtown, Pinedale Wyoming:"
        ], 
        url: 'http://payload201.cargocollective.com/1/11/363447/6328729/boomtown%202%20small.jpg'
      },
      { id: 4,
        topic: 'Love the gifs', 
        content: ["Did you all say Gif's? I absolutely love them! And well, cats!",
        "Need I say more?"], 
        url: 'http://www.somepets.com/wp-content/uploads/2013/09/hilarious-cat-gifs4.gif'
      },
      { id: 5,
        topic: 'Have Fun', 
        content: ["And lots of coffee!", 
        "I really enjoyed this challenge. It was really fun to play around in a different JavaScript Library for a while, especially one that is so well tuned for ES6!",
        "I definitely could see getting a great dal of enjoyment out of learning React better, and really look forward to doing so."],
        url: 'https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/q0r7xIVMCo4RkD5A.gif'
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
