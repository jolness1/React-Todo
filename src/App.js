import React from 'react';
import ReactDom from 'react-dom'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'



const toDo = [
  
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'Set up Esxi',
      id: 1528817084399,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084420,
      completed: false
    }
  
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {toDo}
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleToggle = (itemID)=> {
    this.setState({
      toDo: this.state.toDo.map(item=>{
        if(itemID === item.id) {
          return({
            ...item,
            completed: !item.completed
          });
        }else {
          return(item);
        }
      })
    });
  }

  handleAdd = task => {
    this.setState({
      toDo: [...this.state.toDo, { task: task, id: Date.now(), completed:false}]
    })
  }
  
  
  render() {
    return (
      <div>
        <h1>This is the Shit you NEED to get done.</h1>
      </div>
    );
  }
}

export default App;
