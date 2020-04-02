/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './components/Styles/table.css';

// import * as CSV from 'csv-string';


// const GridWrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
//   margin-top: 1em;
//   margin-left: 6em;
//   margin-right: 6em;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: minmax(25px, auto);
// `; 
const table = () => {

  const [api, setApi] = useState([]);

  useEffect(() => {
      fetch('http://104.248.53.140/SeverGet.php/?hour=8064')
      // fetch('http://localhost:8000/?hour=8064')
        .then((response) => response.json())
        .then((data) => setApi(data));
    }, []);


  // console.log('api',api.length);
  // var dataDir = {};
  var u = 0;
    if (api.length> 0){
      u = (api.length -1);
      // console.log('api',api[u]["user"])
    }
 

    // console.log('dataDir',u)
  return (
      <div>

      <div>  <h4 className='titulo'>Latest data</h4></div>

      <div className="GridWrapper scrollable">
       
        { api.length >0 && (
          // eslint-disable-next-line react/style-prop-object
          <table className="table table-bordered text-center" > 
            <thead>
              <tr>
                {/* <th scope="row"></th> */}
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                <th scope="col">Date Time (YYYY-MM-DD hh:mm:ss)</th>
                <th scope="col">Temperature (°C)</th>
                <th scope="col">RH (%)</th>
                <th scope="col">Radiation (kW/m^2)</th>
                <th scope="col">Wind D (°)</th>
                <th scope="col">Wind S (km/h)</th>
                <th scope="col">Rain (mm)</th>
                <th scope="col">ET daily (ET)</th>
                <th scope="col">Rain daily (mm)</th>
                <th scope="col">Temperature Min (°C)</th>
                <th scope="col">Temperature Max (°C)</th>
                <th scope="col">Soil moisture_1 (%)</th>
                <th scope="col">Soil moisture_2 (%)</th>
                <th scope="col">Root depth (%)</th>
                <th scope="col">Seedtime (YYYY-MM-DD hh:mm:ss)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">1</th> */}
                <td>{api[u]["Latitude"]}</td>
                <td>{api[u]["Longitude"]}</td>
                <td>{api[u]["Date_Time"]}</td>
                <td>{api[u]["Temperature"]}</td>
                <td>{api[u]["RH"]}</td>
                <td>{api[u]["Radiation"]}</td>
                <td>{api[u]["Wind_D"]}</td>
                <td>{api[u]["Wind_S"]}</td>
                <td>{api[u]["Rain"]}</td>
                <td>{api[u]["ET_daily"]}</td>
                <td>{api[u]["Rain_daily"]}</td>
                <td>{api[u]["Temperature_Min"]}</td>
                <td>{api[u]["Temperature_Max"]}</td>
                <td>{api[u]["Soil_moisture_1"]}</td>
                <td>{api[u]["Soil_moisture_2"]}</td>
                <td>{api[u]["Root_depth"]}</td>
                <td>{api[u]["Seedtime"]}</td>
              </tr>
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
            </table>
          )}
      </div>
      </div>
  );
};
export default table;

