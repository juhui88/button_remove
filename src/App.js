import logo from './logo.svg';

import { useState } from 'react';
import './App.css';

function App() {
  const [val, setValue] = useState('');
  const [state, setState] = useState([]);

  function handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      handleOnSubmit();
    }
  }

  function handleOnSubmit() {
    setState([val, ...state]);//setState
    setValue('');//setValue
  }

  function handleOnChange(e) {
    setValue(e.target.value);//setValue
  }

  function handleRemove(idx) {
    setState([...state.slice(0,idx), ...state.slice(idx+1)]);//setState(spread, slice)
  }

  return (
    <div className='App'>
      <input
        value={val}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
      <button type='submit' onClick={handleOnSubmit}>
        등록하기
      </button>
      {state.map((e, idx) => (
        <div key={idx}>
          <span>{e}</span>
          &nbsp;
          <button onClick={() => handleRemove(idx)}>제거</button> 
        </div>
      ))}
    </div>
  );
}

export default App;