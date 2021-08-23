

var initialState={
    data:[
        // {id:1,description:"Walking",completed:false},
        // {id:2,description:"Eating",completed:false},
        // {id:3,description:"Sleeping",completed:false}
    ]
}

    // var countId=3;

export default function Todos (state=initialState,action)
{
    switch(action.type)
    {
        case "addTodo":
            {
            return {...state,data:[...state.data,{id:action.payload.id,description:action.payload.description,completed:false}]}
            }

            
        case "deleteTodo":
        const todos=state.data.filter((todo)=>todo.id !== action.payload.id);
        return {
            ...state,data:todos

    }
        default: return state
    }
}