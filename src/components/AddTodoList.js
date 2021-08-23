import {Component} from "react";
import { connect } from "react-redux";
import "./AddTodoList.css";
import {addTodo} from "../redux/action"
import store from "../redux/store"

export default class AddTodoList extends Component {
  render()
  {
      const handleSubmit= event =>{ 
        event.preventDefault();
        var input=event.target.userInput.value
        if(input=="")
        {return}
        store.dispatch(addTodo(input));
        event.target.userInput.value="";
      }
    return (
      <form className ="todo-form"onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter the task here" name="userInput"></input>
          <button className="btn blue-btn">Add</button>
      </form>
    );
  }

}

connect()(AddTodoList)

