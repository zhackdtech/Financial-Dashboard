import React from 'react';

const styles = {
  Text: {
    color: '#fefefe',
    fontSize: '14px',
    fontFamily: 'Manrope',
    fontWeight: 600,
    padding: '3px 0 0 0'
    // lineHeight: '18px',
  },
};

const defaultProps = {
  text: 'Zhack DTech',
};

const Username = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Username;