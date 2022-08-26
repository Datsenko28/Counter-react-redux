import './App.scss';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)  
  console.log(cash);

  const addCash = () =>{
    dispatch({type: "ADD_CASH", payload: 1})
  }
  const getCash = () =>{
    dispatch({type: "GET_CASH", payload: 1})
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{cash}</h1>
        <button onClick={()=> getCash()} className="minus">- Минус</button>
        <button onClick={()=> addCash()} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
