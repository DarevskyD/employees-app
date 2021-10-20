import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleGrow,
    increase,
    grow,
  } = props;
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (grow) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span onClick={onToggleGrow} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          onClick={onToggleIncrease}
          className="btn-donate btn-sm "
        >
          <i className="fas fa-donate"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-thumbs-up fa-lg"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
