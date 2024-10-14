import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

interface Todo {
  id: number
  content: string
};

function App() {
  // initial 값에 따라 타입을 추론 해줌 
  const [todos, setTodos] = useState<Todo[]>([])

  const idRef = useRef(0)

  const onClickAdd = (text: string) => {
    setTodos([...todos, {id: idRef.current++, content: text}])
  }

  useEffect(() => {
    console.log("todos:", todos)
  }, [todos])

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd}/>
    </div>
  );
}

export default App;
