import { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';

type Action = {
  type: "CREATE", 
  data: {
    id: number;
    content: string
  }
} | {
  type: "DELETE",
  id: number
}


function reducer (state: Todo[], action: Action) {
  switch(action.type) {
    case "CREATE" : {
      return [...state, action.data]
    }
    case "DELETE" : {
      return state.filter((el) => el.id !== action.id)
    }
  }
}

export const TodoStateContext = createContext<Todo[] | null>(null)
export const TodoDispatchContext = createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null)

export function useTodoDispatch () {
  const dispatch = useContext(TodoDispatchContext)

  if (!dispatch) throw new Error("TodoDispatchContext Problem")
  
  return dispatch
}


function App() {
  // initial 값에 따라 타입을 추론 해줌 
  // const [todos, setTodos] = useState<Todo[]>([])

  // 밑에는 useReducer 방식으로
  const [todos, dispatch] = useReducer(reducer, [])

  const idRef = useRef(0)

  const onClickAdd = (text: string) => {
    // setTodos([...todos, {id: idRef.current++, content: text}])

    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current ++,
        content: text
      }
    })
  }

  useEffect(() => {
    console.log("todos:", todos)
  }, [todos])

  const onClickDelete = (id: number) => {
    // setTodos(todos.filter((el) => el.id !== id))

    dispatch({
      type: "DELETE",
      id : id,
    })
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
          <Editor />
          <div>{todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}</div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
