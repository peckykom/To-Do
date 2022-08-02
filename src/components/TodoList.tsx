import React from 'react';
import Todo from "./Todo";

function TodoList({ todos, toggleTodo, deleteTodo, classNames } : {todos: any, toggleTodo: Function, deleteTodo: Function, classNames: Function}) {
    return (
        <>
            {todos.map(t => {
                return <Todo key={t.id} todo={t} toggleTodo={toggleTodo} deleteTodo={deleteTodo} classNames={classNames} />
            })}
        </>

    )
}

export default TodoList;
