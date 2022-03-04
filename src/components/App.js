import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Anime from '../pages/Anime/Anime';

function App() {
   return (
      <div className="App">
         <Router>
            <main className="mt-[71px] overflow-x-hidden">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/anime/:id" element={<Anime />} />
               </Routes>
            </main>
         </Router>
      </div>
   );
}

export default App;
