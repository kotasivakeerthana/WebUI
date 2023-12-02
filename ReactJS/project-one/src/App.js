import logo from './logo.svg';
import './App.css';
import Hello from './Components/FunctionalComponents/Hello';
import Message from './Components/FunctionalComponents/Message';
import Sample from './Components/FunctionalComponents/Sample';
import Greet from './Components/ClassComponents/Greet';

function App() {
  return (
    <div>
      <Hello/>
      <hr/>
      <Message/>
      <hr/>
      <Sample/>
      <hr/>
      <Greet/>
    </div>
     
  );
}

export default App;
