import {Component} from "react";
import  AddTodoList from "./components/AddTodoList";
import  TodoList from "./components/TodoList";

import "./App.css"

class App extends Component {
  render()
  {
    return (
     
        <div className="container">
          <AddTodoList/>
          <TodoList/>
      </div>


    );
  }

}

export default App;
