import React from 'react';
import './Styles/Checkbox.css'
// import PropTypes from 'prop-types';

class Checkbox extends React.Component{

constructor(props){
    super(props)
    this.state = {
        // Yaxis: new Map(),
        Yaxis: {
            'Temperature':false,
            'RH':false,
            'Radiation':false,
            'Wind_D':false,
            'Wind_S':false,
            'Rain':false,
            'ET_daily':false,
            'Rain_daily':false,
            'Temperature_Min':false,
            'Temperature_Max':false,
            'Soil_moisture_1':false,
            'Soil_moisture_2':false,
            'Root_depth':false,


        },
    }
    // this.GetYaxis = this.GetYaxis.bind(this);
}



GetYaxis = (e) => {
    // const value = e.target.value;
    // const isChecked = e.target.checked;
    // this.setState(prevState => ({ Yaxis: prevState.Yaxis.set(value, isChecked) }));


    let Yaxis = this.state.Yaxis;
    Yaxis[e.target.value] = e.target.checked;
    this.setState({
        Yaxis: {...Yaxis} ,
    });
}

handleSubmit = e => {
    e.preventDefault();
    };



render(){

    const {handleClickApply} = this.props;
    const { Yaxis } = this.state;

    return(
        <React.Fragment>
            <div onSubmit={this.handleSubmit} >

                <h5 className="styleInfo">Weather Data UsoChicamocha</h5>

                <div class="containerCheck">


                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" 
                    value="Temperature" /> 
                    <span className="label-text">Temperature</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="RH" /> 
                    <span className="label-text">RH</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Radiation" /> 
                    <span className="label-text">Radiation</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Wind_D" /> 
                    <span className="label-text">Wind D</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Wind_S" /> 
                    <span className="label-text">Wind S</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Rain" /> 
                    <span className="label-text">Rain</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="ET_daily" /> 
                    <span className="label-text">ET daily</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Rain_daily" /> 
                    <span className="label-text">Rain daily</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Temperature_Min" /> 
                    <span className="label-text">Min Temp</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Temperature_Max" /> 
                    <span className="label-text">Max Temp</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Soil_moisture_1" /> 
                    <span className="label-text">Soil moisture 1</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Soil_moisture_2" /> 
                    <span className="label-text">Soil moisture 2</span>
                </label>
                <br />
                <label
                value={this.state.value}
                onChange= {this.GetYaxis}
                >
                    <input type="checkbox" value="Root_depth" /> 
                    <span className="label-text">Root depth</span>
                </label>
                <br />
                </div>

                <button 
                type="button" 
                className="btn btn-secondary btn-lg boton"
                onClick={() => handleClickApply(Yaxis)} 
                >
                     apply
                </button>

            </div>

        </React.Fragment>
    );
}
}


export default Checkbox;