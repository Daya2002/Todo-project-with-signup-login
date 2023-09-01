import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodo } from "../actions/todosAction";
import axios from "axios";
import './Todo.css'
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToLogin =()=>{
    navigate('/Login')
  }
  const list = useSelector((state) => state.todoReducer.list);

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [gettedTodo, setGattedTodo]=useState([])
  
  const todoData = () =>  { axios.get('http://localhost:4000/api/v1/getTodo' )
  .then(res=>{
    setGattedTodo(res.data)    // console.log(res.data)
  })
  .catch(err =>{
    console.log("err whilegetting todo:" + err);
  })}

  useEffect(() => {
    todoData()
  }, [])

  
//   const titles = gettedTodo.map(item => item._id);

// console.log(titles);

  const todoHandler = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const addTodoDataInDb = () => {
    axios
      .post("http://localhost:4000/api/v1/createTodo", todo)
      .then((res) => {
      
        alert(res.data.message);
        todoData()
      })
      .catch((err) => {
        console.log("err while signup:" + err);
        alert("fail to create todo");
      });
  };
  const deleteTodoData = (id)=>{
    console.log('this is my id:' + id)
    axios.delete(`http://localhost:4000/api/v1/deleteTodo/${id}`)
      .then(res => {
        alert(res.data.message);
        todoData();
      }).catch((err)=>{
        console.log('err while signup:'+ err);
        alert('fail to delete todo')
      })
    };
  return (
    <>
      <div className ='main_div'>
      <div className='heading_div'>
        <h6>write your todos</h6>
      </div>
      <div className='input_div'>
      <input
        name="title"
        type="text"
        value={todo.title}
        placeholder="write todo title"
        onChange={todoHandler}
      />
      <input
        name="description"
        type="text"
        value={todo.description}
        placeholder="write todo description"
        onChange={todoHandler}
      />
      </div>
      <div className="button_div">
      <button
        title="add todoItems"
        onClick={() =>
          dispatch(
            addTodo(todo),
            
            setTodo({ title: "", description: "" }),
            addTodoDataInDb()
          )
          
        }
      >
        add todo
      </button>
      <button onClick={goToLogin}>Go to login</button>
      </div>

      {/* {console.log(todo.title)}
      {console.log(todo.description)} */}

      {gettedTodo.map((currentList) => {
        return (
          <div className='forAddedTodoDiv' key={currentList._id}>
            {/* {console.log(currentList.id)} */}
            
              <p>{currentList.title}</p>
              <button
                title="delete Todo"
                onClick={() =>
                  dispatch(deleteTodo(currentList._id),setGattedTodo([]), deleteTodoData(currentList._id))
                }
              >
                del
              </button>
              
          
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Todos;
