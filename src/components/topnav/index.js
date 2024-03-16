import React from 'react';

const styles = {
  Card: {
    top: '12px',
    left: '253px',
    width: '100%',
    height: '88px',
    backgroundColor: '#fefefe',
    borderRadius: '26px',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
  },
};

const Card = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card;