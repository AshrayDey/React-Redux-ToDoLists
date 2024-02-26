// Import the necessary function from Redux Toolkit for creating slices
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the todo slice
const initialState = { todos: [], completedTodos: [] };

// Create a todo slice with actions and reducers
const todoSlice = createSlice({
  name: "todo", // Name of the slice
  initialState: initialState, // Initial state of the slice
  reducers: {
    // Action for adding a new todo
    add: (state, action) => {
      // Ensure Title and Description are converted to strings before pushing to todos
      const temp = { Title: String(action.payload.title), Description: String(action.payload.description) };
      state.todos.push(temp);
    },
    // Action for deleting a todo
    deleteTodo: (state, action) => {
      // Remove the todo at the specified index
      state.todos.splice(action.payload, 1);
    },
    // Action for marking a todo as completed
    completed: (state, action) => {
      // Extract the Title property and convert it to a string for text in completedTodos
      const temp = { text: String(state.todos[action.payload]?.Title), completedOn: String(new Date()) };
      // Push the completed todo to completedTodos and remove it from todos
      state.completedTodos.push(temp);
      state.todos.splice(action.payload, 1);
    },
    // Action for deleting a completed todo
    deleteCompleted: (state, action) => {
      // Remove the completed todo at the specified index
      state.completedTodos.splice(action.payload, 1);
    },
  },
});

// Export the reducer and actions for use in other parts of the application
export const todoReducer = todoSlice.reducer;
export const todoSelector = (state) => state.todoReducer.todos;
export const completedSelector = (state) => state.todoReducer.completedTodos;
export const actions = todoSlice.actions;
