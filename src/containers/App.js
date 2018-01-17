import React from 'react';
import style from '../styles/App.css';
import Title from '../components/Title.js';
import Todolist from '../components/TodoList.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    id: 1,
                        text: 'clean room'
                    }, {
                    id: 2,
                        text: 'wash the dishes'
                    }, {
                    id: 3,
                        text: 'feed my cat'
                  }]
        };
    }
    
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title = 'To do list'
                    count = {this.state.data.length}
                />
                <Todolist list = {this.state.data}
                    removeItem = {this.removeTodo.bind(this)}
                />
            </div>
        );
    }
}
export default App;