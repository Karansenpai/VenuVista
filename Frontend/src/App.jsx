import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MasterCard from './components/MasterCard'
import Footer from './components/Footer'
import LocationSearch from './components/LocationSearch'
import Signup from './components/Signup'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <LocationSearch></LocationSearch>
      <Signup></Signup>
      <MasterCard></MasterCard>
      <Footer></Footer>
    </>
  )
}


export default App
