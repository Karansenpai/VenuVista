import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MasterCard from "./components/MasterCard";
import Footer from "./components/Footer";
import LocationSearch from "./components/LocationSearch";
import Signup from "./components/Signup";
import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import { userInfo } from "../atoms/userInfo";


function App() {
  return (
    <RecoilRoot>
      <div>
        <Router>
          {/* <InitUser /> */}
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
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
        const response = await axios.get(`${BASE_URL}/me`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.data.username) {
        setUser({
          username: response.data.username,
          password: null,
          isLoading: false,
        });
      } else {
        setUser({
          username: null,
          password: null,
          isLoading: false,
        });
      }
    } catch (e) {
        setUser({
          username: null,
          password: null,
          isLoading: false,
        })
    }
    } 
  ;

  useEffect(() => {
    init();
  },[]);

  return <></>;
}
export default App;
