import { Component } from "react";
import nextId, { setPrefix } from "react-id-generator";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmploeesAddForm from "../emploees-add-form/emploees-add-form";
import EmploeesList from "../emploees-list/emploees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    setPrefix("emploee-id-");
    super(props);
    this.state = {
      data: [
        { name: "John S.", salary: 1000, increase: true, id: nextId() },
        { name: "Mat T.", salary: 800, increase: false, id: nextId() },
        { name: "Alex D.", salary: 1500, increase: false, id: nextId() },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const result = data.filter((item) => item.id !== id);
      return {
        data: result,
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: nextId(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmploeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmploeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
