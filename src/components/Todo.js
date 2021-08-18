import {Component} from "react";
import "./AddTodoList.css"


export default class Todo extends Component {

  render(){
   return (
      <div class="todo-item">
          <p>{this.props.description}</p>
          <button className="btn red">Done</button>
          <button className="btn red-btn">Delete</button>
      </div>
    );
  }

}


