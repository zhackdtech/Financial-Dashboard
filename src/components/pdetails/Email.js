import React from 'react';

const styles = {
  Text: {
    color: '#1E2A37',
    fontSize: '12px',
    fontFamily: 'Manrope',
    fontWeight: '500',
    lineHeight: '10px',
    padding: '3px 0 0 0'
  },
};

const defaultProps = {
  text: 'wil.marx@gmail.com',
};

const UserEmail = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default UserEmail;