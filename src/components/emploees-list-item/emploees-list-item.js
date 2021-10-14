import "./emploees-list-item.css";

const EmploeesListItem = ({name, salary, increase}) => {

  let classNames = "list-group-item d-flex justify-content-between";
  if(increase) {
    classNames += ' increase';
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-donate btn-sm ">
          <i className="fas fa-donate"></i>
        </button>

        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-thumbs-up"></i>
      </div>
    </li>
  );
};

export default EmploeesListItem;
