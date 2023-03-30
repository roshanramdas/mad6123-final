import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { CgPlayListAdd } from 'react-icons/cg';
import TodoList from './TodoList';
import { DB } from './db/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // fetch data from firebase
  useEffect(() => {
    const q = query(collection(DB, 'todos'), orderBy('time', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data().time));
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          date: doc.data().date,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  //input todo
  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  // date
  const toDate = () => {
    let date = new Date();
    const today = date.toDateString();
    return today;
  };

  // button Add todo
  const addTodos = (e) => {
    e.preventDefault();
  
    //if empty
    if (input === '') {
      console.log('Type Something ');
      return;
    }
  
    //insert into firebase
    addDoc(collection(DB, 'todos'), {
      todo: input,
      time: serverTimestamp(),
      date: toDate(),
    }).then(() => {
      console.log('Todo added successfully!');
    }).catch((error) => {
      console.error('Error adding todo:', error);
    });
  
    //update state
    setTodos([
      ...todos,
      {
        todo: input,
        time: new Date(),
        date: toDate(),
      },
    ]);
    setInput('');
  };

  return (
    <div>
      <h1>
        Get Check Go
        <span role="img" aria-label="fire">
          🔥
        </span>
      </h1>

      <form>
        <TextField
          label="Add a task..."
          type="text"
          variant="outlined"
          value={input}
          onChange={handleChange}
        />
        <span className="space"></span>
        <Button
          onClick={addTodos}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!input}
        >
          <CgPlayListAdd className="add-btn" /> Add
        </Button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
