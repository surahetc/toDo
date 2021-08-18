import {Component} from "react";
import Todo from "./Todo"

export default class TodoList extends Component {
    constructor()
    {
        super();
        this.state={todos:[
            {id:1,description:"Walking",completed:false},
            {id:1,description:"Eating",completed:false},
            {id:1,description:"Sleeping",completed:false}]
        }
    }
  render()
  {
    return (
        <div>
                      
       <Todo description={this.state.todos[0].description}/>
      <Todo description={this.state.todos[1].description}/>
      <Todo description={this.state.todos[2].description}/> 
        </div>

    )


  }

}


