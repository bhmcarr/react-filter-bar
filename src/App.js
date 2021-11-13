import { useState } from 'react';
import './App.css';
import FilterBar from './FilterBar';

const DUMMY_FILTERS = [
  {name: "System", value: "EDI"},
  {name: "Assignee", value: "Brandon Carr"},
  {name: "Company", value: "Distribution"},
  {name: "Service Tier", value: "Tier 4"},
  {name: "Queue", value: "Accounting"},
];

function App() {
  const [filters, setFilters] = useState(DUMMY_FILTERS);

  const removeFilter = (filterName) => {
    var newFilters = filters.filter((obj) => {
      return obj.name !== filterName;
    });
    setFilters(newFilters);
    console.log(filters);
  }

  return (
    <div className="App flex flex-row">
      <div className="w-1/4">

      </div>
      <div className="flex flex-col w-2/4 h-screen shadow-lg z-10">
        <FilterBar filters={filters} removeFilter={removeFilter}/>
      </div>
      <div className="flex flex-col h-screen w-1/4 bg-gray-100 z-0">

      </div>
    </div>
  );
}

export default App;
