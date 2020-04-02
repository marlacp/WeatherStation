
import React from 'react';
import './../src/components/Styles/Chart.css';
import Checkbox from './components/Checkbox.js';
import CompChart from './components/Component_Chart.js';

  
  class Chart extends React.Component{

    state = {
        data:'',
        loading: true,
        error: '',
        AxisY: {},
    };
    

    handleClickApply = (yaxis) => {
        this.setState({
                ...this.state,
                AxisY: yaxis,
        });
    }
    
    


      render(){
        var datadic = {};
        datadic = (this.props.data);
        if (datadic === null){
            return null;
          }


        var Yaxis2 = (this.props.Yaxis);
        // var DateTime = [];
        
        if (datadic === null){
            return null;
        }

        if (Yaxis2 === null){
            return null;
        }
    
          return(
              <h1>hola</h1>
    
        //     <React.Fragment>
        //       <div className='espacio container ' >
        //          <CompChart 
        //             datos = {this.state.data}
        //             Yaxis = {this.state.AxisY}
        //          /> 
        //           {/* <h1>Hola soy una grafica</h1> */}
        //             <Checkbox 
        //                 handleClickApply = {this.handleClickApply}
        //             />

        //       </div>
        //    </React.Fragment>
          );
      }

  }

  export default Chart;