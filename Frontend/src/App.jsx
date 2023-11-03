import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SignupForm from './components/Signup'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <SignupForm></SignupForm>
    </>
  )
}


export default App
