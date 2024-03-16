import React from 'react';

const styles = {
  ImageContainer: {
    top: '32px',
    left: '24px',
    width: '45px',
    height: '45px',
    borderRadius: '100000px',
    border: '1px solid #e5e5e5',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.16)',
    backgroundImage: 'url(./image.jpg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://avatars.githubusercontent.com/u/50767502?v=4',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;