import React from 'react';
import { Link } from 'react-router-dom';
import './components/Styles/Chart-Table.css';
import Alltable  from './Alltable';
// import Chart from './Chart';
import './../src/components/Styles/Chart.css';
import Checkbox from './components/Checkbox.js';
import CompChart from './components/Component_Chart.js';
import './components/Styles/ChartTable.css';

class ChartTable extends React.Component {
    state = { 
      data: '',
      loading: true,
      error: null,
      AxisY: {},
      hour:this.props.match.params.hour,
  };
  
  componentDidMount() {
    this.fetchData();
  
  }
  // este componente actualiza cuando hay un cambio del Link(se agrega las horas),
  // limpia la data, las demas variables, el estado de las horas se actualiza  y hace el llamado del fetchdata para traer de nuevo
  // el json del backend
  async componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      await this.setState({
        data: '',
        loading: true,
        error: null,
        AxisY: {},
        hour:this.props.match.params.hour,
      });
      this.fetchData();
    }
  }
  
  fetchData = async () => {
    this.setState({loading: true, error: null})
  
    try{
  
        // const response = await fetch('http://localhost:8000/?hour='+this.state.hour);
      //console.log('link',response);
        const response = await fetch('http://104.248.53.140/SeverGet.php/?hour='+this.state.hour);
        const data = await response.json();
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

  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    // if (this.state.loading === true) {
    //   return <PageLoading />;
    // }
  
    // if (this.state.error) {
    //   return <PageError error={this.state.error} />;
    // }


    return (
      <React.Fragment>

        {/* seccion botones para escoger datos por horas */}
        <div className="containerSectionButtons">
          <h4 className='titulo'>See data in: </h4>
        <br/>
        <div className='containerButtons'>
        
          <div>
            <Link to={`/Chart-table/1`}>
              <button className="buttonh">
                Last hour
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/4`}>
              <button className="buttonh">
                Last 4 hours
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/8`}>
            <button className="buttonh">
                  Last 8 hours
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/12`}>
            <button className="buttonh">
                Last 12 hours
            </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/24`}>
            <button className="buttonh">
              Last 24 hours
            </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/72`}>
            <button className="buttonh">
                Last 3 days
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/168`}>
            <button className="buttonh">
                1 week
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/336`}>
            <button className="buttonh">
                2 week
              </button>
            </Link>
          </div>
          <div>
            <Link to={`/Chart-table/672`}>
            <button className="buttonh">
                1 Month
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/2016`}>
            <button className="buttonh">
                3 Months
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/4032`}>
            <button className="buttonh">
                6 Months
              </button>
            </Link>
          </div>
  
          <div>
            <Link to={`/Chart-table/8064`}>
            <button className="buttonh">
                1 Year
              </button>
            </Link>
          </div>
        </div>  
  
        </div>
        <br/>
        <br/>

         <Alltable
            data = {this.state.data}
          />
          <br/>
          <br/>
         <div className='containerSectionButtons'><h4 className='titulo'>Chart</h4></div> 
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
  
  export default ChartTable;
  