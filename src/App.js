import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <>
      <main className='main'>
        <Navbar />
        <Home />
      </main>
    </>
  )
}

export default App