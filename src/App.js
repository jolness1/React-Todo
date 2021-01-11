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
      task: 'Migrate FreeNAS to SATADOM',
      id: 1528817456399,
      completed: false
    },
    {
      task: 'Master Redux',
      id: 1528817084445620,
      completed: false
    },
    {
      task: 'Set up Couch Potato',
      id: 15288170844540,
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
          <h1>Welcome to The Gitrdone To Do List.</h1>
          <h2>GIT R DUN!</h2>
          <TodoForm handleAdd={this.handleAdd}/>
        </div>
      <TodoList handleCompleted={this.handleCompleted}
      toDo={this.state.toDo} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
