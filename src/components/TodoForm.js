import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            textInput:""
        }
    }

    handleChanges = e => {
        this.setState({
            textInput: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.textInput);
        this.setState({
            textInput:""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.textInput} onChange={this.handleChanges} defaultValue="Type what you need to get done" type="text" task="task"/>
                <button>Add to List</button>
            </form>
        );
    }
}

export default TodoForm;