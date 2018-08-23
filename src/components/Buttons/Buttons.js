import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';


const Buttons = props => {
    return (  
      <React.Fragment>
          {
            props.chartTypes.map((curr,index,array)=>{
                return <button
                        key={index+1}
                        id={(index+1).toString()}
                        className={(index===0? "active": "")}
                        onClick={props.handleButtonClick}>
                        {curr} Chart
                        </button>
            })
          }
      </React.Fragment>
    );
  };


  Buttons.propTypes={
    chartTypes: PropTypes.arrayOf(PropTypes.string),
    handleButtonClick: PropTypes.func
  }
  export default Buttons;