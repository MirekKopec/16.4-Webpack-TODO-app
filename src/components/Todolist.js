import React from 'react';
import style from '../styles/TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <ol className={style.TodoList}>{this.props.list.map(item => ( 
                    <li className={style.liStyle} key={item.id}>
                        {item.text}
                        <button className={style.btnDelete} onClick={() => this.props.removeItem(item.id)}> x </button>
                    </li>))}
                </ol>
            </div>

        );
    }
}

export default TodoList;