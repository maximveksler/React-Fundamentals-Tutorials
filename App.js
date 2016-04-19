import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor(){
    super();
    this.state = {data: [
      {id: 1, name: "Im no. 1"},
      {id: 2, name: "2 this is me"},
      {id: 3, name: "3 is a bit back"}
    ]}
  }

  render(){
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default App
