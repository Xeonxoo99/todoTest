import React, { useState } from 'react';
import './App.css';

function App() {
    const [list, setList] = useState([
        { id: 1, todo: '리액트를 배우자' },
        { id: 2, todo: '리덕스를 배우자' },
    ]);

    const [todo, setTodo] = useState('');

    const todoChangeHandler = (event) => {
        setTodo(event.target.value);
    };

    const addBtnHandler = () => {
        const newTodo = {
            id: list.length + 1,
            todo: todo,
        };

        setList([...list, newTodo]);
    };

    return (
        <div className="Layout">
            <div>
                <input value={todo} onChange={todoChangeHandler} />
                <button onClick={addBtnHandler}>추가하기</button>
            </div>
            <h2>Todo List</h2>
            <div className="TodoContainer">
                {list.map(function (item) {
                    return (
                        <div key={item.id} className="TodoBox">
                            {item.todo}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
