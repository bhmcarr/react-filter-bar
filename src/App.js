import './App.css';
import FilterBar from './FilterBar';

const DUMMY_FILTERS = [
  {name: "System", value: "EDI"},
  {name: "Assignee", value: "Brandon Carr"},
  {name: "Company", value: "Distribution"},
  {name: "Company", value: "Distribution"},
  {name: "Service Tier", value: "Tier 4"},
  {name: "Service Tier", value: "Tier 4"},
  {name: "Assignee", value: "Brandon Carr"},
  {name: "Queue", value: "Accounting"},
  {name: "System", value: "EDI"},
  {name: "Service Tier", value: "Tier 4"},
  {name: "Assignee", value: "Brandon Carr"},
  {name: "Queue", value: "Accounting"},
];

function App() {
  return (
    <div className="App flex flex-row">
      <div className="flex flex-col w-1/4 h-screen shadow-lg z-10">
        <FilterBar filters={DUMMY_FILTERS}/>
      </div>
      <div className="flex flex-col h-screen w-3/4 bg-gray-100 z-0">

      </div>
    </div>
  );
}

export default App;
