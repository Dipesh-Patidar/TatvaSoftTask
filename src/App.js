import React,{createContext,useContext,useReducer} from 'react';
import './App.css';
import InputComponets from './componets/InputComponets';
import ListComponet from './componets/ListComponet';
import  reducer  from './componets/Reducer';

export const context = createContext();

const initialValue = {
item:[]
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialValue);

  const AddNewDetail = (data) =>{
    return dispatch({
      type:'AddNewUser',
      payload:data
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <context.Provider value={{...state,AddNewDetail}}>
          <div className='col-md-6'>
            <InputComponets />
          </div>
          <div className='col-md-6'>

            <ListComponet />
          </div>
          </context.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
