

import { deleteTodo} from "../redux/actionTypes";
import { connect } from 'react-redux'
import Todo from './Todo'
const TodoList=(props)=>
{
  return (
    <div>
      {
        props.todos.map((todo,index)=>(
          <div>
          <Todo key={index} description={todo.description} id={todo.id}/>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps=(state)=>({
  todos:state.todos.data

})
export default connect(mapStateToProps)(TodoList)





// import {Component} from "react";
// import Todo from "./Todo"
// import store from "../redux/store"
// import { connect } from "react-redux"




// export default class TodoList extends Component {

  

//   render()
//   {
//     return (



//       <Todo description={store.state.data[0].description}/>
//       //   <div>
//       //     {/* {this.state.todos.map((item,index) => {
//       //       return <Todo description={item.description} key={index}/>
//       //     })} */}
                      
//       //  {/* <Todo description={this.state.todos[0].description}/>
//       // <Todo description={this.state.todos[1].description}/>
//       // <Todo description={this.state.todos[2].description}/>  */}
//       //   </div>

//       // <div>
//       //    {store.todos.data.map((item,index) => {
//       //       return <Todo description={item.description} key={index}/>})}
//       // </div> 

      


        

//   


//   }

// }


// connect()(TodoList)

// import { connect } from 'react-redux'
// const TodoList=(props)=>
// {
//   return (
//     <ul>
//       {
//         props.todos.map((todo,index)=>(
//           <li key={index}>{todo.description}</li>
//         ))}
//     </ul>
//   );
// };

// const mapStateToProps=(state)=>({
//   todos:state.todos.data

// })
// export default connect(mapStateToProps)(TodoList)

