import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Learn React",
            completed: true,
        },
    ]);
    const addTodo = (text) =>
        setTodos((prev) => [...prev, {id: uuidv4(), completed: false, text}]);

    const values = {
        todos,
        setTodos,
        addTodo,
    }

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};

export const useTodo = () => {
    const context = useContext(TodoContext);

    if(context === undefined){
        throw new Error('useTodo hook must be call inside TodoProvider component')
    }
    return context;
}