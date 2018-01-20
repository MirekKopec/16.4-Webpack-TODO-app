import React from 'react';
import style from '../styles/TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    event.preventDefault();
    }

    render() {
        return(
            <div className={style.formStyle}>
                Add Task to the list:
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input className={style.btnSubmit} type="submit" value="Add Task..." onClick={() => this.props.addTodo(this.state.value)}/>
                </form>
            </div>
        );
    }

}

export default TodoForm;