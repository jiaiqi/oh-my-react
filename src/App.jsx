import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: '创建项目', completed: true },
    { id: 2, title: '组件化开发', completed: false },
    { id: 3, title: 'JSX语法糖', completed: false },
    { id: 4, title: '掌握hooks', completed: false },
  ])

  const changeState = (e, currentTodo) => {
    currentTodo.completed = e.target.checked;
    // 必须重新设置状态,否则组件不会重新渲染
    // 更新数组需要全新对象,否则组件不会重新渲染
    setTodos([...todos])
  }

  // 新增待办事项
  const [newTodo, setNewTodo] = useState('')
  const changeNewTodo = (e) => {
    console.log(e);
    setNewTodo(e.target.value)
  }

  // 用户回车且输入框有内容则添加一个新待办
  const addTodo = (e) => {
    if (e.code === 'Enter' && newTodo) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: newTodo,
          completed: false
        }
      ])
      setNewTodo('')
    }
  }

  // 删除待办
  const removeTodo = (e)=>{
    setTodos(todos.filter(item=>item.id!==e.id))
  }
  // const xxx = true ? <div>xxx</div> : null

  return (
    <div className="App">
      <h2>待办事项</h2>
      {/* 新增待办 */}
      <div className="">
        <input type="text"
          className='new-todo'
          autoFocus
          autoComplete='off'
          placeholder='该学啥了？'
          value={newTodo}
          onChange={changeNewTodo}
          onKeyUp={addTodo}
        />
      </div>
      {/* 条件 */}
      {/* {xxx} */}
      {/* 列表 */}
      <ul>
        {
          todos.map(todo => {
            return <li key={todo.id} className='todo'>
              {/* 受控组件：赋值和事件处理 */}
              <input type="checkbox" checked={todo.completed} onChange={(e) => changeState(e, todo)} />
              <span>{todo.title}</span>
              <button className='destory' onClick={()=>removeTodo(todo)}>x</button>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
