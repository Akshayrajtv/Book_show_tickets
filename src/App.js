import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import BookingForm from './screens/BookingForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
              <Routes>
              <Route path="/" exact Component={Homescreen} />   
                   
               <Route path='/booking/:id/:name' element={<BookingForm/>}/>


              </Routes>
              
            </BrowserRouter>
    </div>
  );
}

export default App;
