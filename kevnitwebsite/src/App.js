
import React from 'react';

import {Footer, Blog, Possibility, Features,Header,Services} from './containers'

import {Cta, Brand, Navbar, Use } from './components'

import './App.css'
function App() {
  return (
    
    <div className='App'>
      
        <div className='gradient__bg'>
          
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <Services/> 
      <Use/>
    <Services/> 
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App
