import React from 'react'

const Button = ({name,handler}) => 
    <button type='' onClick={handler} className=''>
        {name}
    </button>
    

export default Button