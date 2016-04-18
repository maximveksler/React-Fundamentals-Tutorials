import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App'

class App extends React.Component {
  render(){
    return <h1>{this.props.txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text',

}
ReactDOM.render(
  <App cat={5} OTHERtxt="this is the props text"/>,
  document.getElementById('app')
)
