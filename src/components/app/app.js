import { Component } from "react";
import nextId, { setPrefix } from "react-id-generator";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    setPrefix("employee-id-");
    super(props);
    this.state = {
      data: [
        {
          name: "John S.",
          salary: 1000,
          increase: true,
          grow: false,          
          id: nextId(),
        },
        {
          name: "Mat T.",
          salary: 800,
          increase: false,
          grow: true,          
          id: nextId(),
        },
        {
          name: "Alex D.",
          salary: 1500,
          increase: false,
          grow: false,          
          id: nextId(),
        },        
      ],
      term: '',
      filter: 'all'
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
      grow: false,     
      id: nextId(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({      
        data: data.map(item => {
          if (item.id === id) {
            return {...item, increase: !item.increase}
          }
          return item;
        })    
    }));
  };

  onToggleGrow = (id) => {
    this.setState(({ data }) => ({      
      data: data.map(item => {
        if (item.id === id) {
          return {...item, grow: !item.grow}
        }
        return item;
      })    
    }));
  };

  searchEmloyee = (items, term) => {
    if(term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({
      term: term
    })
  }

  filterEmployees = (items, filter) => {
    switch(filter) {
      case 'increase':
        return items.filter(item => item.increase);
      case 'grow':
        return items.filter(item => item.grow);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter: filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const employees = data.length;
    const increased = data.filter(item => item.increase).length;
    const visibleData = this.filterEmployees(this.searchEmloyee(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleGrow={this.onToggleGrow}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
