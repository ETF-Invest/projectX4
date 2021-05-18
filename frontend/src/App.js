import React, {useState} from 'react';
import './App.css';
import TradesTable from "./components/TradesTable";
import UploadFile from "./components/UploadFile";

function App() {
   return (
      <>
         <TradesTable/>
         <UploadFile/>
      </>
   );
}

export default App;
