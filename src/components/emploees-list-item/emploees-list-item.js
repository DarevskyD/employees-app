import { Component } from "react";
import "./emploees-list-item.css";

class EmploeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      grow: false
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }))
  }

  onGrow = () => {
    this.setState(({grow}) => ({
      grow: !grow
    }))
  }

  render() {
    const {name, salary, onDelete} = this.props;
    const {increase, grow} = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    if(grow) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span onClick={this.onGrow} className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" onClick={this.onIncrease} className="btn-donate btn-sm ">
            <i className="fas fa-donate"></i>
          </button>

          <button 
            type="button" 
            className="btn-trash btn-sm "
            onClick={onDelete}
            >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-thumbs-up fa-lg"></i>
        </div>
      </li>
    );
  }
}

export default EmploeesListItem;
