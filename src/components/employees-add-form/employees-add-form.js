import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      error: false,      
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {salary, name} = this.state;
    if(name.length >= 1 && salary) {
      this.props.onAdd(name, salary);
      this.setState({
        name: "",
        salary: "",
        error: false,        
      })
    } else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    const { name, salary, error } = this.state;

    let classNames = 'app-add-form';
    if(error) {
      classNames += ' error';
    }
    
    return (
      <div className={classNames}>
        <h3>Add a new employee</h3>
        <form 
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light btn-add">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
