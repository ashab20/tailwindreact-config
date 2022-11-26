import { Fragment } from "react";
import { Route,Routes } from 'react-router-dom';
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import NotFound from "../src/Pages/NotFound/NotFound"

function App() {
  return (
   <Fragment>
       <Routes>
       
        <Route path="/" element={<Layout><Home /></Layout>}/>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
   </Fragment>
  );
}

export default App;
