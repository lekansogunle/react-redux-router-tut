import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DoneTodo from '../containers/DoneTodo'
import UndoneTodo from '../containers/UndoneTodo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/done">Done</Link>
          </li>
          <li>
            <Link to="/undone">Undone</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/undone">
          <UndoneTodo />
        </Route>
        <Route path="/done">
          <DoneTodo />
        </Route>
        <Route path="/">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App