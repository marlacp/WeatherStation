/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './components/Styles/alltable.css';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
const Alltable = () => {

  const [api, setApi] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/')
        .then((response) => response.json())
        .then((data) => setApi(data));
    }, []);


  // console.log('api',api.length);
  // var dataDir = {};
  var u = 0;
    if (api.length> 0){
      u = (api.length -1);
      console.log('api',api[u]["user"])
    }
 

    console.log('dataDir',u)
  return (
      <Wrapper>
      <div className="GridWrapper scrollable tableFixHead">
        { api.length >0 && (
          // eslint-disable-next-line react/style-prop-object
          // <table className="table table-bordered text-center" > 
          <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm scrroll table-fixed" cellspacing="0"
          width="100%" > 
            <thead>
              <tr>
          
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                <th scope="col">Date Time (YYYY-MM-DD hh:mm:ss</th>
                <th scope="col">Temperature (°C)</th>
                <th scope="col">RH (%)</th>
                <th scope="col">Radiation (KW/m2)</th>
                <th scope="col">Wind D (°)</th>
                <th scope="col">Wind S (°)</th>
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
              { api.map(function(item, i)
              {
                return(
              <tr>
                
                <td>{item["Latitude"]}</td>
                <td>{item["Longitude"]}</td>
                <td>{item["Date_Time"]}</td>
                <td>{item["Temperature"]}</td>
                <td>{item["RH"]}</td>
                <td>{item["Radiation"]}</td>
                <td>{item["Wind_D"]}</td>
                <td>{item["Wind_S"]}</td>
                <td>{item["Rain"]}</td>
                <td>{item["ET_daily"]}</td>
                <td>{item["Rain_daily"]}</td>
                <td>{item["Temperature_Min"]}</td>
                <td>{item["Temperature_Max"]}</td>
                <td>{item["Soil_moisture_1"]}</td>
                <td>{item["Soil_moisture_2"]}</td>
                <td>{item["Root_depth"]}</td>
                <td>{item["Seedtime"]}</td>
              </tr>
              )})

              }

            </tbody>
            </table>
          )}
       </div>
      </Wrapper>
  );
};
export default Alltable;

