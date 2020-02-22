/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import React from 'react';
import './Styles/CompChart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import {
//     HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Tooltip, Legend, LineSeries
//   } from 'react-jsx-highcharts';

class CompChart extends React.Component{


render(){
    var datadic = {};
    datadic = (this.props.datos);

    var Yaxis2 = (this.props.Yaxis);
    var DateTime = [];

    if (Yaxis2 === null){
        return null;
    }

    // Validacion variables boleanas eje Y 
    // var EjeY = [];

    var Temperature = [];
    var RH = [];
    var Radiation = [];
    var Wind_D = [];
    var Wind_S = [];
    var Rain = [];
    var ET_daily = [];
    var Rain_daily = [];
    var Temperature_Min = [];
    var Temperature_Max = [];
    var Soil_moisture_1 = [];
    var Soil_moisture_2 = [];
    var Root_depth = [];


// condición que recibe la variable del checkbox y crear el array para la grafica
    if (datadic.length>0)
    {
        // variable eje X (Date_Time)
        datadic.map(
            function(item, i){
                DateTime = DateTime.concat(item["Date_Time"]);
            }
        );
        


        // Variable Temperature
        if(Yaxis2['Temperature'] === true){
            datadic.map(
                function(item, i){
                    Temperature = Temperature.concat(item["Temperature"]);
                }
            );
            
            for ( var c = 0; c < Temperature.length; c++ ){
                Temperature[c] = parseFloat(Temperature[c]);
            }
        }
        // Variable RH
        if(Yaxis2['RH'] === true){
            datadic.map(
                function(item, i){
                    RH = RH.concat(item["RH"]);
                }
            );
            
            for ( var d = 0; d < RH.length; d++ ){
                RH[d] = parseFloat(RH[d]);
            }
        }
        // variable Radiation

        if(Yaxis2['Radiation'] === true){
            datadic.map(
                function(item, i){
                    Radiation = Radiation.concat(item["Radiation"]);
                }
            );
            
            for ( var e = 0; e < Radiation.length; e++ ){
                Radiation[e] = parseFloat(Radiation[e]);
            }
        }
        // variable Wind_D
        if(Yaxis2['Wind_D'] === true){
            datadic.map(
                function(item, i){
                    Wind_D = Wind_D.concat(item["Wind_D"]);
                }
            );
            
            for ( var f = 0; f < Wind_D.length; f++ ){
                Wind_D[f] = parseFloat(Wind_D[f]);
            }
        }
        // variable Wind_S
        if(Yaxis2['Wind_S'] === true){
            datadic.map(
                function(item, i){
                    Wind_S = Wind_S.concat(item["Wind_S"]);
                }
            );
            
            for ( var g = 0; g < Wind_S.length; g++ ){
                Wind_S[g] = parseFloat(Wind_S[g]);
            }
        }
        // variable Rain
        if(Yaxis2['Rain'] === true){
            datadic.map(
                function(item, i){
                    Rain = Rain.concat(item["Rain"]);
                }
            );
            
            for ( var h = 0; h < Rain.length; h++ ){
                Rain[h] = parseFloat(Rain[h]);
            }
        }
        // variable ET_daily
        if(Yaxis2['ET_daily'] === true){
            datadic.map(
                function(item, i){
                    ET_daily = ET_daily.concat(item["ET_daily"]);
                }
            );
            
            for ( var j = 0; j < ET_daily.length; j++ ){
                ET_daily[j] = parseFloat(ET_daily[j]);
            }
        }
        // variable Rain_daily
        if(Yaxis2['Rain_daily'] === true){
            datadic.map(
                function(item, i){
                    Rain_daily = Rain_daily.concat(item["Rain_daily"]);
                }
            );
            
            for ( var k = 0; k < Rain_daily.length; k++ ){
                Rain_daily[k] = parseFloat(Rain_daily[k]);
            }
        }
        // variable Temperature_Min
        if(Yaxis2['Temperature_Min'] === true){
            datadic.map(
                function(item, i){
                    Temperature_Min = Temperature_Min.concat(item["Temperature_Min"]);
                }
            );
            
            for ( var l = 0; l < Temperature_Min.length; l++ ){
                Temperature_Min[l] = parseFloat(Temperature_Min[l]);
            }
        }
        // variable Temperature_Max
        if(Yaxis2['Temperature_Max'] === true){
            datadic.map(
                function(item, i){
                    Temperature_Max = Temperature_Max.concat(item["Temperature_Max"]);
                }
            );
            
            for ( var m = 0; m < Temperature_Max.length; m++ ){
                Temperature_Max[m] = parseFloat(Temperature_Max[m]);
            }
        }
        // variable Soil_moisture_1
        if(Yaxis2['Soil_moisture_1'] === true){
            datadic.map(
                function(item, i){
                    Soil_moisture_1 = Soil_moisture_1.concat(item["Soil_moisture_1"]);
                }
            );
            
            for ( var n = 0; n < Soil_moisture_1.length; n++ ){
                Soil_moisture_1[n] = parseFloat(Soil_moisture_1[n]);
            }
        }
        // variable Soil_moisture_2
        if(Yaxis2['Soil_moisture_2'] === true){
            datadic.map(
                function(item, i){
                    Soil_moisture_2 = Soil_moisture_2.concat(item["Soil_moisture_2"]);
                }
            );
            
            for ( var o = 0; o < Soil_moisture_2.length; o++ ){
                Soil_moisture_2[o] = parseFloat(Soil_moisture_2[o]);
            }
        }
        // variable Root_depth
        if(Yaxis2['Root_depth'] === true){
            datadic.map(
                function(item, i){
                    Root_depth = Root_depth.concat(item["Root_depth"]);
                }
            );
            
            for ( var p = 0; p < Root_depth.length; p++ ){
                Root_depth[p] = parseFloat(Root_depth[p]);
            }
        }

}

    const options = {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '',
            align: 'left'
        },

        xAxis: {

            categories: DateTime
        },
        yAxis: [{ // Primary yAxis 0 
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Temperature (°C)',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
    
        }, 
        { // 1 yAxis
            gridLineWidth: 0,
            title: {
                text: 'Rain (mm)',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }
    
        },  { // 2 yAxis
            gridLineWidth: 0,
            title: {
                text: 'ET daily (ET)',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }
    
        },
        { 
            // 3  yAxis
            gridLineWidth: 0,
            title: {
                text: 'RH (%)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
              
            },
            opposite: true
        }, { 
            // 4 yAxis
            gridLineWidth: 0,
            title: {
                text: 'Radiation (KW/m2)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }, { 
            // 5 yAxis
            gridLineWidth: 0,
            title: {
                text: 'Wind (°)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        },
        { 
            // 6 yAxis
            gridLineWidth: 0,
            title: {
                text: 'Soil_moisture (%)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        },
        { 
            // 7 yAxis
            gridLineWidth: 0,
            title: {
                text: 'Root_depth (%)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }


        
    
    ],
        tooltip: {
            shared: true
        },

        legend: {
            layout: 'horizontal',
            align: 'left',
            x: 0,
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
 
        series: [{
            name: 'Rain',
            type: 'column',
            yAxis: 1,
            data: Rain,
            tooltip: {
                valueSuffix: ' mm'
            }
    
        },{
            name: 'ET daily',
            type: 'column',
            yAxis: 2,
            data: ET_daily,
            tooltip: {
                valueSuffix: ' ET'
            }
    
        },
        {
            name: 'Rain daily',
            type: 'column',
            yAxis: 1,
            data: Rain_daily,
            tooltip: {
                valueSuffix: ' mm'
            }
    
        }, 
        
        {
            name: 'RH',
            type: 'spline',
            yAxis: 3,
    
            data: RH,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: '%'
            }
    
        },
        {
            name: 'Radiation',
            type: 'spline',
            yAxis: 4,
    
            data: Radiation,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: 'KW/m2'
            }
    
        },
        {
            name: 'Wind D',
            type: 'spline',
            yAxis: 5,
    
            data: Wind_D,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: '°'
            }
    
        },
        {
            name: 'Wind S',
            type: 'spline',
            yAxis: 5,
    
            data: Wind_S,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: 'm/s'
            }
    
        }, {
            name: 'Temperature Min',
            type: 'spline',
            yAxis: 0,
    
            data: Temperature_Min,
            marker: {
                enabled: false
            }
            ,
            // dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: '°C'
            }
    
        }, {
            name: 'Temperature Max',
            type: 'spline',
            yAxis: 0,
    
            data: Temperature_Max,
            marker: {
                enabled: false
            }
            ,
            // dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: '°C'
            }
    
        }, 
        
        {
            name: 'Soil_moisture_1',
            type: 'spline',
            yAxis: 6,
    
            data: Soil_moisture_1,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: '%'
            }
    
        },
        {
            name: 'Soil_moisture_2',
            type: 'spline',
            yAxis: 6,
    
            data: Soil_moisture_2,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: '%'
            }
    
        },        
        {
            name: 'Root_depth',
            type: 'spline',
            yAxis: 7,
    
            data: Root_depth,
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: '%'
            }
    
        },

        
        {
            name: 'Temperature',
            type: 'spline',
            // data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5],
            data: Temperature,
            tooltip: {
                valueSuffix: ' °C'
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    },
                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        visible: false
                    }]
                }
            }]
        }
    
      };

    
  
      

    return(
        <React.Fragment>

            <HighchartsReact highcharts={Highcharts} options={options} />                

        </React.Fragment>
    );
}
}

export default CompChart;