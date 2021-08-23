import {Component} from "react";
import "./AddTodoList.css"
import { deleteTodo} from "../redux/actionTypes";
import { connect } from "react-redux";
import store from "../redux/store"



export default class Todo extends Component {

  render(){
   return (
      <div class="todo-item">
          <p>{this.props.description}</p>
          <button className="btn red">Done</button>
          <button className="btn red-btn" onClick={ ()=> {store.dispatch(deleteTodo(this.props.id))}}>X</button>
      </div>


    );
  }

}

connect()(Todo)


