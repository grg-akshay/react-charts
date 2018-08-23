import React from 'react';
import {Bar, Doughnut, Pie} from 'react-chartjs-2';
import './Charts.css';
import PropTypes from 'prop-types';

const Charts= props => {

    return(
            <React.Fragment>
             {props.chartFlag===1 &&
                <Bar
                data={props.chartData}
                width={100}
                height={300}
                options={{
                    title:{
                        display:props.displayTitle,
                        text:'Largest Cities In '+props.location,
                        //fontSize:25
                    },
                    legend:{
                        display:props.displayLegend,
                        position:props.legendPosition
                    },
                    maintainAspectRatio: false
                }}
                />
            }
            {props.chartFlag===2 &&
                <Doughnut
                data={props.chartData}
                width={80}
                height={300}
                options={{
                    title:{
                        display:props.displayTitle,
                        text:'Largest Cities In '+props.location,
                        //fontSize:25
                    },
                    legend:{
                        display:props.displayLegend,
                        position:props.legendPosition
                    },
                    maintainAspectRatio: false
                }}
                />
            }
             {props.chartFlag===3 &&
                <Pie
                data={props.chartData}
                width={80}
                height={300}
                options={{
                    title:{
                        display:props.displayTitle,
                        text:'Largest Cities In '+props.location,
                        //fontSize:25
                    },
                    legend:{
                        display:props.displayLegend,
                        position:props.legendPosition
                    },
                    maintainAspectRatio: false
                }}
                />
            }
                </React.Fragment>

    )
}

Charts.defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'US'
}

Charts.propTypes={
    chartFlag: PropTypes.number,
}
export default Charts;