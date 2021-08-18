import {Component} from "react";

export default class Todo extends Component {

  render(){
   return (
      <div >
          <p>{this.props.description}</p>
          <input type="checkbox"></input>
          <button>Delete</button>
      </div>
    );
  }

}


