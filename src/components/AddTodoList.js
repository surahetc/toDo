import {Component} from "react";

export default class AddTodoList extends Component {
  render()
  {
      const handleSubmit= event =>{ event.preventDefault();}
    return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter the todo task"></input>
          <button>Add</button>
      </form>
    );
  }

}


