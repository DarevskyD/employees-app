import "./emploees-list.css";

import EmploeesListItem from "../emploees-list-item/emploees-list-item";

const EmploeesList = ({ data, onDelete, onToggleIncrease, onToggleGrow }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmploeesListItem
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

export default EmploeesList;
