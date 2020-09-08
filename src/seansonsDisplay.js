import  './seasonsDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'its too cold !!!',
        iconName: 'snowflake'
    }
};

const getSensons =  (lat, month)  => {
  if(month > 3 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
  } else {
      return lat > 0 ? 'winter' : 'summer';
  }
}

const seasonsDisplay = (props) => {
    const season = getSensons(props.lat, new Date().getMonth());
    // console.log('weather',season);
    // console.log(seasonConfig.summer);

    const { text, iconName } = seasonConfig[season];
    console.log(iconName);

    // return <div>hi Seansons !! {props.lat}</div>
    return (
        <div className={`season-display ${season}`}>
           <i className={`icon-left massive ${iconName}  icon`}></i> 
           <h1>{text}</h1> 
           <i className={`icon-right massive ${iconName}  icon`}></i> 

        </div>
    )
}
 
export default seasonsDisplay;

