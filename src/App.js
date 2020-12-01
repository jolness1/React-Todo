import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'


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
      task: 'Develop a Million Dollar app',
      id: 1528817084420,
      completed: false
    },
    {
      task: 'Stop Being Trash at Programming',
      id: 1528817084710,
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
      toDo: [...this.state.toDo, { task: task, id: Date.now(), completed:false }]
    })
  }

  handleCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter(toDo=>(!toDo.completed))
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>This is the Shit you NEED to get done.</h1>
          <h2>Stop Putting it Off!</h2>
          <TodoForm handleAdd={this.handleAdd}/>
        </div>
      <TodoList handleCompleted={this.handleCompleted}
      toDo={this.state.toDo} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
