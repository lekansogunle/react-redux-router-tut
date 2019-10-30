## Steps
* Follow  https://redux.js.org/basics/basic-tutorial to build a redux todo.
* Add `react-router-dom` to your project using `npm install react-router-dom`.
* Create two componenrts `DoneTodo` and `UndoneTodo`. You can copy in the cotents of `containers/VisibleTodoList`. For DoneTodo we only want to return completed todos from the function `getVisibleTodos` and for UndoneTodo we return uncompleted todos. Clean up unused import modules and variables.
* In `component/App.js` we want to import router as in https://reacttraining.com/react-router/web/guides/quick-start/1st-example-basic-routing
* We then add in Router as in `src/components/App.js:L15`. Here we create a persistent nav across the App. Then link to Home(/), Done(/done), Undone(/undone). For each of these routes we render the correspoonding component. Note that in the route linking to home we have all the required three components `AddTodo`, `VisibleTodoList`, `Footer`.