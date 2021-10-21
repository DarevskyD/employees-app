import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'increase', label: 'To increase'},
    {name: 'grow', label: 'To grow'},
    {name: 'moreThan1000', label: 'Salary more than 1000 $'},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return(
      <button 
        type="button" 
        key={name} 
        className={`btn ${clazz}`}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}      
    </div>
  );
};

export default AppFilter;
