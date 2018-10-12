import React from 'react';
import PropTypes from "prop-types";
import './Card.css';

const Card = props =>  {
  let styles =  {} ;
  if (props.showing){
    styles.backgroundColor = props.backgroundColor;
  }
  else {
    styles.backgroundColor = "gray";
  }
  
  return (
    <div 
      style={styles} 
      className="boxes" 
      onClick={props.onClick} 
    />
  );
} 



Card.propTypes = {
  showing: PropTypes.bool.isRequired,
  // backgroundColor: PropTypes.String.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Card;