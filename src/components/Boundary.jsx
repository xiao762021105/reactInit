import React,{Component} from 'react';

const Boundary = (props) => {
  const defaultStyle = {
    width: '100%',
    height: '15px',
    backgroundColor: '#EFF2F5'
  }
  const style = props.style ? Object.assign({},defaultStyle,props.style) : defaultStyle;
  return (
    <div style={style} />
  )
}

export default Boundary;