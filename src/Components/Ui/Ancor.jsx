import React from 'react';
import { Link } from "react-router-dom";

const Ancor = ({to,url}) => 
   <Link to={to} className="">
        {url}
   </Link>
   
export default Ancor;