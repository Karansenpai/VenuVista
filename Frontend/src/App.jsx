import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MasterCard from "./components/MasterCard";
import Footer from "./components/Footer";
import LocationSearch from "./components/LocationSearch";
import Signup from "./components/Signup";
import axios from "axios";
import React from 'react';
import { BASE_URL } from "./components/config";
import {
  RecoilRoot,
  useSetRecoilState,
} from 'recoil';

import { userInfo } from "../atoms/userInfo";
import Login from "./components/Login";
import HotelPage from "./components/HotelPage";

const spacingStyle = {
  marginTop: '16px', // Adjust the spacing as needed
  marginBottom: '16px', // Adjust the spacing as needed
  display: "flex",
  direction: "column",
  alignItems: "center",
  justifyContent: 'center'
};

function App() {


  //fetching Data
  const csvFilePath = "./zomato.csv";
  


  return (
    <RecoilRoot>
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Router>
          <InitUser/>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element = {<Login/>}></Route>
            <Route path="/" element= {<MasterCard/>}></Route>
            <Route path="/landing" element={<HotelPage/>}></Route>
          </Routes>  
          <Footer/>
        </Router>
      </div>
    </RecoilRoot>
  );
}


export function InitUser() {
  const setUser = useSetRecoilState(userInfo);
  const init = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/fetch/me`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);
      if (response.data._id) {
        setUser({
          userId: response.data._id,
          isLoading: false,
        });
      } else {
        setUser({
          userId: null,
          isLoading: false,
        });
      }
    } catch (error) {
        console.log(error);
        setUser({
          userId: null,
          isLoading: false,
        })
    }
    } 
  useEffect(() => {
    init();
  },[]);

  return <></>;
}

export default App;
