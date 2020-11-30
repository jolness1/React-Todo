import React from "react";
import Item from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.toDo.map(item => (
                <Item key={item.id} item={item} handleToggle={props.handleToggle}/>
            ))}
            <button onClick={props.handleToggle}
            className="clear-btn">
                Clear Completed Items
            </button>
        </div>
    );
};


export default TodoList;







// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js