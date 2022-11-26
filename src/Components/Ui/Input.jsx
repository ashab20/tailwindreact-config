import React from 'react'

const Input = ({placeholder,value,handler}) => 
    <input type="text" value={value} placeholder={placeholder}/>;

Input.defaultProps =  {
    placeholder:'Enter text',
    value:'',
    handler:false,

}

export default Input