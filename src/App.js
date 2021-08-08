import React, { Component } from 'react';
// import FirstComponent from './components/learing-examples/FirstComponent';
// import SecondComponent from './components/learing-examples/SecondComponent';
// import ThirdComponent from './components/learing-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

// import logo from './logo.svg';
import './App.css';
 
class App extends Component { 
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
      </div>
    );
  }
}

export default App;