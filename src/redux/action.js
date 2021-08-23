import * as action  from "./actionTypes";
var countId=3;


export function addTodo(description)
{
    countId++;
    return {
        type:action.addTodo,
        payload:
        {
            id:countId,
            description
        }
    }
}

export function deleteTodo(id)
{
    return {
        type:action.deleteTodo,
        payload:
        {
            id
        }
    }
}


export function doneTodo(id)
{
    return {
        type:action.doneTodo,
        payload:
        {
            id
        }
    }
}