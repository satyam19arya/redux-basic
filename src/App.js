import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import CreateNote from './example2/CreateNote';
import ListNote from './example2/ListNote';

function App() {
  return (
    <div className="App">
      <Child1/>
      <Child2/>
      <CreateNote/>
      <ListNote/>
    </div>
  );
}

export default App;