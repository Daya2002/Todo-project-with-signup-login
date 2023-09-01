export const addTodo = (data) =>{
    // console.log(data)
    return {
        type:'ADD_TODO',
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }

}
export const deleteTodo =(id) =>{
    return {
        type:'DELETE_TODO',
        id:id
    }
}
export const removeAllTodo =() =>{
    return {
        type:'REMOVEALL_TODO'
    }
}