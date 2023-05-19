import React, { useState } from 'react';
import './app.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');


  const deleteTodo = (id) => {
    setTodos(toDos.filter((obj) => obj.id !== id));
  };
  return (
    <div>
      <div className="app">
        <div className="mainHeading">
          <h1  >Tasks For Today</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2 id='mainHead'>It's Tuesdsay!</h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add to List" />
          <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.slice().reverse().map((obj) => {

            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {

                    setTodos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>


                </div>
                <div className="right">
                  <i onClick={() => deleteTodo(obj.id)} className="fas fa-times"></i>
                </div>
              </div>
            )
          })}
          {toDos.map((obj) => {
            if (obj.status) {
              return (<h1>{obj.text}</h1>)
            }
            return null
          })}
        </div>
      </div>

    </div>

  );
}

export default App;
