import "./emploees-list.css";

import EmploeesListItem from "../emploees-list-item/emploees-list-item";

const EmploeesList = ({data}) => {

  const elements = data.map((item => {
    return (
      <EmploeesListItem {...item} />
    )
  }))

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmploeesList;
