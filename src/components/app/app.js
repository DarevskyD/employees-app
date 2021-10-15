import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmploeesAddForm from "../emploees-add-form/emploees-add-form";
import EmploeesList from "../emploees-list/emploees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

function App() {

  const data = [
    {name: 'John S.', salary: 1000, increase: true, id: 1},
    {name: 'Mat T.', salary: 800, increase: false, id: 2},
    {name: 'Alex D.', salary: 1500, increase: false, id: 3}
  ]


  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmploeesList data={data}/>
      <EmploeesAddForm />
    </div>
  );
}

export default App;
