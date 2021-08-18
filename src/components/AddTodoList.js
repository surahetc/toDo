import {Component} from "react";
import "./AddTodoList.css"

export default class AddTodoList extends Component {
  render()
  {
      const handleSubmit= event =>{ event.preventDefault();}
    return (
      <form className ="todo-form"onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter the task here"></input>
          <button className="btn blue-btn">Add</button>
      </form>
    );
  }

}


