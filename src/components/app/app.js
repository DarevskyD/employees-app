import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmploeesAddForm from "../emploees-add-form/emploees-add-form";
import EmploeesList from "../emploees-list/emploees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmploeesList />
      <EmploeesAddForm />
    </div>
  );
}

export default App;
