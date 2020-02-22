
import React from 'react';
import './../src/components/Styles/Chart.css';
import Checkbox from './components/Checkbox.js';
import CompChart from './components/Component_Chart.js';

  
  class Chart extends React.Component{

    state = {
        data:{},
        loading: true,
        error: '',
        AxisY: {},
    };
    
    componentDidMount() {
        this.fetchData();

    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try{
            var response = await fetch('http://localhost:8000/');
            var data = await response.json();
            this.setState({loading: false, data: data});

        } catch (error){
            this.setState({ loading:false, error: error});
        }
    }

    handleClickApply = (yaxis) => {
        this.setState({
                ...this.state,
                AxisY: yaxis,
        });
    }
    
    


      render(){
    
          return(
            <React.Fragment>
              <div className='espacio container ' >
                 <CompChart 
                    datos = {this.state.data}
                    Yaxis = {this.state.AxisY}
                 /> 
                  {/* <h1>Hola soy una grafica</h1> */}
                    <Checkbox 
                        handleClickApply = {this.handleClickApply}
                    />

              </div>
           </React.Fragment>
          );
      }

  }

  export default Chart;