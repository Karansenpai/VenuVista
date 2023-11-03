import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MasterCard from './components/MasterCard'
import Footer from './components/Footer'
import LocationSearch from './components/LocationSearch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <LocationSearch></LocationSearch>
      <MasterCard></MasterCard>
      <Footer></Footer>
    </>
  )
}


export default App
