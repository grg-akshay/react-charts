import React, {Component} from 'react';
import Buttons from '../Buttons/Buttons';
import Charts from '../Charts/Charts';
import './ChartWrapper.css';
import '../Buttons/Buttons.css';


class ChartWrapper extends Component{

  constructor(props){
    super(props);
    this.handleButtonClick=this.handleButtonClick.bind(this);
    this.handleFlag= this.handleFlag.bind(this);
    this.state= {
        chartFlag: 1,
        chartData:{
          labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
          datasets:[
            {
              label:'Population',
              data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
              ],
              backgroundColor:[
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      };
  }

  componentDidMount(){
    document.title='React charts';
  }

  handleFlag(event, id, num){
    if(event.target.id===id && this.state.chartFlag!==num){
        console.log(event.target.id);
        document.getElementById(event.target.id).classList.add('active');
        document.getElementById(this.state.chartFlag).classList.remove('active');
        this.setState({
            chartFlag:num
        })
    } 
  }

  handleButtonClick(event){
    this.handleFlag(event, "1", 1);
    this.handleFlag(event, "2", 2);
    this.handleFlag(event, "3", 3);  
  }

render(){
  const arrayOfCharts=["Bar", "Doughnut", "Pie"];
    return(
        <div>
            <div className='button-container'>
              <Buttons 
              chartTypes={arrayOfCharts} 
              handleButtonClick={this.handleButtonClick}
              />
            </div>

            <div className='chart-container'>
              <Charts 
              chartFlag ={this.state.chartFlag}
              chartData={this.state.chartData}
              />
            </div>
        </div>
    )
}
}

export default ChartWrapper;