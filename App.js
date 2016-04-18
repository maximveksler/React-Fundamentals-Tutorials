import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state =  {
      txt: "this is the state txt",
      cat: 0
   }
  }

  maxSupdate(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <input type="text"
          onChange={this.maxSupdate.bind(this)} />
        <h1>{this.state.txt}</h1>
        <b>Bold</b>
      </div>
    )
    // return React.createElement('h1', null, "Hello Guys")
  }
}

// statless function:
//const App = () => <h1>Hello Eggheads</h1>

export default App
