import React from 'react';

const Item = props => {
    const handleClick = ()=>{
        props.handleToggle(props.toDo.id);
    }

    return (
        <div onClick={handleClick} className={`toDo${props.toDo.completed ? 'completed' : ''}`}>
            <p>{props.toDo.task}</p>
        </div>
    );
};

export default Item;