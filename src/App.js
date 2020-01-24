import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddToDo from "./components/AddToDo";
import uuid from "uuid";
import About from "./components/pages/About";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "take out trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "dinner with wife",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Meeting boss",
        completed: false
      }
    ]
  };

  addTodo = title => {
    const newTodos = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodos]
    });
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="contai">
            <Header />
            <Route
              excat
              path="/"
              render={props => (
                <React.Fragment>
                  <AddToDo addTodo={this.addTodo} />{" "}
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />{" "}
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>{" "}
        </div>
      </Router>
    );
  }
}

export default App;
