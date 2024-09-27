import React,{useState,useContext} from "react";


import {UserContext} from "./componentA.jsx";


function ComponentD(){

    const user  =useContext(UserContext);

   


    


    return(

        <div style={{border:"10px solid black ",padding:"25px"}}>


            <h1>componentD</h1>
            <h2>{`your name is ${user}`}</h2>
          

        </div>

        



    );


}

export default ComponentD;