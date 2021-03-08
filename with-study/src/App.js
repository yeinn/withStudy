import React, {useState} from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
const App = () => {
  const[todos, setTodos] = useState([
    {
      id:1,
      text:'리액트 기초 알아보기',
      checked:true,
  },
  {
    id:2,
    text:'컴포넌트 스타일링',
    checked:true,
},
{
  id:3,
  text:'일일 스터디 공유 앱 만들기',
  checked:false,
},
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;
