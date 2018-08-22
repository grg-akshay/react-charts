import React from 'react';
import './Buttons.css';

const Buttons = props => {
    return (  
      <React.Fragment>
          {
            props.chartTypes.map((curr,index,array)=>{
                return <button
                        key={index+1}
                        id={(index+1).toString()}
                        onClick={props.handleButtonClick}>
                        {curr} Chart
                        </button>
            })
          }
      </React.Fragment>
    );
  };

  export default Buttons;