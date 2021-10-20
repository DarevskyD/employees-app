import "./employees-list.css";

import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleGrow }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleGrow={() => onToggleGrow(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
