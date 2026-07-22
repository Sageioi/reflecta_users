import { useState,useEffect } from 'react';
import React from 'react';
import reflecta_logo from './assets/reflecta.jpg';
import axios from 'axios';
import { ClipLoader } from "react-spinners";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_USERS_URL = `${BASE_URL}/get_demo_users`
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "purple",
};
const App = () => {
      let [loading, setLoading] = useState(true);
      let [color, setColor] = useState("purple");
      const [users,setUsers] = useState(<ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />)
      useEffect(() => {
            axios.get(API_USERS_URL)
                .then((response) => {
                    setUsers(response.data.number_of_users);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []);
    
    
    return (
        <div className='w-full h-screen  bg-white flex justify-center align-middle'>
            <div className='w-400 h-100 grid grid-cols-1 text-6xl '>
                <div className=' flex justify-center items-center bg-purple-600 m-2 p-4'><span className='tracking-wide font-medium text-white'>The Aftermath</span></div>
                <div className=' flex justify-center items-center '><span className='font-medium text-purple-600'>{users} Reflectans have signed up and started using the app.</span></div>
                <div className=' flex justify-center align-middle'><img src = {reflecta_logo} className='transform-content  delay-100 hover:-translate-y-2.5 transition-all shadow-2xl leading-2 ring-1 ring-purple-600 m-2  rounded-full h-40 w-40'/></div>
            </div>
        </div>
    )
}

export default App;