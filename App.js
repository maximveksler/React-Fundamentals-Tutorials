import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    )
    // return React.createElement('h1', null, "Hello Guys")
  }
}

// statless function:
//const App = () => <h1>Hello Eggheads</h1>

export default App
