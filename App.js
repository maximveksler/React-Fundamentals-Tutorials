import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state =  {
      txt: "initial state txt",
      cat: 0
   }
   this.update = this.update.bind(this)
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    )
    // return React.createElement('h1', null, "Hello Guys")
  }
}

// statless function:
const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
      <b>Bold</b>
    </div>
  )
}

export default App
