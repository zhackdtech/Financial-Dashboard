import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '707px',
    left: '20px',
    width: '220px',
    height: '1px',
    backgroundColor: '#1E2A37',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;