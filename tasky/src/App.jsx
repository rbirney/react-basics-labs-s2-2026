import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Load dishwasher" />
      <Task title="Laundry" deadline="Tomorrow" description = "Folding" />
      <Task title="Tidy" deadline="Today" description = "Clean Floors" />
    </div>
  );
}

export default App;
