
import DataIcons from "./icons/DataIcons";
import LiveChart from "../components/LiveChart";
  
const DataCards = ({ type, data }) => {
  let parameters;
  let color;
  let units;


  if (type === "water") {
    parameters = "Moisture";
    color = "#646e95";
    units = "_";
    if (data === 1) {
      data = "Present";
    } else if (data === 0) {
      data = "None";
    }
  } else if (type === "pump") {
    parameters = "pump";
    color = "#F5AA07";
    units = "_";
    if (data === 1) {
      data = "On";
    } else if (data === 0) {
      data = "Off";
    }
  } else if (type === "temp") {
    parameters = "temperature";
    color = "#b77f53";
    units = "ºC";
  } else if (type === "humid") {
    parameters = "Humidity";
    color = "#58896b";
    units = "%";
  }

  return (
    <>
      <div className="mt-3 card-shape">
        <div className="p-3">
          <DataIcons type={`${type}`} />
          <br />
          <h5 style={{ color: `${color}` }}>{parameters}</h5>

          <br />  
          <h1>{data}</h1>
          {/* <h1>{humidLog[0]}</h1>
              <h1>{humidLog[1]}</h1>
              <h1>{humidLog[2]}</h1>
              <h1>{humidLog[3]}</h1>
              <h1>{humidLog[4]}</h1> */}
          <div id="units" style={{ color: `${color}` }}>
            {units}
          </div>
          
          <LiveChart data={[90,92,99,100,91]}/>

        </div>
      </div>
    </>
  );

};

export default DataCards;
