import "./app-info.css";

const AppInfo = ({employees, increased}) => {
  
  
  return (
    <div className="app-info">
      <h1>Staff at company</h1>
      <h3>Total number of staff: {employees}</h3>
      <h3>Bonus will receive: {increased}</h3>
    </div>
  );
};

export default AppInfo;
