import React, {MouseEventHandler, MutableRefObject} from 'react';
import {TodoInputStyle} from "../styled/TodoInput.styled";

function TodoInput({ newTodoInput, handleAddTodo } : {newTodoInput: MutableRefObject<undefined>, handleAddTodo: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <TodoInputStyle>
            <input className="todo-input" ref={newTodoInput} type="text" placeholder="Create a new todo..." />
            <button className="todo-submit" onClick={handleAddTodo}>+</button>
        </TodoInputStyle>
    )
}

export default TodoInput;
