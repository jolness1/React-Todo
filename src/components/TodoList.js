// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Item from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.toDo.map(toDo => (
                <Item key={toDo.id} toDo={toDo} handleToggle={props.handleToggle}/>
            ))}
            <button onClick={props.handleCompleted}
            className="clear-btn">
                Clear Completed Items
            </button>
        </div>
    );
};


export default TodoList;






